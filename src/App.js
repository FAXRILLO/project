import React, { useState } from "react";
import { useInfoContext } from "./context/Context";
import Auth from "./pages/Auth/Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import "./App.css";
import Cars from "./pages/Cars/Cars";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
import Logo from "./images/logo.png";
const { Header, Sider, Content } = Layout;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const { currentUser } = useInfoContext();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <img
          className="img-fluid"
          style={{ objectFit: "cover" }}
          width={200}
          src={Logo}
          alt="logo"
        />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              label: "HOME",
            },
            {
              key: "2",
              label: "Add category",
            },
            {
              key: "3",
              label: "nav 3",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={currentUser ? <Home /> : <Auth />} />
                <Route path="/cars/:id" element={<Cars />} />
              </Routes>
              <ToastContainer />
            </div>
          </BrowserRouter>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
