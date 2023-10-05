import { Row, Col, Button } from "antd";
import AdminLayout from "../../../components/layout/AdminLayout";
import Link from "next/link";
import { PlusOutlined } from "@ant-design/icons";

function Posts() {
  return (
    <AdminLayout>
      <Row>
        <Col span={24}>
          <Button type="primary">
            <Link href="/admin/posts/new">
              
                <PlusOutlined /> Add New
              
            </Link>
          </Button>
          <h1>Posts</h1>
          <p>...</p>
        </Col>
      </Row>
    </AdminLayout>
  );
}

export default Posts;