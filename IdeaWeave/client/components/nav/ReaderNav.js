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

const ReaderNav = () => {
  const [current, setCurrent] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [theme] = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(false);

  const handleResize = () => {
    setCollapsed(window.innerWidth < 100000);
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
      key: "/reader",
      icon: <SettingOutlined />,
      text: "Dashboard",
      children: [],
    },
    {
      key: "/reader/comments",
      icon: <CommentOutlined />,
      text: "Comments",
      children: [],
    },
    {
      key: "/reader/profile",
      icon: <UserOutlined />,
      text: "Profile",
      children: [],
    },
  ];

  const customStyles = {
    sider: {
      width: collapsed ? 50 : 100,
      height: "100vh",
      transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
      overflow: "hidden",
      paddingTop: "64px",
      position: "fixed",  
      left: 0,            
      top: 0,             
      zIndex: 1000,
    },
    fixedSider: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      zIndex: 1000,
      background: theme === "dark" ? "#001529" : "#fff",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    menu: {
      background: theme === "dark" ? "#001529" : "#fff",
    },
    item: {
      background: "transparent",
      transition: "background 0.3s",
    },
    itemHover: {
      background: theme === "dark" ? "#004080" : "#4da1ff",
    },
    text: {
      color: theme === "dark" ? "#fff" : "#000",
    },
    activeItem: {
      background: theme === "dark" ? "#007F7F" : "#00BFFF",
      color: "#fff",
    },
    
    activeSubMenu: {
      background: theme === "dark" ? "#007F7F" : "#00BFFF",
      color: "#fff",
      transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1) 0.1s",
    },
    subMenu: {
      width: collapsed ? "auto" : "100%",
    },
    subMenuItem: {
      width: "100%",
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

export default ReaderNav;
