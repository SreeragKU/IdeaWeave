import {useState} from 'react';
import { Layout } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Form, Input, Row, Col, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";
import axios from "axios";
import {toast} from 'react-hot-toast'

const { Content, Sider } = Layout;

export default function Categories({ children }) {
    const [loading, setLoading] = useState(false);
    const onFinish = async (values) =>{
        //console.log("values =>", values);
        try{
          setLoading(true);
          const {data} = await axios.post('/category', values);
          console.log(data);
          toast.success('Category created successfully');
          setLoading(false);
        } catch(error){
          console.log(error);
          toast.error("Category create failed");
          setLoading(false);
        }
    }
  return (
    <AdminLayout>
      <Row>
        {/* First column */}
        <Col span={12}>
          <Content>
            <h1>Categories</h1>
            <p>Add new category</p>
            <Form onFinish={onFinish}>
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
        <Col>
          <p> Show category list</p>
        </Col>
      </Row>
    </AdminLayout>
  );
}
