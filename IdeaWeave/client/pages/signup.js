import React, { useContext } from "react";
import { Form, Input, Button, Col, Row } from "antd";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { ThemeContext } from "../context/theme";

function Signup() {
  const [theme] = useContext(ThemeContext);

  const onFinish = (values) => {
    console.log("values => ", values);
  };

  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Sign Up</h1>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          {/* name */}
          <Form.Item
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
            style={{ marginBottom: "20px" }}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Name"
            />
          </Form.Item>
          {/* email */}
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please input a valid email!",
              },
            ]}
            style={{ marginBottom: "20px" }}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          {/* password */}
          <Form.Item
            name="password"
            rules={[{ required: true, message: "Please input your Password!" }]}
            style={{ marginBottom: "20px" }}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
              iconRender={(visible) =>
                visible ? (
                  <EyeOutlined
                    style={{ color: theme === "dark" ? "#fff" : "#333" }}
                  />
                ) : (
                  <EyeInvisibleOutlined
                    style={{ color: theme === "dark" ? "#fff" : "#333" }}
                  />
                )
              }
            />
          </Form.Item>

          <Form.Item style={{ marginBottom: "0" }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>

          <div style={{ paddingTop: "16px" }}>
            Or <Link href="/signin">Login now!</Link>
          </div>
        </Form>
      </Col>
    </Row>
  );
}

export default Signup;
