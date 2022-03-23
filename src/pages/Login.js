import React from "react";
import {Button, Checkbox, Col, Form, Input, Row} from 'antd';

import 'antd/dist/antd.css';
import '../index.css';

const onFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};


function Login() {
    return (<div className='login'>
            <h1 className="heading1">GMN Order Portal</h1>
            <Row justify='center' className="flex align-items-center">
                <Col lg={10} className="bs p-5 login-form">

                    <h3>Login</h3>
                    <hr/>

                    <Form layout="vertical" onFinish={onFinish} onFinishFailed={onFinishFailed}
                          autoComplete="off">


                        <Form.Item name="username" label="Username" rules={[{
                            required: true, message: 'Please input your Username!',
                        },]}>
                            <Input/>
                        </Form.Item>

                        <Form.Item name="password" label="Password" rules={[{
                            required: true, message: 'Please input your Password!',
                        },]}>
                            <Input/>
                        </Form.Item>

                        <Form.Item>
                            <Form.Item name="remember" valuePropName="checked" noStyle>
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <a className="login-form-forgot" href="">
                                Forgot password
                            </a>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>

                        </Form.Item>

                    </Form>

                </Col>
            </Row>
        </div>);
}

export default Login;