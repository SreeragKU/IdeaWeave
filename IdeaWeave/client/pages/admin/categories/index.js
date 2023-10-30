import React, { useState, useEffect, useContext } from "react";
import { Layout } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Form, Input, Row, Col, Button, List } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { ThemeContext } from "../../../context/theme";
import CategoryUpdateModal from "../../../components/modal/CategoryUpdateModal";
import { useSpring, animated, config } from "react-spring";

const { Content } = Layout;

export default function Categories({ children }) {
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useContext(ThemeContext);

  const [updatingCategory, setupdatingCategory] = useState({});
  const [visible, setVisible] = useState(false);
  const [categories, setCategories] = useState([]);
  const [pendingCategories, setPendingCategories] = useState([]);
  const [editedCategory, setEditedCategory] = useState({});
  const [form] = Form.useForm();
  const [pendingUpdates, setPendingUpdates] = useState([]);

  const [reloadAnimation, setReloadAnimation] = useState(false);

  const startReloadAnimation = () => {
    setReloadAnimation(true);
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  const reloadSpring = useSpring({
    from: { opacity: 0, transform: "translateY(-100%)" },
    to: { opacity: reloadAnimation ? 1 : 0, transform: reloadAnimation ? "translateY(0)" : "translateY(-100%)" },
    config: config.slow, // Adjust animation speed
  });

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const { data } = await axios.get("/category");
      setCategories(data);
      setPendingCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  const onFinish = async (values) => {
    if (!values.name) {
      toast.error("Category name cannot be empty");
      return;
    }

    const existingCategory = categories.find((category) => category.name === values.name);

    if (existingCategory) {
      toast.error("Category already exists");
      return;
    }

    try {
      setLoading(true);
      const { data } = await axios.post("/category", values);
      setPendingCategories([data, ...pendingCategories]);
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
      setPendingCategories(pendingCategories.filter((cat) => cat._id !== data._id));
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

  const handleUpdate = async (values) => {
    if (!values.name) {
      toast.error("Category name cannot be empty");
      return;
    }

    const existingCategory = categories.find((category) => category.name === values.name);

    if (existingCategory && existingCategory.slug !== updatingCategory.slug) {
      toast.error("Category already exists");
      setVisible(false);
      setupdatingCategory({});
      return;
    }

    try {
      const { data } = await axios.put(`/category/${updatingCategory.slug}`, values);

      if (data) {
        setPendingUpdates((prevPendingUpdates) => [
          ...prevPendingUpdates,
          { oldCategory: updatingCategory, newCategory: data },
        ]);

        if (editedCategory._id === updatingCategory._id) {
          setEditedCategory(data);
        }

        toast.success("Category update pending");
        setVisible(false);
        setupdatingCategory({});

        startReloadAnimation();
      } else {
        toast.error("Category update failed");

        startReloadAnimation();
      }
    } catch (error) {
      console.error(error);
      toast.error("Category update failed");

      startReloadAnimation();
    }
  };

  const combinedCategories = [editedCategory, ...pendingCategories]
    .filter((item) => item.name !== "")
    .filter((item) => item._id !== updatingCategory._id && item.slug !== editedCategory.slug);

  return (
    <AdminLayout>
      <Row>
        <Col xs={22} sm={22} lg={10} offset={1}>
          <Content>
            <h1>Categories</h1>
            <p>Add a new category</p>
            <Form onFinish={onFinish} form={form}>
              <Form.Item
                name="name"
                style={{ marginBottom: "16px" }}
                rules={[
                  {
                    required: true,
                    message: "Please provide a Category Name",
                  },
                ]}
              >
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
        <Col xs={22} sm={22} lg={10} offset={1}>
          <List
            itemLayout="horizontal"
            dataSource={combinedCategories}
            renderItem={(item) => {
              const updatedCategory = pendingUpdates.find((update) => update.oldCategory._id === item._id);

              if (updatedCategory) {
                return (
                  <List.Item
                    actions={[
                      <a onClick={() => handleEdit(updatedCategory.newCategory)}>Edit</a>,
                      <a onClick={() => handleDelete(item)}>Remove</a>,
                    ]}
                  >
                    <List.Item.Meta
                      title={
                        <span style={{ color: theme === "light" ? "black" : "white" }}>
                          {updatedCategory.newCategory.name}
                        </span>
                      }
                    />
                  </List.Item>
                );
              } else {
                return (
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
                );
              }
            }}
          />
        </Col>
        {updatingCategory._id && (
          <CategoryUpdateModal
            visible={visible}
            setVisible={setVisible}
            handleUpdate={handleUpdate}
            updatingCategory={updatingCategory}
            setCategories={setCategories}
          />
        )}
      </Row>

      <animated.div
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          display: reloadAnimation ? "flex" : "none",
          justifyContent: "center",
          alignItems: "flex-start", 
          background: "rgba(0, 0, 0, 0)",
          ...reloadSpring,
        }}
      >
        <animated.div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0)",
            padding: "16px",
            borderRadius: "8px",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "70%", 
            ...reloadSpring,
          }}
        >
          <div style={{ fontSize: "24px", marginBottom: "8px", color: "red" }}>
            Reloading...
          </div>
          <div style={{ fontSize: "16px", color: "green" }}>
            Your Edit is being processed
          </div>
          <div style={{ fontSize: "16px", color: "green" }}>
            Thank you for your patience!
          </div>
        </animated.div>
      </animated.div>
    </AdminLayout>
  );
}