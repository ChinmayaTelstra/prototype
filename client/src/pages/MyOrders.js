import React, { useEffect } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useSelector, useDispatch } from "react-redux";
import { getAllOrders } from "../redux/actions/orderActions.";
import { Row, Col , Button } from "antd";
import { Link } from "react-router-dom";
import moment from "moment";

function MyOrders() {
    const { orders } = useSelector((state) => state.ordersReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrders())
    }, []);

    return (
        <div>
            <DefaultLayout>
                <Row gutter={16}>
                    {orders.map((myorder) => {
                        return <Col lg={12} sm={24}>
                            <div className="myorder bs m-2 p-2">
                                <h4>{myorder.projectno}</h4>
                                <p>{myorder.customer}</p>
                                <hr />
                                <p>{myorder.fullDescription}</p>
                                <div className="flex">
                                    <p>Access Switches : <b>{myorder.asite} - {myorder.bsite}</b> , </p>
                                    <p style={{marginLeft:20}}>Experience : <b>{myorder.experience} Years</b> </p>

                                </div>
                                <hr />

                                <div className="flex justify-content-between">
                                    <Link to={`/myorder/${myorder._id}`}><Button>View</Button></Link>
                                    <p>Posted on : {moment(myorder.createdAt).format('MMM DD yyyy')}</p>
                                </div>

                            </div>
                        </Col>;
                    })}
                </Row>
            </DefaultLayout>
        </div>
    );
}

export default MyOrders;
