import React, { useState, useContext, useRef } from "react";
import { Layout } from "antd";
import {
  ZoomInOutlined,
  ZoomOutOutlined,
  CommentOutlined,
  ShareAltOutlined,
  FlagOutlined,
  GlobalOutlined,
  SoundOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import Draggable from "react-draggable";
import { ThemeContext } from "../../context/theme";
const htmlToMd = require('html-to-md');


const { Sider } = Layout;

const BubbleNav = ({ onZoomIn, onZoomOut, onThemeChange, postContent, post, currentVolume, currentChapter }) => {
  const [theme] = useContext(ThemeContext);
  const [visible, setVisible] = useState(false);
  const [activeIcon, setActiveIcon] = useState(null);
  const [showThemeBubble, setShowThemeBubble] = useState(false);
  const [t2sActive, setT2SActive] = useState(false);


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
      cursor:"grab",
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
    { label: "Fire", background: "#FF6B6B"},
    { label: "Ocean", background: "#36A2A6" },
    { label: "Forest", background: "#228B22" },
    { label: "Sunset", background: "#FFAC5D" },
    { label: "Midnight", background: "#20232A" },
  ];


  const speakText = (text) => {
    if ("speechSynthesis" in window) {
      const synthesis = window.speechSynthesis;
      const utterance = new SpeechSynthesisUtterance(text);

      // Add an event listener to the utterance object to handle the end of speech
      utterance.addEventListener("end", () => {
        setT2SActive(false); // Update T2S state when speech ends
        setActiveIcon(null); // Remove the active icon styling
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
    if (post && postContent && currentVolume !== undefined && currentChapter !== undefined) {
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
    { icon: <CommentOutlined />, label: "Comment" },
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
      labelElement.style.display = "block";
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
      <Draggable handle=".bubble" defaultPosition={bubblePosition} bounds="body">
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
              const bubblePos = calculateBubblePosition(index, bubbleIcons.length, 70);
              return (
                <div
                  key={label}
                  className="bubbleIcon"
                  style={{
                    ...customStyles.bubbleIcon,
                    transform: `translate(-50%, -50%) translate(${bubblePos.x}px, ${bubblePos.y}px)`,
                    borderColor: activeIcon === label ? "gray" : "silver",
                    border: activeIcon === label ? "4px solid" : "1px solid",
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
                    }
                  }}
                >
                  {icon}
                  <div className="bubbleIconLabel" style={customStyles.bubbleIconLabel} data-label={label}>
                    {label}
                  </div>
                </div>
              );
            })}

          {visible &&
            themeBubbles.map(({ label, background, text }, index) => {
              const bubblePos = calculateBubblePosition(index, themeBubbles.length, 130);
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
                    border: activeIcon === label ? "4px solid gray" : "1px solid silver",
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
                  <div className="bubbleIconLabel" style={themeLabelStyle} data-label={label}>
                    {label}
                  </div>
                </div>
              );
            })}
        </div>
      </Draggable>
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