import { useState, useContext } from "react";
import { Menu } from "antd";
import {
  SettingOutlined,
  AppstoreOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
  BookOutlined,
} from "@ant-design/icons";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";

const { SubMenu } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("ideaweave");
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const signOut = () => {
    //remove from local storage
    localStorage.removeItem("auth");
    //remove from context
    setAuth({
      user: null,
      token: "",
    });
    //redirect
    router.push("/signin");
  };

  const roleBasedLink = () => {
    if (auth?.user?.role === "Admin") {
      return "/admin";
    } else if (auth?.user?.role === "Author") {
      return "/author";
    } else {
      return "/subscriber";
    }
  };

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      theme="dark"
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: 1001, // Above the Sider
      }}
    >
      <Menu.Item key="ideaweave" icon={<AppstoreOutlined />}>
        <Link href="/">IdeaWeave</Link>
      </Menu.Item>
      <Menu.Item key="posts" icon={<BookOutlined />}>
        <Link href="/posts">Books</Link>
      </Menu.Item>
      {auth?.user === null && (
            <>
              <Menu.Item style={{marginLeft: "auto"}} key="signup" icon={<UserAddOutlined />}>
                <Link href="/signup">Sign Up</Link>
              </Menu.Item>
              <Menu.Item key="signin" icon={<UserOutlined />}>
                <Link href="/signin">Sign In</Link>
              </Menu.Item>
            </>
          )}
      {auth?.user !== null && (<>
        <SubMenu
          key="SubMenu"
          icon={<SettingOutlined />}
          title={auth?.user?.name || "Dashboard"}
          style={{ marginLeft: "auto" }}
        >
          <Menu.ItemGroup
            title={<span style={{ color: "gray" }}>Management</span>}
          >
            <Menu.Item key="setting:1">
              <Link href={roleBasedLink()}>Dashboard</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item
          onClick={() => signOut()}
          key="signout"
          icon={<LogoutOutlined />}
        >
          Sign Out
        </Menu.Item>
      </>)}
      <Menu.Item key="toggleTheme">
        <ToggleTheme />
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;
