import { Row, Col } from "antd";
import ReaderLayout from "../../../components/layout/ReaderLayout";
import MediaLibrary from "../../../components/media/MediaLibrary";

function AuthorMediaLibrary() {
  return (
    <ReaderLayout>
      <Row style={{  paddingLeft: 80, marginTop: 40, paddingRight: 50 }}>
        <Col span={24}>
          <MediaLibrary page="reader" />
        </Col>
      </Row>
    </ReaderLayout>
  );
}

export default AuthorMediaLibrary;