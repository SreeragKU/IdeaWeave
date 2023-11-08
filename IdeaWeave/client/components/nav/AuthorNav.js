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
      textDecoration: "underline", 
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
          key="/author"
          icon={<SettingOutlined />}
          className={current === "/author" ? "active" : ""}
          style={
            current === "/author" ? customStyles.activeItem : customStyles.item
          }
        >
          <Link href="/author">Dashboard</Link>
        </Menu.Item>

        <SubMenu
          key="2"
          icon={<PushpinOutlined />}
          title="Posts"
          className={activeSubMenu === "/author" ? "active" : ""}
          style={activeSubMenu === "/author" ? customStyles.activeSubMenu : {}}
        >
          <Menu.Item
            key="/author/posts"
            className={current === "/author/posts" ? "active" : ""}
            style={
              current === "/author/posts"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/author/posts">All Books</Link>
          </Menu.Item>
          <Menu.Item
            key="/author/posts/new"
            className={current === "/author/posts/new" ? "active" : ""}
            style={
              current === "/author/posts/new"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/author/posts/new">Write New Book</Link>
          </Menu.Item>
          <Menu.Item
            key="/author/categories"
            className={current === "/author/categories" ? "active" : ""}
            style={
              current === "/author/categories"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/author/categories">Categories</Link>
          </Menu.Item>
        </SubMenu>

        <SubMenu key="6" icon={<CameraOutlined />} title="Media">
          <Menu.Item
            key="/author/media/library"
            className={current === "/author/media/library" ? "active" : ""}
            style={
              current === "/author/media/library"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/author/media/library">Library</Link>
          </Menu.Item>
          <Menu.Item
            key="/author/media/new"
            className={current === "/author/media/new" ? "active" : ""}
            style={
              current === "/author/media/new"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/author/media/new">Add New Media</Link>
          </Menu.Item>
        </SubMenu>

        <Menu.Item
          key="/author/comments"
          icon={<CommentOutlined />}
          className={current === "/author/comments" ? "active" : ""}
          style={
            current === "/author/comments"
              ? customStyles.activeItem
              : customStyles.item
          }
        >
          <Link href="/author/comments">Comments</Link>
        </Menu.Item>

        <Menu.Item
          key="/author/userid"
          icon={<UserOutlined />}
          className={current === "/author/userid" ? "active" : ""}
          style={
            current === "/author/userid"
              ? customStyles.activeItem
              : customStyles.item
          }
        >
          <Link href="/author/userid">Profile</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default AuthorNav;
