import React, { useState, useEffect, useContext } from "react";
import { Layout } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Form, Input, Row, Col, Button, List } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ThemeContext } from "../../../context/theme";
import CategoryUpdateModal from "../../../components/modal/CategoryUpdateModal";

const { Content } = Layout;

export default function Categories({ children }) {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  const [updatingCategory, setupdatingCategory] = useState({});
  const [visible, setVisible] = useState(false);

  const [categories, setCategories] = useState([]);
  const [form] = Form.useForm();

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const { data } = await axios.get("/category");
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinish = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/category", values);
      setCategories([data, ...categories]);
      toast.success("Category created successfully");
      setLoading(false);
      form.resetFields(["name"]);
    } catch (error) {
      console.log(error);
      toast.error("Category create failed");
      setLoading(false);
    }
  };

  const handleDelete = async (item) => {
    try {
      const { data } = await axios.delete(`/category/${item.slug}`);
      setCategories(categories.filter((cat) => cat._id !== data._id));
      toast.success("Category deleted successfully");
    } catch (error) {
      console.log(error);
      toast.error("Category delete failed");
    }
  };

  const handleEdit = async (item) => {
    setupdatingCategory(item);
    setVisible(true);
  };

  return (
    <AdminLayout>
      <Row>
        {/* First column */}
        <Col xs={22} sm={22} lg={10} offset={1}>
          <Content>
            <h1>Categories</h1>
            <p>Add a new category</p>
            <Form onFinish={onFinish} form={form}>
              <Form.Item name="name" style={{ marginBottom: "16px" }}>
                <Input
                  prefix={<EditOutlined className="site-form-item-icon" />}
                  placeholder="Provide a Category Name"
                />
              </Form.Item>
              <Button loading={loading} type="primary" htmlType="submit">
                Submit
              </Button>
            </Form>
          </Content>
        </Col>

        {/* Second column */}
        <Col xs={22} sm={22} lg={10} offset={1}>
          <List
            itemLayout="horizontal"
            dataSource={categories}
            renderItem={(item) => (
              <List.Item
                actions={[
                  <a onClick={() => handleEdit(item)}>Edit</a>,
                  <a onClick={() => handleDelete(item)}>Remove</a>,
                ]}
              >
                <List.Item.Meta
                  title={
                    <span style={{ color: theme === "light" ? "black" : "white" }}>
                      {item.name}
                    </span>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
        <CategoryUpdateModal visible={visible} setVisible={setVisible} />
      </Row>
    </AdminLayout>
  );
}
