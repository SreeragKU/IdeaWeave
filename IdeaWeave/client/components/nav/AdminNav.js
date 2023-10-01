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

import { ThemeContext } from "../../context/theme";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AdminNav = () => {
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

  const customStyles = {
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
      textDecoration: "underline", // Underline for active items
    },
    activeSubMenu: {
      background: theme === "dark" ? "#1890ff" : "#91d5ff",
      color: "#fff",
    },
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
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
          key="/admin"
          icon={<SettingOutlined />}
          className={current === "/admin" ? "active" : ""}
          style={
            current === "/admin" ? customStyles.activeItem : customStyles.item
          }
        >
          <Link href="/admin">Dashboard</Link>
        </Menu.Item>

        <SubMenu
          key="2"
          icon={<PushpinOutlined />}
          title="Posts"
          className={activeSubMenu === "/admin" ? "active" : ""}
          style={activeSubMenu === "/admin" ? customStyles.activeSubMenu : {}}
        >
          <Menu.Item
            key="/admin/posts"
            className={current === "/admin/posts" ? "active" : ""}
            style={
              current === "/admin/posts"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/admin/posts">All Posts</Link>
          </Menu.Item>
          <Menu.Item
            key="/admin/post/new"
            className={current === "/admin/post/new" ? "active" : ""}
            style={
              current === "/admin/post/new"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/admin/post/new">Add New</Link>
          </Menu.Item>
          <Menu.Item
            key="/admin/categories"
            className={current === "/admin/categories" ? "active" : ""}
            style={
              current === "/admin/categories"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/admin/categories">Categories</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="6" icon={<CameraOutlined />} title="Media">
          <Menu.Item
            key="/admin/media/library"
            className={current === "/admin/media/library" ? "active" : ""}
            style={
              current === "/admin/media/library"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/admin/media/library">Library</Link>
          </Menu.Item>
          <Menu.Item
            key="/admin/media/new"
            className={current === "/admin/media/new" ? "active" : ""}
            style={
              current === "/admin/media/new"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/admin/media/new">Add New</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item
          key="/admin/comments"
          icon={<CommentOutlined />}
          className={current === "/admin/comments" ? "active" : ""}
          style={
            current === "/admin/comments"
              ? customStyles.activeItem
              : customStyles.item
          }
        >
          <Link href="/admin/comments">Comments</Link>
        </Menu.Item>

        <SubMenu key="10" icon={<UserSwitchOutlined />} title="Users">
          <Menu.Item
            key="/admin/users"
            className={current === "/admin/users" ? "active" : ""}
            style={
              current === "/admin/users"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/admin/users">All Users</Link>
          </Menu.Item>
          <Menu.Item
            key="/admin/users/new"
            className={current === "/admin/users/new" ? "active" : ""}
            style={
              current === "/admin/users/new"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/admin/users/new">Add New</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item
          key="/admin/userid"
          icon={<UserOutlined />}
          className={current === "/admin/userid" ? "active" : ""}
          style={
            current === "/admin/userid"
              ? customStyles.activeItem
              : customStyles.item
          }
        >
          <Link href="/admin/userid">Profile</Link>
        </Menu.Item>

        <Menu.Item
          key="/admin/customize"
          icon={<BgColorsOutlined />}
          className={current === "/admin/customize" ? "active" : ""}
          style={
            current === "/admin/customize"
              ? customStyles.activeItem
              : customStyles.item
          }
        >
          <Link href="/admin/customize">Customize</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AdminNav;
