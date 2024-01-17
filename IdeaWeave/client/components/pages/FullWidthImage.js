import { Button, Spin } from "antd";
import { SendOutlined } from "@ant-design/icons";
import Link from "next/link";
import { useContext, useState } from "react";
import { ThemeContext } from "../../context/theme";

const FullWidthImage = ({
  auth,
  title = "IdeaWeave",
  subtitle = "Content Management System",
  fullWidthImage = "/images/image3.jpg",
}) => {
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
          height: "auto",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
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
            <Spin size="large" style={{ marginTop: "20%" }} />
          </div>
        )}

        <img
          src={fullWidthImage}
          alt="CMS"
          style={{
            width: "100%",
            height: "auto",
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
            padding: "2rem",
            borderRadius: "2rem",
            display: imageLoading ? "none" : "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h1
            style={{
              WebkitTextStroke: `0.02rem ${textStrokeColor}`, 
              textStroke: `0.02rem ${textStrokeColor}`, 
              fontFamily: "'Just Me Again Down Here', sans-serif",
              margin: 0,
              fontSize: "10vw",
              "@media (min-width: 768px)": {
                fontSize: "6vw",
              },
              "@media (min-width: 480px)": {
                fontSize: "4.5vw",
              },
              fontWeight: "bold",
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            {title}
          </h1>
          <p
            style={{
              WebkitTextStroke: `0.01rem ${textStrokeColor}`, 
              textStroke: `0.01rem ${textStrokeColor}`, 
              fontSize: "3vw",
              "@media (min-width: 768px)": {
                fontSize: "2vw",
              },
              "@media (min-width: 480px)": {
                fontSize: "1.5vw",
              },
              marginTop: "-1rem",
              color: theme === "light" ? "#333" : "#ccc",
            }}
          >
            {subtitle}
          </p>
          <Link href={getRedirectLink()}>
            <Button
              type="primary"
              size="large"
              icon={<SendOutlined />}
              id="explore"
            >
              Explore
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FullWidthImage;
