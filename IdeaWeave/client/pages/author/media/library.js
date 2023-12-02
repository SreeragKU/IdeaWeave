import { Row, Col } from "antd";
import AuthorLayout from "../../../components/layout/AuthorLayout";
import MediaLibrary from "../../../components/media/MediaLibrary";

function AuthorMediaLibrary() {
  return (
    <AuthorLayout>
      <Row style={{  paddingLeft: 80, marginTop: 40, paddingRight: 50 }}>
        <Col span={24}>
          <MediaLibrary page="author" />
        </Col>
      </Row>
    </AuthorLayout>
  );
}

export default AuthorMediaLibrary;