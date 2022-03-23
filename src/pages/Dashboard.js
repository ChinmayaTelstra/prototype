import React, { useState } from "react";
import DefaultLayout from "./DefaultLayout";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import moment from 'moment';


const { Search } = Input;

function Dashboard() {

  var orderData = [
    {
      orderid: "ORD0001",
      description: "Star India (Mumbai) - SOT - Q1 FY22",
      customer: "Amazon Prime Video",
      createddate: "08/07/2020",
      orderstate: "Saved",
      sitename: "Starhub",
    },
    {
      orderid: "ORD0002",
      description: "IQiYi - HK - SOT - Q1 FY22",
      customer: "China Telecom",
      createddate: "07/17/2020",
      orderstate: "Submitted",
      sitename: "Bloomsbury",
    },
    {
      orderid: "ORD0003",
      description: "NZ, IP Handoff - MOT - Q2 FY22",
      customer: "Sky communications",
      createddate: "05/11/2019",
      orderstate: "Validated",
      sitename: "Gnangara",
    },
    {
      orderid: "ORD0004",
      description: "UFC Apex , Las Vegas - IP Hand-off - MOT - Q1 FY22",
      customer: "British telecom",
      createddate: "11/21/2020",
      orderstate: "Design",
      sitename: "IMG London",
    },
    {
      orderid: "ORD0005",
      description: "Sony India (Mumbai) - SOT - Q1 FY22",
      customer: "TV 18",
      createddate: "11/28/2021",
      orderstate: "Cancelled",
      sitename: "Paddington",
    },
    {
      orderid: "ORD0006",
      description: "Nexion (Tokyo) - SOT - Relocation to JTHA - Q1 FY22",
      customer: "Disney NAT",
      createddate: "05/10/2021",
      orderstate: "Rejected",
      sitename: "Telehouse North",
    },

    {
      orderid: "ORD0007",
      description: "APT Satellite - FRAz, Frankfurt, Germany - MOT - Q1 FY22",
      customer: "Globecast ",
      createddate: "02/10/2022",
      orderstate: "Resolved",
      sitename: "Sony Singapore",
    },

    {
      orderid: "ORD0008",
      description: "SONY - MOT - Q1 FY22",
      customer: "SONY SG ",
      createddate: "01/23/2022",
      orderstate: "Resolved",
      sitename: "Sony Singapore",
    },
    {
      orderid: "ORD0009",
      description: "Stanley - MOT - Q1 FY22",
      customer: "STANLEY ",
      createddate: "05/19/2018",
      orderstate: "Resolved",
      sitename: "Sony Singapore",
    },
    {
      orderid: "ORD0010",
      description: "Germany - MOT - Q1 FY22",
      customer: "AWS EQUINIX MD2 ",
      createddate: "12/10/2021",
      orderstate: "Resolved",
      sitename: "Sony Singapore",
    },
  ];

  var orderDetails = [
    {
      title: "Order Id",
      dataIndex: "orderid",
      sorter: (a, b) => a.orderid.localeCompare(b.orderid),
    },
    {
      title: "Description",
      dataIndex: "description",
      sorter: (a, b) => a.description.localeCompare(b.description),
    },
    {
      title: "Company",
      dataIndex: "customer",
      sorter: (a, b) => a.customer.localeCompare(b.customer),

    },
    {
      title: "Created Date (MM/DD/YYYY)",
      dataIndex: "createddate",
      sorter: (a, b) => moment(b.createddate) - moment(a.createddate)
    },
    {
      title: "Order State",
      dataIndex: "orderstate",
      sorter: (a, b) => a.orderstate.localeCompare(b.orderstate),
      filters: [
        {
          text: "Saved",
          value: "Saved",
        },
        {
          text: "Submitted",
          value: "Submitted",
        },
        {
          text: "Validated",
          value: "Validated",
        },
        {
          text: "Design",
          value: "Design",
        },
        {
          text: "Cancelled",
          value: "Cancelled",
        },
        {
          text: "Rejected",
          value: "Rejected",
        },
        {
          text: "Resolved",
          value: "Resolved",
        },

      ],
      onFilter: (value, record) => record.orderstate == value,

    },
    {
      title: "Site Name",
      dataIndex: "sitename",
      sorter: (a, b) => a.sitename.localeCompare(b.sitename),
    },
  ];

  const [tableData, setTableData] = useState(orderData);

  function searchTable(searchKey) {
    var filteredData = orderData.filter(order => JSON.stringify(order).toLowerCase().includes(searchKey.toLowerCase()));
    setTableData(filteredData);
  }
  return (
    <DefaultLayout>
      <div className='dashboard'>
      <h3>Dashboard</h3>
      <Search
        onKeyUp={(e) => {
          searchTable(e.target.value);
        }}
        className="mb-3"
        style={{ width: 250 }}
        placeholder="search Order"
      />

      <Table dataSource={tableData} columns={orderDetails} bordered/>
      </div>
     
    </DefaultLayout>
  );
}

export default Dashboard;
