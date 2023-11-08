import React, { useContext, useState, useEffect } from "react";
import { Form, Input, Button, Col, Row } from "antd";
import {
  LockOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { ThemeContext } from "../context/theme";
import axios from "axios";
import { AuthContext } from "../context/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function Signin() {
  const [theme] = useContext(ThemeContext);
  const [auth, setAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  //const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false); 
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    if (auth?.token) {
      router.push("/");
    }
  }, [auth]);

  if (isDisabled) {

    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Your account has been disabled. Please contact support.</h1>
      </div>
    );
  }

  if (loading) {
    return (
      <LoadingOutlined
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "50px",
          color: "red",
        }}
      />
    );
  }

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/signin", values);
      if (data?.error) {
        if (data.error === "User not found") {
          toast.error("User not found");
        } else if (data.error === "Account is disabled") {
          setIsDisabled(true); 
        } else {
          toast.error(data.error);
        }
        setLoading(false);
      } else {
        setAuth(data);
        localStorage.setItem("auth", JSON.stringify(data));
        toast.success("Successfully signed in");
        if (data?.user?.role === "Admin") {
          router.push("/admin");
        } else if (data?.user?.role === "Author") {
          router.push("/author");
        } else {
          router.push("/subscriber");
        }
      }
    } catch (err) {
      console.log("err => ", err);
      setLoading(false);
      toast.error("Signin failed. Try again.");
    }
  }

  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Sign In</h1>
        <Form
          //form = {form}
          name="normal_login"
          className="login-form"
          onFinish={onFinish}Q
        >
          {/* email */}
          <Form.Item
            name="email"
            rules={[{ type: "email", message: "Please enter a valid email!" }]}
            style={{ marginBottom: "16px" }}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          {/* password */}
          <Form.Item
            name="password"
            rules={[
              { required: true, message: "Please input your Password!" },
              {
                pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                message:
                  "Password must be at least 8 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character",
              },
            ]}
            style={{ marginBottom: "16px" }}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              iconRender={(visible) => (
                visible ? (
                  <EyeOutlined
                    style={{ color: theme === "dark" ? "#fff" : "#333" }}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                ) : (
                  <EyeInvisibleOutlined
                    style={{ color: theme === "dark" ? "#fff" : "#333" }}
                    onClick={() => setShowPassword(!showPassword)}
                  />
                )
              )}
            />
          </Form.Item>


          <div>
            <Link href="/forgot-password">Forgot Password</Link>
          </div>
          <br />

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            <br />
            <br />
            Or <Link href="/signup">Register now!</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default Signin;
