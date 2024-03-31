import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import {
  CodeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Button } from "antd";

const { Header, Content, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("use Hook", "sub1", <CodeOutlined />, [
    getItem("Example 1", "5"),
    getItem("Example 2", "6"),
    getItem("Example 3", "7"),
  ]),

  { type: "divider" },

  getItem("Form actions", "sub2", <CodeOutlined />, [
    getItem("Example 1", "9"),
    getItem("Example 2", "10"),
  ]),
  { type: "divider" },
];

const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            mode="inline"
            items={items}
            style={{ minHeight: "100vh" }}
          />
        </Sider>
        <Layout>
          <Header style={{ background: "#fff", padding: 0 }}>
            <Button
              type="primary"
              onClick={toggleCollapsed}
              style={{ margin: 16 }}
            >
              {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button>
          </Header>
          <Content
            style={{
              margin: "24px 16px",
              padding: 24,
              background: "#fff",
            }}
          >
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default RootLayout;
