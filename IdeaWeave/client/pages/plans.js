import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Card, Col, Row, Button, Typography } from "antd";
import { ThemeContext } from "../context/theme";
import { AuthContext } from "../context/auth";

const { Title } = Typography;

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const { theme } = useContext(ThemeContext);
  const [auth, setAuth] = useContext(AuthContext);
  const [userSubscription, setUserSubscription] = useState(null);
  const [buttonLoading, setButtonLoading] = useState(false);

  useEffect(() => {
    checkUserSubscription();
    fetchPlans();
  }, [auth]);

  const checkUserSubscription = async () => {
    try {
      if (auth.user) {
        const response = await axios.get(`/subscription/${auth.user._id}`);
        setUserSubscription(response.data);
      }
    } catch (error) {
      console.error("Error checking user subscription:", error);
    }
  };

  const fetchPlans = async () => {
    try {
      const { data } = await axios.get("/prices");
      setPlans(data.data || []);
    } catch (error) {
      console.error("Error fetching plans:", error);
    }
  };

  const handleBuyNow = async (priceId) => {
    try {
      if (!auth.user) {
        console.error("User not authenticated");
        return;
      }

      const { _id } = auth.user;
      setButtonLoading(true);

      const response = await axios.post("/session", {
        priceId,
        userId: _id,
        email: auth.user.email,
      });

      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error initiating checkout:", error);
    } finally {
      setButtonLoading(false);
    }
  };

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const lightness =
      theme === "dark"
        ? Math.floor(Math.random() * 20) + 20
        : Math.floor(Math.random() * 30) + 70;
    const saturation =
      theme === "dark"
        ? Math.floor(Math.random() * 30) + 50
        : Math.floor(Math.random() * 30) + 50;

    return {
      backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`,
      color: "#000",
    };
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <Title
        level={2}
        style={{
          color: theme === "dark" ? "#fff" : "D3D3D3",
          marginTop: "50px",
        }}
      >
        Subscription
      </Title>
      {userSubscription ? (
        <div
          style={{
            backgroundColor: "#f5f5f5",
            padding: "30px",
            borderRadius: "20px",
            boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
            margin: "20px 0",
          }}
        >
          <Title
            level={2}
            style={{
              color: "#4caf50",
              marginBottom: "25px",
              borderBottom: "3px solid #4caf50",
              paddingBottom: "15px",
            }}
          >
            Your Subscription Status
          </Title>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <p
              style={{
                fontSize: "28px",
                color: "#333",
                fontWeight: "bold",
                marginBottom: "25px",
              }}
            >
              Great News!
            </p>
            <p style={{ fontSize: "20px", color: "#555" }}>
              You are subscribed to a plan.
            </p>
            <p
              style={{
                fontSize: "24px",
                color: "#4caf50",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Remaining days: {userSubscription.remainingTimeInDays}
            </p>
          </div>
        </div>
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {Array.isArray(plans) && plans.length > 0 ? (
            plans.map((plan) => (
              <Col key={plan.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  title={
                    <span style={{ color: "#000" }}>
                      {plan.nickname || "Untitled Plan"}
                    </span>
                  }
                  style={{
                    ...getRandomColor(),
                    minHeight: 300,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    borderRadius: "15px",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease-in-out",
                    cursor: "pointer",
                    position: "relative",
                    overflow: "hidden",
                  }}
                  hoverable
                >
                  <div style={{ textAlign: "center", padding: "20px" }}>
                    <div
                      style={{
                        width: "180px",
                        height: "180px",
                        borderRadius: "50%",
                        background: "#fff",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0 auto",
                        marginBottom: "20px",
                        boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.2)",
                        position: "relative",
                        zIndex: 1,
                      }}
                    >
                      <span
                        style={{
                          fontSize: "28px",
                          fontWeight: "bold",
                          color: "#000",
                        }}
                      >
                        &#8377;{Number(plan.unit_amount / 100).toFixed(2)}
                      </span>
                      <div
                        style={{
                          position: "absolute",
                          width: "100%",
                          height: "100%",
                          borderRadius: "50%",
                          border: `8px solid #fff`,
                          boxSizing: "border-box",
                          position: "absolute",
                          top: 0,
                          left: 0,
                        }}
                      />
                    </div>
                  </div>
                  <Button
                    type="primary"
                    block
                    style={{
                      borderRadius: "0 0 15px 15px",
                      background: theme === "dark" ? "#333" : "#1890ff",
                      borderColor: theme === "dark" ? "#333" : "#1890ff",
                      color: "#fff",
                    }}
                    onClick={() => handleBuyNow(plan.id)}
                    loading={buttonLoading} 
                  >
                    Subscribe
                  </Button>
                </Card>
              </Col>
            ))
          ) : (
            <p>No plans available</p>
          )}
        </Row>
      )}
    </div>
  );
};

export default Plans;
