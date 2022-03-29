import { DatePicker, Form, Radio, Select , Button } from "antd";
import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import { Input } from "antd";
import TextArea from "rc-textarea";

const { Option } = Select;

function Orders() {

  function submitForm(values){
    console.log(values);
  }


  return (
    <DefaultLayout>
      <div className="orders">
      <h3 style={{marginLeft:20}}>Order form</h3>

      <p style={{marginLeft:20}}>1. Contract Details</p>

      <Form layout="vertical" className='p-4'  onFinish={submitForm}>

        <Form.Item label="Company name" name="companyName" required rules={[{required : true, min: 3}]}>
          <Input />
        </Form.Item>

        <Form.Item label="Customer Contact Name" name="ContactName" required rules={[{required : true, max: 15}]}>
          <Input />
        </Form.Item>

        <Form.Item label="Customer Contact Email" name="CustomerEmail" required rules={[{required : true, type: 'email'}]}>
          <Input />
        </Form.Item>

        <Form.Item label="Customer Required Date" name="RequiredDate" required rules={[{required : true}]}>
          <DatePicker />
        </Form.Item>

        <p style={{marginLeft:20}}>2. Order Details</p>

        <Form.Item label="Access Switches" name="accessSwtiches" required rules={[{required : true}]}>
          <Radio.Group>
            <Radio value="A">A</Radio>
            <Radio value="B">B</Radio>
            <Radio value="A+B">A+B</Radio>
            <Radio value="A///B">A///B</Radio>
          </Radio.Group>
        </Form.Item>



        <Form.Item label="Aggregation Site A" name="AggSiteA" required rules={[{required : true}]}>
          <Select>
            <Option value="NAM7">Amsterdam (NAM7)</Option>
            <Option value="PTHW">Australia -Perth (PTHW)</Option>
            <Option value="SYDP">Australia -Sydney (SYDP)</Option>
            <Option value="FPTV">France - Paris (FPTV)</Option>
            <Option value="FRAN">Germany (FRAN)</Option>
            <Option value="FRAN">Hong Kong (HKST)</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Aggregation Site B" name="AggSiteB" required rules={[{required : true}]}>
          <Select>
            <Option value="TLOT">USA -West Coast (TLOT)</Option>
            <Option value="PTHP">Australia -Perth (PTHP)</Option>
            <Option value="SYDO">Australia - Sydney (SYDO)</Option>
            <Option value="FPA4">France - Paris (FPA4)</Option>
            <Option value="GDS1">Germany (GDS1)</Option>
            <Option value="SMDE">Spain (SMDE)</Option>
          </Select>
        </Form.Item>

        <Form.Item label="Address" name="address" required rules={[{required : true, max: 40}]}>
          <TextArea style={{width: '100%'}} className='w-100'/>
        </Form.Item>

        <Button htmlType='submit' type='primary'>Next</Button>
      </Form>
      </div>
    </DefaultLayout>
  );
}

export default Orders;
