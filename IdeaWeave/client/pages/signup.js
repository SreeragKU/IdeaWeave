import React, { useState, useContext, useEffect } from "react";
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
import axios from "axios";
import toast from "react-hot-toast";
import { AuthContext } from "../context/auth";
import {useRouter} from "next/router";

function Signup() {
  const [auth, setAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const [theme] = useContext(ThemeContext);

  useEffect(() =>{
    if(auth?.token){
      router.push("/");
    }
  }, [auth]);


  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post(`/signup`, values);
      if(data?.error) {
        toast.error(data.error);
        setLoading(false);
      }
      else{
        //save in context
        setAuth(data);
        
        //save in local storage
        localStorage.setItem("auth", JSON.stringify(data));
        
        toast.success('Successfully signed up');
        setLoading(false);
        router.push("/admin");
      }
    } catch (err) {
      toast.error("Signup failed. Try again");
      console.log(err);
      setLoading(false);
    }
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
              loading={loading}
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
