import { Layout, Menu, Avatar } from "antd";
import React from "react";
import {
        MenuUnfoldOutlined,
        MenuFoldOutlined,
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        UserAddOutlined,
        HomeOutlined,
        FolderAddOutlined,
        OrderedListOutlined,
        PlusSquareOutlined,
        LogoutOutlined,
        DashboardOutlined,
} from "@ant-design/icons";

import "../resourses/defaultlayout.css";
import Image from '../images/telstra_logo.png';
import { Link } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

export default class DefaultLayout extends React.Component {
        constructor(props) {
                super(props);
                this.state = {
                        collapsed: false,
                };
        }
        componentDidMount() {
                this.setState({ collapsed: true });
        }
        toggle = () => {
                this.setState({
                        collapsed: !this.state.collapsed,
                });
        };
        logout = () => {
                localStorage.removeItem("user");
                window.location.href = "/login";
        };

        render() {
                var user = JSON.parse(localStorage.getItem("user"));

                return (
                    <Layout>
                            <Sider width={260} className="ant-sider" trigger={null}  collapsible collapsed={this.state.collapsed}
                                   style={{overflow: "auto", height: "100vh", position: "sticky", top: 0, left: 0,}}>
                                    {this.state.collapsed ? (
                                        <div className="logo">
                                                <img alt="#" src={Image} style={
                                                    { width: '32px', position: 'relative', float: 'left', marginTop: '1px' , marginLeft: '4px' }
                                                }>
                                                </img>
                                        </div>
                                    ) : (
                                        <div className="logo">
                                                <img alt="#" src={Image} style={
                                                    { width: '32px', position: 'relative', float: 'left', marginTop: '1px' , marginLeft: '4px' }
                                                }>
                                                </img>
                                                <h5>
                                                    <Link to="/forms" style={{color: 'white'}} >GMN Order Portal</Link>
                                                </h5>
                                        </div>
                                    )}
                                    <Menu
                                        theme="dark"
                                        mode="inline"
                                        defaultSelectedKeys={[window.location.pathname]}
                                    >
                                            <Menu.Item key="/home" icon={<HomeOutlined />} className="mt-3">
                                                    <Link to="/home">Home</Link>
                                            </Menu.Item>
                                            <Menu.Item key="/dashboard" icon={<DashboardOutlined />}>
                                                    <Link to="/dashboard">Dashboard</Link>
                                            </Menu.Item>
                                            <Menu.Item key="/orders" icon={<FolderAddOutlined />}>
                                                    <Link to="/orders">New Order</Link>
                                            </Menu.Item>

                                            <Menu.Item key="/admin" icon={<PlusSquareOutlined />}>
                                                    <Link to="/admin">Admin Page</Link>
                                            </Menu.Item>

                                            <Menu.Item key="/api" icon={<OrderedListOutlined />}>
                                                    <Link to="/api">API</Link>
                                            </Menu.Item>

                                            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
                                                    <Link onClick={this.logout}>Logout</Link>
                                            </Menu.Item>
                                    </Menu>
                            </Sider>
                            <Layout className="site-layout">
                                    <Header
                                        className="site-layout-background"
                                        style={{ padding: 0 }}>

                                            {React.createElement(
                                                this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                                                {
                                                        className: "trigger",
                                                        onClick: this.toggle,
                                                }
                                            )}
                                    </Header>


                                    <Content
                                        className="site-layout-background"
                                        style={{
                                                margin: '24x 16px',
                                                padding: 24,
                                                minHeight: 280,
                                        }}
                                    >
                                            {this.props.children}
                                    </Content>
                                    <Footer style={{ textAlign: 'center' }}>Telstra Global Media Network</Footer>
                            </Layout>
                    </Layout>
                );
        }
}