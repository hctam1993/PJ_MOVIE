import React, { Component, useEffect, useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, message } from "antd";
import { localService } from "../../services/localService";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import UserNav from "../../components/Header/UserNav";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem("User", "sub1", <UserOutlined />),
  getItem("Film", "sub2", <VideoCameraOutlined />),
  getItem("ShowTime", "sub3", <FileOutlined />),
];

export default function Management({ Component }) {
  const [collapsed, setCollapsed] = useState(false);
  let navigate = useNavigate();

  const localUser = localService.user.get();

  if (localUser.maLoaiNguoiDung !== "QuanTri") {
    message.warn("Bạn không đươc phép truy cập vào trang này");
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <img src="http://demo1.cybersoft.edu.vn/logo.png" className=" p-1" />
          <Menu
            theme="dark"
            defaultSelectedKeys={["1"]}
            mode="inline"
            items={items}
          />
        </Sider>
        <Layout className="site-layout">
          {/* <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        /> */}
          <div className="flex justify-end  bg-slate-900 h-12">
            <UserNav />
          </div>

          <Content
            style={{
              margin: "0 16px",
            }}
          >
            <Breadcrumb style={{ margin: "16px 0" }}>
              {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
            </Breadcrumb>
            <div
              className="site-layout-background"
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              <Component />
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}
