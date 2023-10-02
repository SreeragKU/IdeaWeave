import { useState } from "react";
import { Menu } from "antd";
import {
  MailOutlined,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ToggleTheme from "./ToggleTheme";
import Link from "next/link";

const { SubMenu } = Menu;

const TopNav = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
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
      <Menu.Item key="signup" icon={<UserAddOutlined />}>
        <Link href="/signup">Sign Up</Link>
      </Menu.Item>
      <Menu.Item key="signin" icon={<UserOutlined />}>
        <Link href="/signin">Sign In</Link>
      </Menu.Item>
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
      <Menu.Item key="toggleTheme">
        <ToggleTheme />
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;
