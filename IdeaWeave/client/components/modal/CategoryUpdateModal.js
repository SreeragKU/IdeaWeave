// CategoryUpdateModal.js

import React from "react";
import { Modal, Form, Input, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

const CategoryUpdateModal = ({
  visible,
  setVisible,
  handleUpdate,
  updatingCategory,
  setCategories, 
}) => {
  const [form] = Form.useForm();

  const onFinish = async (values) => {
    try {
      await handleUpdate(values);
      setCategories((prevCategories) =>
        prevCategories.map((cat) =>
          cat._id === updatingCategory._id ? { ...cat, name: values.name } : cat
        )
      );
      setVisible(false);
    } catch (error) {
      console.error(error);
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
