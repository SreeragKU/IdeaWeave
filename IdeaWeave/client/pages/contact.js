import { useState } from "react";
import { Form, Input, Button, Col, Row } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    setLoading(true);
    try {
      const { data } = await axios.post("/contact", values);
      if (data?.error) {
        toast.error(data?.error);
      } else {
        toast.success("Your message has been sent");
        form.resetFields();
      }
    } catch (err) {
      console.error("Error:", err);
      toast.error("Email failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span: 16 },
    },
  };

  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col span={12}>
        <h1>Contact</h1>
        <Form
          {...formItemLayout}
          name="contact_form"
          form={form}
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
        >
          <Form.Item
            label="Your Name"
            name="name"
            rules={[
              {
                required: true,
                message: "Please enter your name",
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Your Name" id="name" />
          </Form.Item>

          <Form.Item
            label="Your Email"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input prefix={<MailOutlined />} placeholder="Your Email" id="email" />
          </Form.Item>

          <Form.Item
            label="Your Message"
            name="message"
            rules={[
              {
                required: true,
                message: "Please enter your message",
              },
            ]}
          >
            <Input.TextArea placeholder="Write your message here..." id="message" />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" loading={loading} id="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactForm;
