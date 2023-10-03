import { useState, useContext } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";
import { AuthContext } from "../context/auth";
import { useRouter } from "next/router";

const { SubMenu } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("mail");
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

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode="horizontal"
      theme="dark"
    >
      <Menu.Item key="ideaweave" icon={<MailOutlined />}>
        <Link href="/">IdeaWeave</Link>
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
          title="Dashboard"
          style={{ marginLeft: "auto" }}
        >
          <Menu.ItemGroup
            title={<span style={{ color: "gray" }}>Management</span>}
          >
            <Menu.Item key="setting:1">
              <Link href="/admin">Admin</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <Menu.Item
          onClick={() => signOut()}
          key="signout"
          icon={<LogoutOutlined />}
        >
          <a>Sign Out</a>
        </Menu.Item>
      </>)}
      <Menu.Item key="toggleTheme">
        <ToggleTheme />
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;
