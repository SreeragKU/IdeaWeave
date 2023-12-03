import React, { useState, useContext, useRef } from "react";
import { Layout, Modal, Button } from "antd";
import {
  ZoomInOutlined,
  ZoomOutOutlined,
  ShareAltOutlined,
  FlagOutlined,
  GlobalOutlined,
  SoundOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { useSpring, animated } from "react-spring";
import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  XIcon,
  WhatsappIcon,
  RedditIcon,
  TelegramIcon,
  } from "react-share";
import Draggable from "react-draggable";
import { ThemeContext } from "../../context/theme";
const htmlToMd = require("html-to-md");

const { Sider } = Layout;

const ShareModal = ({ visible, onCancel }) => {
  const socialMediaOptions = [
    { label: "Email", value: "email", component: EmailShareButton, icon: EmailIcon },
    { label: "Facebook", value: "facebook", component: FacebookShareButton, icon: FacebookIcon },
    { label: "Twitter", value: "twitter", component: TwitterShareButton, icon: XIcon },
    { label: "WhatsApp", value: "whatsapp", component: WhatsappShareButton, icon: WhatsappIcon },
    { label: "Reddit", value: "reddit", component: RedditShareButton, icon: RedditIcon },
    { label: "Telegram", value: "telegram", component: TelegramShareButton, icon: TelegramIcon },
  ];

  const [theme] = useContext(ThemeContext);

  const gradientAnimation = useSpring({
    background: visible
      ? theme === 'dark'
        ? "linear-gradient(135deg, #1a0d5a 0%, #004080 100%)"
        : "linear-gradient(135deg, #a6c0fe 0%, #f0f2f5 100%)"
      : theme === 'dark'
        ? "linear-gradient(135deg, #f0f2f5 0%, #f0f2f5 100%)"
        : "linear-gradient(135deg, #a6c0fe 0%, #f0f2f5 100%)",
  });
  
  const animatedProps = useSpring({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0%)" : "translateY(-100%)",
  });

  const handleShareClick = (socialMedia) => {
    console.log(`Sharing on ${socialMedia}`);
    onCancel();
  };

  return (
    <Modal
      title="Share on Social Media"
      visible={visible}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
      ]}
      bodyStyle={{
        background: gradientAnimation.background,
        transition: "background 0.5s",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      maskStyle={{ background: "rgba(0, 0, 0, 0.7)" }}
    >
      <animated.div style={animatedProps}>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {socialMediaOptions.map(({ label, value, component: ShareButton, icon: ShareIcon }) => (
            <animated.div
              key={value}
              style={{
                width: "100px",
                height: "100px",
                transform: visible ? "scale(1)" : "scale(0.5)",
                margin: "10px",
                transition: "transform 0.5s",
                cursor: "pointer",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                borderRadius: "50%",
                padding: "15px",
                background: gradientAnimation.background,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              onClick={() => handleShareClick(value)}
            >
              <ShareButton url={process.browser && window.location.href}>
                <ShareIcon size={45} round />
              </ShareButton>
              <div style={{ marginTop: "5px" }}>{label}</div>
            </animated.div>
          ))}
        </div>
      </animated.div>
    </Modal>
  );
};

const BubbleNav = ({
  onZoomIn,
  onZoomOut,
  onThemeChange,
  postContent,
  post,
  currentVolume,
  currentChapter,
}) => {
  const [theme] = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [showThemeBubble, setShowThemeBubble] = useState(false);
  const [t2sActive, setT2SActive] = useState(false);
  const [shareModalVisible, setShareModalVisible] = useState(false);

  const customStyles = {
    bubbleContainer: {
      position: "fixed",
      top: "50px",
      left: "0",
      zIndex: "1000",
    },
    bubble: {
      color: "silver",
      padding: "10px",
      borderRadius: "50%",
      cursor: "grab",
      border: activeIcon ? "3px solid silver" : "1px solid silver",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      width: "60px",
      height: "60px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "relative",
      transition: "border-color 0.3s ease-in-out",
      borderColor: activeIcon ? "gold" : "silver",
      animation: activeIcon ? "pulse 1.5s infinite" : "none",
    },
    bubbleIcon: {
      color: !activeIcon
        ? theme === "dark"
          ? "white"
          : "black"
        : theme === "dark"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.2",
      padding: "10px",
      borderRadius: "50%",
      cursor: "pointer",
      border: "1px solid silver",
      boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
      width: "50px",
      height: "50px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      transition: "border-color 0.3s ease-in-out",
      transform: "translate(-50%, -50%)",
    },
    bubbleIconLabel: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      fontSize: "14px",
      textAlign: "center",
      display: "none",
      padding: "5px",
      color: theme === "dark" ? "#fff" : "#333",
      borderRadius: "50%",
      zIndex: 1001,
    },
  };

  const [bubblePosition, setBubblePosition] = useState({ x: 0, y: 0 });

  const handleShareIconClick = () => {
    setShareModalVisible(true);
  };

  const handleShareModalCancel = () => {
    setShareModalVisible(false);
  }
  

  const handleShareModalShare = (socialMedia) => {
    // Implement the share functionality based on the selected social media
    console.log(`Sharing on ${socialMedia}`);
    setShareModalVisible(false);
  };

  const handleBubbleClick = () => {
    if (visible) {
      setVisible(false);
      setActiveIcon(null);
      setShowThemeBubble(false);
    } else {
      setVisible(true);
      setShowThemeBubble(false);
    }
  };
  const themeBubbles = [
    { label: "Default", background: "#F0F2F5" },
    { label: "Fire", background: "#FF6B6B" },
    { label: "Ocean", background: "#36A2A6" },
    { label: "Forest", background: "#228B22" },
    { label: "Sunset", background: "#FFAC5D" },
    { label: "Midnight", background: "#20232A" },
  ];

  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.addEventListener("end", () => {
        setT2SActive(false);
        setActiveIcon(null);
      });

      synthesis.speak(utterance);
    } else {
      alert("Text-to-Speech is not supported in your browser.");
    }
  };

  const handleTextToSpeech = () => {
    if (t2sActive) {
      stopTextToSpeech();
      setT2SActive(false);
    } else {
      startTextToSpeech();
      setT2SActive(true);
    }
  };

  const startTextToSpeech = () => {
    if (
      post &&
      postContent &&
      currentVolume !== undefined &&
      currentChapter !== undefined
    ) {
      const currentChapterContent =
        post.volumes[currentVolume].chapters[currentChapter].content;

      const markdownContent = htmlToMd(currentChapterContent);
      const cleanedMarkdownContent = markdownContent
        .replace(/<u>/g, "")
        .replace(/<\/u>/g, "");

      speakText(cleanedMarkdownContent);
    }
  };

  const stopTextToSpeech = () => {
    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis;
      synthesis.cancel();
    }
  };

  const bubbleIcons = [
    { icon: <ZoomInOutlined />, label: "ZoomIn" },
    { icon: <ZoomOutOutlined />, label: "ZoomOut" },
    { icon: <ShareAltOutlined />, label: "Share" },
    { icon: t2sActive ? <LoadingOutlined /> : <SoundOutlined />, label: "T2S" },
    { icon: <FlagOutlined />, label: "Bookmark" },
    { icon: <GlobalOutlined />, label: "Translate" },
  ];

  const calculateBubblePosition = (index, total, radius) => {
    const angle = (360 / total) * index;
    const xOffset = 24;
    const yOffset = 25;
    const x = radius * Math.cos((angle * Math.PI) / 180) + xOffset;
    const y = radius * Math.sin((angle * Math.PI) / 180) + yOffset;
    return { x, y };
  };

  const handleBubbleIconMouseEnter = (label) => {
    const labelElement = document.querySelector(
      `.bubbleIconLabel[data-label="${label}"]`
    );
    if (labelElement) {
      labelElement.style.display = 'block';
      setActiveIcon(label);
    }
  };
  const handleBubbleIconMouseLeave = (label) => {
    const labelElement = document.querySelector(
      `.bubbleIconLabel[data-label="${label}"]`
    );
    if (labelElement) {
      labelElement.style.display = "none";
    }
  };

  return (
    <div className="bubble-container" style={customStyles.bubbleContainer}>
      <Draggable
        handle=".bubble"
        defaultPosition={bubblePosition}
        bounds="body"
      >
        <div
          className="bubble"
          style={{
            ...customStyles.bubble,
            animation: !activeIcon ? "pulse 1.5s infinite" : "none",
          }}
          onClick={handleBubbleClick}
        >
          {visible &&
            bubbleIcons.map(({ icon, label }, index) => {
              const bubblePos = calculateBubblePosition(
                index,
                bubbleIcons.length,
                70
              );
              return (
                <div
                  key={label}
                  className="bubbleIcon"
                  style={{
                    ...customStyles.bubbleIcon,
                    transform: `translate(-50%, -50%) translate(${bubblePos.x}px, ${bubblePos.y}px)`,
                    borderColor: activeIcon === label ? "gray" : "silver",
                    border:
                      activeIcon === label ? "4px solid" : "1px solid silver",
                  }}
                  onMouseEnter={() => {
                    handleBubbleIconMouseEnter(label);
                    setActiveIcon(label);
                  }}
                  onMouseLeave={() => {
                    handleBubbleIconMouseLeave(label);
                    setActiveIcon(null);
                  }}
                  onClick={() => {
                    if (label === "ZoomIn") {
                      onZoomIn();
                    } else if (label === "ZoomOut") {
                      onZoomOut();
                    } else if (label === "T2S") {
                      handleTextToSpeech();
                    } else if (label === "Share") {
                      handleShareIconClick();
                    }
                  }}
                >
                  {icon}
                  <div
                    className="bubbleIconLabel"
                    style={customStyles.bubbleIconLabel}
                    data-label={label}
                  >
                    {label}
                  </div>
                </div>
              );
            })}

          {visible &&
            themeBubbles.map(({ label, background, text }, index) => {
              const bubblePos = calculateBubblePosition(
                index,
                themeBubbles.length,
                130
              );
              const themeLabelStyle = {
                ...customStyles.bubbleIconLabel,
                color: "#20232A",
              };
              return (
                <div
                  key={label}
                  className="bubbleIcon"
                  style={{
                    ...customStyles.bubbleIcon,
                    transform: `translate(-50%, -50%) translate(${bubblePos.x}px, ${bubblePos.y}px)`,
                    backgroundColor: background,
                    color: text,
                    border:
                      activeIcon === label
                        ? "4px solid gray"
                        : "1px solid silver",
                  }}
                  onMouseEnter={() => {
                    handleBubbleIconMouseEnter(label);
                    setActiveIcon(label);
                  }}
                  onMouseLeave={() => {
                    handleBubbleIconMouseLeave(label);
                    setActiveIcon(null);
                  }}
                  onClick={() => {
                    if (label === "ZoomIn") {
                      onZoomIn();
                    } else if (label === "ZoomOut") {
                      onZoomOut();
                    } else {
                      onThemeChange(label);
                    }
                  }}
                >
                  <div className="bubbleIconCircle" style={{ color: text }}>
                    {label}
                  </div>
                  <div
                    className="bubbleIconLabel"
                    style={themeLabelStyle}
                    data-label={label}
                  >
                    {label}
                  </div>
                </div>
              );
            })}
        </div>
      </Draggable>
      <ShareModal
        visible={shareModalVisible}
        onCancel={handleShareModalCancel}
        onShare={handleShareModalShare}
      />
      <style>
        {`
          @keyframes pulse {
            0%, 100% {
              border-width: 2px;
            }
            50% {
              border-width: 6px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default BubbleNav;
