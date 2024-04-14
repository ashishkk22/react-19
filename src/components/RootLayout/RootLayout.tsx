import React, { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import {
  CodeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, Button } from "antd";
import { RouterPath } from "../../routes/router.type";

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
    getItem("Example 1", RouterPath.USE_EXAMPLE),
    getItem("Example 2", RouterPath.USE_EXAMPLE_2),
  ]),
  { type: "divider" },

  getItem("Form actions", "sub2", <CodeOutlined />, [
    getItem("Example", RouterPath.ACTION_EXAMPLE),
  ]),
  { type: "divider" },

  getItem("useFormState", "sub3", <CodeOutlined />, [
    getItem("Example", RouterPath.USE_FORM_STATE),
  ]),
  { type: "divider" },

  getItem("useFormStatus", "sub4", <CodeOutlined />, [
    getItem("Example", RouterPath.USE_FORM_STATUS),
  ]),
  { type: "divider" },

  getItem("useOptimistic", "sub5", <CodeOutlined />, [
    getItem("Example", RouterPath.USE_OPTIMISTIC),
  ]),
  { type: "divider" },

  getItem("Metadata", "sub6", <CodeOutlined />, [
    getItem("Example", RouterPath.DOCUMENT_METADATA),
  ]),
  { type: "divider" },

  getItem("Ref Handling", "sub7", <CodeOutlined />, [
    getItem("Example", RouterPath.REF_HANDLING),
  ]),
  { type: "divider" },
];

const RootLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const navigate = useNavigate();

  const onMenuClickHanlder = (e: { key: string }) => {
    navigate(e.key);
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
            style={{ minHeight: "100%" }}
            onClick={onMenuClickHanlder}
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
              minHeight: "100vh",
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
