import React, { useState, useEffect, useContext } from "react";
import { Menu, Layout } from "antd";
import Link from "next/link";
import {
  PushpinOutlined,
  CameraOutlined,
  UserSwitchOutlined,
  SettingOutlined,
  BgColorsOutlined,
  UserOutlined,
  CommentOutlined,
} from "@ant-design/icons";

import { AuthContext } from "../../context/auth";
import { ThemeContext } from "../../context/theme";

const { SubMenu } = Menu;
const { Sider } = Layout;

const ReaderNav = () => {
  const [current, setCurrent] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [auth, setAuth] = useContext(AuthContext);
  const [theme] = useContext(ThemeContext);

  const [collapsed, setCollapsed] = useState(false);
  const handleResize = () => {
    setCollapsed(window.innerWidth < 1000000);
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

  const customStyles = {
    sider: {
      width: collapsed ? 50 : 100,
      height: "100vh",
      transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
      overflow: "hidden",
      paddingTop: "64px",
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
      style={{ ...customStyles.sider, ...customStyles.fixedSider }}
    >
      <Menu
        defaultOpenKeys={["2", "6", "10"]}
        mode="inline"
        inlineCollapsed={collapsed}
        selectedKeys={[current]}
        style={customStyles.menu}
        theme={theme}
      >
        <Menu.Item
          key="/reader"
          icon={<SettingOutlined />}
          className={current === "/reader" ? "active" : ""}
          style={
            current === "/reader" ? customStyles.activeItem : customStyles.item
          }
        >
          <Link href="/reader">Dashboard</Link>
        </Menu.Item>

        <SubMenu
          key="2"
          icon={<PushpinOutlined />}
          title="Posts"
          className={activeSubMenu === "/reader" ? "active" : ""}
          style={activeSubMenu === "/reader" ? customStyles.activeSubMenu : {}}
        >
          <Menu.Item
            key="/reader/posts"
            className={current === "/reader/posts" ? "active" : ""}
            style={
              current === "/reader/posts"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/reader/posts">All Books</Link>
          </Menu.Item>
          <Menu.Item
            key="/reader/posts/new"
            className={current === "/reader/posts/new" ? "active" : ""}
            style={
              current === "/reader/posts/new"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/reader/posts/new">Add New Book</Link>
          </Menu.Item>
          <Menu.Item
            key="/reader/categories"
            className={current === "/reader/categories" ? "active" : ""}
            style={
              current === "/reader/categories"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/reader/categories">Categories</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="6" icon={<CameraOutlined />} title="Media">
          <Menu.Item
            key="/reader/media/library"
            className={current === "/reader/media/library" ? "active" : ""}
            style={
              current === "/reader/media/library"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/reader/media/library">Media Library</Link>
          </Menu.Item>
          <Menu.Item
            key="/reader/media/new"
            className={current === "/reader/media/new" ? "active" : ""}
            style={
              current === "/reader/media/new"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/reader/media/new">Add New Media</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item
          key="/reader/comments"
          icon={<CommentOutlined />}
          className={current === "/reader/comments" ? "active" : ""}
          style={
            current === "/reader/comments"
              ? customStyles.activeItem
              : customStyles.item
          }
        >
          <Link href="/reader/comments">Comments</Link>
        </Menu.Item>

        <SubMenu key="10" icon={<UserSwitchOutlined />} title="Users">
          <Menu.Item
            key="/reader/users"
            className={current === "/reader/users" ? "active" : ""}
            style={
              current === "/reader/users"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/reader/users">All Users</Link>
          </Menu.Item>
          <Menu.Item
            key="/reader/users/new"
            className={current === "/reader/users/new" ? "active" : ""}
            style={
              current === "/reader/users/new"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/reader/users/new">Add New</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item
          key={`/reader/${auth?.user?._id}`}
          icon={<UserOutlined />}
          className={current === `/reader/${auth?.user?._id}` ? "active" : ""}
          style={
            current === `/reader/${auth?.user?._id}`
              ? customStyles.activeItem
              : customStyles.item
          }
        >
          <Link href={`/reader/${auth?.user?._id}`}>Profile</Link>
        </Menu.Item>

        <Menu.Item
          key="/reader/customize"
          icon={<BgColorsOutlined />}
          className={current === "/reader/customize" ? "active" : ""}
          style={
            current === "/reader/customize"
              ? customStyles.activeItem
              : customStyles.item
          }
        >
          <Link href="/reader/customize">Customize</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default ReaderNav;
