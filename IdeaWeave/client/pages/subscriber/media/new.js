import { Row, Col } from "antd";
import SubscriberLayout from "../../../components/layout/SubscriberLayout";
import UploadFile from "../../../components/media/UploadFile";

function NewMedia() {
  return (
    <SubscriberLayout>
      <Row style={{  paddingLeft: 80, marginTop: 40, paddingRight: 50 }}>
        <Col span={24}>
          <div
            style={{
              padding: 100,
              textAlign: "center",
            }}
          >
            <UploadFile redirectToLibrary={true} page="Subscriber" />
          </div>
        </Col>
      </Row>
    </SubscriberLayout>
  );
}

export default NewMedia;