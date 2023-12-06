import { Button, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme";

const FullWidthImage = ({ auth, title = "IdeaWeave", subtitle = "Content Management System", fullWidthImage = "/images/image3.jpg" }) => {
  const [theme] = useContext(ThemeContext);
  const [imageLoading, setImageLoading] = useState(true);

  const textStrokeColor = theme === "light" ? "#ffffff" : "#000";

  const getRedirectLink = () => {
    if (auth?.role === "Admin") {
      return "/admin";
    } else if (auth?.role === "Author") {
      return "/author";
    } else if (auth?.role === "Reader") {
      return "/reader";
    } else {
      return "/signin";
    }
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Just+Me+Again+Down+Here&family=Poppins:wght@100;300;400;800&display=swap"
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "500px",
          overflow: "hidden",
        }}
      >
        {imageLoading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <Spin size="large" style={{marginTop: 80, marginLeft: 70}}/>
          </div>
        )}

        <img
          src={fullWidthImage}
          alt="CMS"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: imageLoading ? "none" : "block",
          }}
          onLoad={handleImageLoad}
        />

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            fontSize: "85px",
            textShadow: "2px 2px 4px #000000",
            padding: "50px",
            borderRadius: "500px",
            display: imageLoading ? "none" : "block",
          }}
        >
          <h1
            style={{
              WebkitTextStroke: `3px ${textStrokeColor}`,
              textStroke: `3px ${textStrokeColor}`,
              fontFamily: "'Just Me Again Down Here', sans-serif",
              margin: 0,
            }}
          >
            {title}
          </h1>
          <p
            style={{
              WebkitTextStroke: `0.5px ${textStrokeColor}`,
              textStroke: `0.5px ${textStrokeColor}`,
              fontSize: "25px",
              marginTop: "-60px",
            }}
          >
            {subtitle}
          </p>
          <Link href={getRedirectLink()}>
            <Button type="primary" size="large" icon={<SendOutlined />} id="explore">
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FullWidthImage;
