import React, {useState} from 'react';
import DefaultLayout from "./DefaultLayout";
import {Row, Col, Button, Input, Modal} from "antd";


function Admin(props) {

    const[inputValue, setInputValue] = useState('')
    const[user, setUser] = useState([])
    const[isModalVisible, setIsModalVisible] = useState(false);
    const[updateIndex, setUpdateIndex] = useState()
    const[updateUserDetails, setUpdateUserDetails] = useState('')

    function addUser(){
        setUser([...user, inputValue])

        console.log(user)
    }
    const showModal = (index) => {
        setUpdateUserDetails(user[index])
        setUpdateIndex(index)
        setIsModalVisible(true);
    };

    const editUserDetails = () => {
        var dupUsers = [...user];
        dupUsers[updateIndex] = updateUserDetails
        setUser(dupUsers)
        setIsModalVisible(false)
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    function deleteUser(index){
        console.log([...user])
        var dupUsers = [...user];
        dupUsers.splice(index, 1)
        setUser(dupUsers)
    }


    return (

        <DefaultLayout>
            <div className="adduser">
                <h4 className="text-center"><b>Admin Page</b></h4>
                <Row justify='center'>
                    <Col lg={10} className="bs p-2">
                        <div className="flex">
                            <Input value={inputValue} onChange={(e) => {setInputValue(e.target.value)}} placeholder="enter user"/>
                            <Button className="ml-2" onClick={addUser}>Add</Button>
                        </div>
                    </Col>
                </Row>
                <Row justify="center" className="mt-3">
                    <Col lg={10} className="bs p-2">
                        {user.map((user, index) => {
                            return <div className="flex" style={{justifyContent : 'space-between'}}>
                                <h3>{user}</h3>
                                <div>
                                    <Button type="primary mr-2" onClick={() => {showModal(index)}}>Edit</Button>
                                    <Button type="danger" onClick={() => {deleteUser(index)}}>Delete</Button>
                                </div>

                            </div>
                        })}
                    </Col>
                </Row>
                <Modal title="User Details" visible={isModalVisible} onOk={editUserDetails} onCancel={handleCancel} okText='Edit'>
                    <Input value={updateUserDetails} onChange={(e) =>{setUpdateUserDetails(e.target.value)}} />
                </Modal>
            </div>
        </DefaultLayout>

    );
}

export default Admin;