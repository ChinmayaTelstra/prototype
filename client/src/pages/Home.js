import { Col, Row } from "antd";
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import Image from "../images/gmn_footprint.png";

function Home() {
  return (
    <DefaultLayout>
      <div className="home">
      <Row justify="center">
        <Col lg={14} style={{textAlign: 'center'}}>
          <img
            src={Image}
            alt=""
            height="500"
            width="1000"
          />
        </Col>
          <Col lg={24} style={{textAlign: 'center'}}>
              <h3 ><b style={{color:'tomato'}}>GMN Footprint</b></h3>
          </Col>
      </Row>

      </div>
    </DefaultLayout>
  );
}

export default Home;
