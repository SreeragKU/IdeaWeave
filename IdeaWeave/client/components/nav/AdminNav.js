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
  ContainerFilled,
} from "@ant-design/icons";

import { AuthContext } from "../../context/auth";
import { ThemeContext } from "../../context/theme";

const { SubMenu } = Menu;
const { Sider } = Layout;

const AdminNav = () => {
  const [current, setCurrent] = useState("");
  const [activeSubMenu, setActiveSubMenu] = useState("");
  const [auth, setAuth] = useContext(AuthContext);
  const [theme] = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(false);

  const handleResize = () => {
    setCollapsed(window.innerWidth < 10000);
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
      transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
      overflow: "hidden",
      paddingTop: "64px",
      height: "100vh",
    },
    fixedSider: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 1000,
      background: theme === "dark" ? "#001529" : "#fff",
      boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    },
    menu: {
      background: theme === "dark" ? "#001529" : "#fff",
      height: "calc(100% - 64px)",
      overflowY: "auto",
      overflowX: "hidden", 
      scrollbarWidth: "thin",
      WebkitOverflowScrolling: "touch", 
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
          key="/admin"
          icon={<SettingOutlined />}
          className={current === "/admin" ? "active" : ""}
          style={
            current === "/admin" ? customStyles.activeItem : customStyles.item
          }
        >
          <Link href="/admin">Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          key="/admin/library"
          icon={<ContainerFilled />}
          className={current === "/admin/library" ? "active" : ""}
          style={
            current === "/admin/library" ? customStyles.activeItem : customStyles.item
          }
        >
          <Link href="/admin/library">Library</Link>
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
            <Link href="/admin/posts">All Books</Link>
          </Menu.Item>
          <Menu.Item
            key="/admin/drafts"
            className={current === "/admin/posts/drafts" ? "active" : ""}
            style={
              current === "/admin/posts/drafts"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/admin/posts/drafts">All Drafts</Link>
          </Menu.Item>
          <Menu.Item
            key="/admin/posts/new"
            className={current === "/admin/posts/new" ? "active" : ""}
            style={
              current === "/admin/posts/new"
                ? customStyles.activeItem
                : customStyles.item
            }
          >
            <Link href="/admin/posts/new">Add New Book</Link>
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
            <Link href="/admin/media/library">Media Library</Link>
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
            <Link href="/admin/media/new">Add New Media</Link>
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
          key={`/admin/${auth?.user?._id}`}
          icon={<UserOutlined />}
          className={current === `/admin/${auth?.user?._id}` ? "active" : ""}
          style={
            current === `/admin/${auth?.user?._id}`
              ? customStyles.activeItem
              : customStyles.item
          }
        >
          <Link href={`/admin/${auth?.user?._id}`} id="profile">Profile</Link>
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
