import { Row, Col } from "antd";
import AuthorLayout from "../../../components/layout/AuthorLayout";
import UploadFile from "../../../components/media/UploadFile";

function NewMedia() {
  return (
    <AuthorLayout>
      <Row style={{ paddingLeft: "30px", paddingTop: "50px" }}>
        <Col span={24}>
          <div
            style={{
              padding: 100,
              textAlign: "center",
            }}
          >
            <UploadFile redirectToLibrary={true} page="author" />
          </div>
        </Col>
      </Row>
    </AuthorLayout>
  );
}

export default NewMedia;