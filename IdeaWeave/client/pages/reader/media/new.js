import { Row, Col } from "antd";
import ReaderLayout from "../../../components/layout/ReaderLayout";
import UploadFile from "../../../components/media/UploadFile";

function NewMedia() {
  return (
    <ReaderLayout>
      <Row style={{  paddingLeft: 80, marginTop: 40, paddingRight: 50 }}>
        <Col span={24}>
          <div
            style={{
              padding: 100,
              textAlign: "center",
            }}
          >
            <UploadFile redirectToLibrary={true} page="reader" />
          </div>
        </Col>
      </Row>
    </ReaderLayout>
  );
}

export default NewMedia;