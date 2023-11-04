import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { toast } from "react-hot-toast"; 

const CategoryUpdateModal = ({
  visible,
  setVisible,
  handleUpdate,
  updatingCategory,
  setPost, 
}) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    if (!values.name) {
      toast.error("Category name cannot be empty");
      return;
    }

    try {
      await handleUpdate(values);
      setPost((prevPost) => ({
        ...prevPost,
        categories: prevPost.categories.map((cat) =>
          cat._id === updatingCategory._id ? { ...cat, name: values.name } : cat
        ),
      }));
      setVisible(false);
    } catch (error) {
      console.error(error);
      toast.error("Category update failed");
    }
  };

  return (
    <Modal
      title="Update Category"
      visible={visible}
      footer={null}
      onCancel={() => setVisible(false)}
    >
      <Form
        form={form}
        onFinish={onFinish}
        fields={[{ name: ["name"], value: updatingCategory.name }]}
      >
        <Form.Item name="name" style={{ marginBottom: "16px" }}>
          <Input
            prefix={<EditOutlined className="site-form-item-icon" />}
            placeholder="Provide a Category Name"
          />
        </Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form>
    </Modal>
  );
};

export default CategoryUpdateModal;
