import React, { useState, useEffect, useContext } from "react";
import { Menu, Layout } from "antd";
import Link from "next/link";
import {
  PushpinOutlined,
  CameraOutlined,
  SettingOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";

import { ThemeContext } from "../../context/theme";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AuthorNav = () => {
  const [current, setCurrent] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [theme] = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(false);

  const handleResize = () => {
    setCollapsed(window.innerWidth < 900);
  };

  useEffect(() => {
    setCurrent(window.location.pathname);
    const currentPathSegments = window.location.pathname.split("/");
    if (currentPathSegments.length >= 3) {
      setActiveSubMenu(`/${currentPathSegments[1]}`);
    } else {
      setActiveSubMenu("");
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    handleResize();
  }, []);

  const menuConfig = [
    {
      key: "/author",
      icon: <SettingOutlined />,
      text: "Dashboard",
      children: [],
    },
    {
      key: "2",
      icon: <PushpinOutlined />,
      text: "Posts",
      children: [
        { key: "/author/posts", text: "All Books" },
        { key: "/author/posts/new", text: "Write New Book" },
        { key: "/author/categories", text: "Categories" },
      ],
    },
    {
      key: "6",
      icon: <CameraOutlined />,
      text: "Media",
      children: [
        { key: "/author/media/library", text: "Library" },
        { key: "/author/media/new", text: "Add New Media" },
      ],
    },
    {
      key: "/author/comments",
      icon: <CommentOutlined />,
      text: "Comments",
      children: [],
    },
    {
      key: "/author/userid",
      icon: <UserOutlined />,
      text: "Profile",
      children: [],
    },
  ];

  const customStyles = {
    sider: {
      width: collapsed ? 80 : 200,
      height: "100vh",
      transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
      overflow: "hidden",
    },
    menu: {
      background: theme === "dark" ? "#001529" : "#f0f2f5",
    },
    item: {
      background: theme === "dark" ? "#001529" : "#f0f2f5",
    },
    itemHover: {
      background: theme === "dark" ? "#1890ff" : "#91d5ff",
    },
    text: {
      color: theme === "dark" ? "#fff" : "#000",
    },
    activeItem: {
      background: theme === "dark" ? "#1890ff" : "#91d5ff",
      color: "#fff",
      textDecoration: "underline",
    },
    activeSubMenu: {
      background: theme === "dark" ? "#1890ff" : "#91d5ff",
      color: "#fff",
      transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s", // Add a small delay
    },
  };
  

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
      style={{ ...customStyles.sider, overflow: "hidden" }}
    >
      <Menu
        defaultOpenKeys={["2", "6", "10"]}
        mode="inline"
        inlineCollapsed={collapsed}
        selectedKeys={[current]}
        style={customStyles.menu}
        theme={theme}
      >
        {menuConfig.map((item) => (
          <React.Fragment key={item.key}>
            {item.children.length > 0 ? (
              <SubMenu
                key={item.key}
                icon={item.icon}
                title={item.text}
                className={activeSubMenu === item.key ? "active" : ""}
                style={activeSubMenu === item.key ? customStyles.activeSubMenu : {}}
              >
                {item.children.map((child) => (
                  <Menu.Item
                    key={child.key}
                    className={current === child.key ? "active" : ""}
                    style={
                      current === child.key
                        ? customStyles.activeItem
                        : customStyles.item
                    }
                  >
                    <Link href={child.key}>{child.text}</Link>
                  </Menu.Item>
                ))}
              </SubMenu>
            ) : (
              <Menu.Item
                key={item.key}
                icon={item.icon}
                className={current === item.key ? "active" : ""}
                style={
                  current === item.key ? customStyles.activeItem : customStyles.item
                }
              >
                <Link href={item.key}>{item.text}</Link>
              </Menu.Item>
            )}
          </React.Fragment>
        ))}
      </Menu>
    </Sider>
  );
};

export default AuthorNav;
