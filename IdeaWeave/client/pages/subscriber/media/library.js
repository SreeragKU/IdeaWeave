import { Row, Col } from "antd";
import SubscriberLayout from "../../../components/layout/SubscriberLayout";
import MediaLibrary from "../../../components/media/MediaLibrary";

function AuthorMediaLibrary() {
  return (
    <SubscriberLayout>
      <Row style={{  paddingLeft: 80, marginTop: 40, paddingRight: 50 }}>
        <Col span={24}>
          <MediaLibrary page="subscriber" />
        </Col>
      </Row>
    </SubscriberLayout>
  );
}

export default AuthorMediaLibrary;