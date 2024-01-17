import React from "react";
import Link from "next/link";
import { Menu, Typography } from "antd";
import dayjs from "dayjs";

const { Title } = Typography;

const BookFront = ({ post }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div
          style={{
            width: "300px",
            height: "300px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: "50%",
            border: "2px solid #ccc",
          }}
        >
          <img
            src={post?.coverImage?.url || "/images/default.jpeg"}
            alt={post?.title || "No Title"}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Title style={{ fontSize: "2rem", marginBottom: "10px" }}>
            {post?.title || "No Title"}
          </Title>
          <p style={{ fontSize: "0.9rem", color: "#888" }}>
            Author: {post?.postedBy?.name || "Unknown"}{" "}
          </p>
          <p style={{ fontSize: "0.9rem", color: "#888" }}>
            {dayjs(post?.createdAt).format("D MMMM, YYYY h:mm A")} / 0 Comments /
            in{" "}
            {post?.categories?.map((c) => (
              <span key={c?._id} style={{ marginRight: "10px" }}>
                <Link href={`/category/${c?.slug}`}>@{c?.name}</Link>
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BookFront;
