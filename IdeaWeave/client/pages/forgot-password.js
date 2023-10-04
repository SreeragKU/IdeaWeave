import React, { useContext, useState } from "react";
import { Form, Input, Button, Col, Row } from "antd";
import {
  LockOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { ThemeContext } from "../context/theme";
import axios from "axios";
import { AuthContext } from "../context/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

function ForgotPassword() {
  const [theme] = useContext(ThemeContext);
  const [auth, setAuth] = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [showPassword, setShowPassword] = useState(false);
  const forgotPasswordRequest = async (values) =>{
    try {
        setLoading(true);
        const {data} = await axios.post("/forgot-password", values);
        if(data?.error) {
            toast.error(data.error);
            setLoading(false);
        } else {
            toast.success("Check your email (even spam). Password reset code is sent.");
            setLoading(false);
            setVisible(true);
        }
    } catch (err) {
        console.log(err);
        toast.error("Forgot password failed. Please try again");
        setLoading(false);
    }
  }

  const resetPasswordRequest = async (values) =>{
    try {
        setLoading(true);
        const {data} = await axios.post("/reset-password", values);
        if(data?.error) {
            toast.error(data.error);
            setLoading(false);
        } else {
            toast.success("Password changed successfully. Please login with your new password");
            form.resetFields();
            setLoading(false);
            setVisible(false);
        }
    } catch (err) {
        console.log(err);
        toast.error("Reset password failed. Please try again");
        setLoading(false);
    }
  }


  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: "100px" }}>Forgot Password</h1>
        <Form
          form = {form}
          name="normal_login"
          className="login-form"
          onFinish={visible ? resetPasswordRequest : forgotPasswordRequest}
        >
          {/* email */}
          <Form.Item
            name="email"
            rules={[{ type: "email", message: "Please enter a valid email!" }]}
            style={{ marginBottom: "16px" }} // Added margin to align with other form items
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Email"
            />
          </Form.Item>
          {/* password */}
          {visible && ( <> 
            <Form.Item
            name="resetCode"
            style={{ marginBottom: "16px" }}
          >
            <Input
              prefix={<MailOutlined className="site-form-item-icon" />}
              placeholder="Enter Reset Code"
            />
          </Form.Item>
            <Form.Item
            name="password"
            rules={[{ required: true, message: "Please enter your new password!" }]}
            style={{ marginBottom: "16px" }}
          >
            <Input.Password
              prefix={<LockOutlined className="site-form-item-icon" />}
              type={showPassword ? "text" : "password"} // Toggle password visibility
              placeholder="New Password"
              iconRender={(visible) =>
                visible ? (
                  <EyeOutlined
                    style={{ color: theme === "dark" ? "#fff" : "#333" }}
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  />
                ) : (
                  <EyeInvisibleOutlined
                    style={{ color: theme === "dark" ? "#fff" : "#333" }}
                    onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
                  />
                )
              }
            />
          </Form.Item>
          </>
          )}

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Submit
            </Button>
            <br />
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default ForgotPassword;
