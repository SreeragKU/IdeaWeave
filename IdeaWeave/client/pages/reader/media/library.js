import { Row, Col } from "antd";
import ReaderLayout from "../../../components/layout/ReaderLayout";
import MediaLibrary from "../../../components/media/MediaLibrary";

function AuthorMediaLibrary() {
  return (
    <ReaderLayout>
      <Row style={{ paddingLeft: "30px", paddingTop: "50px" }}>
        <Col span={24}>
          <MediaLibrary page="reader" />
        </Col>
      </Row>
    </ReaderLayout>
  );
}

export default AuthorMediaLibrary;