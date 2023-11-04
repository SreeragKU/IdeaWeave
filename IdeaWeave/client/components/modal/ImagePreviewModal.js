import React from "react";
import { Modal } from "antd";

function ImagePreviewModal({ visible, imageUrl, onClose }) {
  return (
    <Modal
      visible={visible}
      title="Image Preview"
      footer={null}
      onCancel={onClose}
      bodyStyle={{ padding: 0 }} 
      width="67%"
      style={{ top: 0, height: "100%" }} 
    >
      <img alt="Image Preview" style={{ width: "100%", height: "100%" }} src={imageUrl} />
    </Modal>
  );
}

export default ImagePreviewModal;
