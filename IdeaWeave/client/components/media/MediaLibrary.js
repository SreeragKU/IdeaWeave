import React, { useContext, useEffect, useState } from "react";
import { Upload, message, Image, Badge, Popconfirm } from "antd";
import { AuthContext } from "../../context/auth";
import { CloseCircleOutlined, InboxOutlined } from "@ant-design/icons";
import { MediaContext } from "../../context/media";
import axios from "axios";
import { toast } from "react-hot-toast";

const { Dragger } = Upload;

const MediaLibrary = ({ page = "admin" }) => {
  // context
  const [auth, setAuth] = useContext(AuthContext);
  const [media, setMedia] = useContext(MediaContext);
  const [showPreview, setShowMedia] = useState(false);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const { data } = await axios.get("/media");
        setMedia((prev) => ({ ...prev, images: data }));
      } catch (err) {
        console.log(err);
      }
    };
    fetchMedia();
  }, []);

  const props = {
    name: "file",
    multiple: true,
    action: `${process.env.NEXT_PUBLIC_API}/upload-image-file`,
    headers: {
      Authorization: `Bearer ${auth.token}`,
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
        setMedia({
          images: [...media.images, info.file.response],
          selected: info.file.response,
          showMediaModal: false,
        });
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  const handleImageDelete = async (imageId) => {
    try {
      const { data } = await axios.delete(`/media/${imageId}`);
      if (data.ok) {
        setMedia({
          ...media,
          images: media.images.filter((image) => image._id !== imageId),
          selected: null,
        });
        toast.success("Image deleted successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={{ width: "75%", margin: "0 auto", marginTop: 40 }}>
      <Dragger {...props} accept="image/*">
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">
          Click or drag file to this area to upload
        </p>
      </Dragger>

      
      <div
        style={{
          textAlign: "center",
          marginTop: 20,
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {media?.images
          ?.filter((image) => {
            if (page === "admin") {
              return true;
            } else {
              return image?.postedBy?._id === auth?.user?._id;
            }
          })
          .map((image) => (
            <Badge key={image._id}>
            <div
              style={{
                margin: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                position: "relative",
              }}
            >
              <Image
                onClick={() => setMedia({ ...media, selected: image })}
                preview={showPreview}
                src={image.url}
                style={{
                  height: "100px",
                  width: "100px",
                  objectFit: "cover",
                  cursor: "pointer",
                  borderRadius: "8px",
                }}
              />
              <br />
              {page === "author" && image?.postedBy?._id == auth?.user?._id ? (
                <Popconfirm
                  title="Are you sure to delete this image?"
                  onConfirm={() => handleImageDelete(image._id)}
                  okText="Yes"
                  cancelText="No"
                  placement="bottomRight"
                >
                  <CloseCircleOutlined
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      right: "5px",
                      color: "#f5222d",
                      cursor: "pointer",
                    }}
                  />
                </Popconfirm>
              ) : page === "admin" ? (
                <Popconfirm
                  title="Are you sure to delete this image?"
                  onConfirm={() => handleImageDelete(image._id)}
                  okText="Yes"
                  cancelText="No"
                  placement="bottomRight"
                >
                  <CloseCircleOutlined
                    style={{
                      position: "absolute",
                      bottom: "5px",
                      right: "5px",
                      color: "#f5222d",
                      cursor: "pointer",
                    }}
                  />
                </Popconfirm>
              ) : (
                ""
              )}
            </div>
          </Badge>
        ))}
      </div>
    </div>
  );
};

export default MediaLibrary;
