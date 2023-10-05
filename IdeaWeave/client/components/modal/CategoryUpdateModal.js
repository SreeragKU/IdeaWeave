import { Modal } from "antd";

const CategoryUpdateModal = ({visible, setVisible}) =>{
    return(
    <Modal
          title="Update Category"
          open={visible}
          footer={null}
          onCancel={() => setVisible(false)}
          style={{ backgroundColor: "white", color: "black" }}
        >
          {/* Modal content here */}
        </Modal>
    );
};

export default CategoryUpdateModal;