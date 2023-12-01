import { useState, useEffect, useContext } from "react";
import { Row, Col, Button, Input, Select, Avatar, Tabs } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import { AuthContext } from "../../context/auth";
import { MediaContext } from "../../context/media";
import Media from "../media";

const { TabPane } = Tabs;

const ProfileUpdate = ({ page = "admin" }) => {
  const [auth, setAuth] = useContext(AuthContext);
  const [media, setMedia] = useContext(MediaContext);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState({});
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [websiteError, setWebsiteError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const currentUser = async () => {
      try {
        const { data } = await axios.get(`/user/${router?.query?.id}`);
        setName(data.name);
        setEmail(data.email);
        setWebsite(data.website);
        setRole(data.role);
        setId(data._id);
        setImage(data.image);
      } catch (err) {
        console.log(err);
      }
    };
    if (auth?.token) currentUser();
  }, [auth, router?.query?.id]);

  const validateName = (value) => {
    if (value.trim() === "") {
      setNameError("Name is required");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateWebsite = (value) => {
    if (value && !value.startsWith("http")) {
      setWebsiteError("Website URL should start with 'http'");
      return false;
    } else {
      setWebsiteError("");
      return true;
    }
  };

  const validatePassword = (value) => {
    setIsTyping(true);

    const passwordPattern =
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isPasswordValid = value.match(passwordPattern);
    setIsPasswordValid(isPasswordValid);
    setPasswordError("");
    return isPasswordValid;
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const { data } = await axios.put(`/update-user-by-${page}`, {
        id,
        name,
        email,
        website,
        password,
        role,
        image: media?.selected?._id
          ? media.selected._id
          : image?._id
          ? image._id
          : undefined,
      });
  
      if (data?.error) {
        if (data.error.includes("E11000 duplicate key error") && data.error.includes("name")) {
          toast.error("User name already taken. Please choose a different name.");
        } else {
          toast.error(data.error);
        }
        setLoading(false);
      } else {
        if (auth?.user?._id === data._id) {
          setAuth({ ...auth, user: data });
          let fromLocalStorage = JSON.parse(localStorage.getItem("auth"));
          fromLocalStorage.user = data;
          localStorage.setItem("auth", JSON.stringify(fromLocalStorage));
        }
  
        toast.success("Profile updated successfully");
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
      toast.error("Profile update failed. Try again.");
      setLoading(false);
    }
  };
  
  

  return (
    <Row style={{ paddingLeft: "30px", paddingTop: "50px" }}>
      <Col span={12} offset={6}>
        <Tabs tabBarStyle={{ marginBottom: 0 }}>
          <TabPane tab="User Info" key="1">
            <div style={{ marginBottom: 20 }}></div>
            <h4 style={{ marginBottom: "-10px" }}>Update User Profile</h4>
            <div style={{ marginBottom: 30 }}></div>
            <div style={{ marginBottom: 20, textAlign: "center" }}>
              {media.selected ? (
                <>
                  <div style={{ marginBottom: 15 }}></div>
                  <Avatar src={media.selected.url} size={100} />
                </>
              ) : image ? (
                <>
                  <div style={{ marginBottom: 15 }}></div>
                  <Avatar src={image.url} size={100} />
                </>
              ) : (
                ""
              )}
            </div>
            <Input
              style={{ margin: "20px 0px 10px 0px" }}
              size="large"
              placeholder="Full name"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                validateName(e.target.value);
              }}
            />
            {nameError && <div style={{ color: "red" }}>{nameError}</div>}
            <Input
              style={{ margin: "10px 0px 10px 0px" }}
              size="large"
              value={email}
              readOnly
              disabled
            />

            {emailError && <div style={{ color: "red" }}>{emailError}</div>}
            <Input
              style={{ margin: "10px 0px 10px 0px" }}
              size="large"
              placeholder="Website (optional)"
              value={website}
              onChange={(e) => {
                setWebsite(e.target.value);
                validateWebsite(e.target.value);
              }}
            />
            {websiteError && <div style={{ color: "red" }}>{websiteError}</div>}

            <Input.Password
              style={{ margin: "10px 0px 10px 0px" }}
              size="large"
              placeholder="Password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validatePassword(e.target.value);
              }}
            />
            {passwordError && (
              <div style={{ color: "red" }}>{passwordError}</div>
            )}

            {isTyping && (
              <div className="password-strength">
                <p>{password.length >= 8 ? "✔" : "✘"} At least 8 characters</p>
                <p>
                  {/[A-Z]/.test(password) ? "✔" : "✘"} At least one uppercase
                  character
                </p>
                <p>
                  {/[a-z]/.test(password) ? "✔" : "✘"} At least one lowercase
                  character
                </p>
                <p>{/[0-9]/.test(password) ? "✔" : "✘"} At least one number</p>
                <p>
                  {/[!@#$%^&*]/.test(password) ? "✔" : "✘"} At least one special
                  character
                </p>
              </div>
            )}

            {page === "admin" && (
              <Select
                value={role}
                style={{ margin: "10px 0px 10px 0px", width: "100%" }}
                onChange={(e) => setRole(e)}
              >
                <>
                  <Select.Option value="Subscriber" disabled={role === "Admin"}>
                    Subscriber
                  </Select.Option>
                  <Select.Option value="Author" disabled={role === "Admin"}>
                    Author
                  </Select.Option>
                  <Select.Option value="Admin">Admin</Select.Option>
                  <Select.Option value="Reviewer" disabled={role === "Admin"}>
                    Reviewer
                  </Select.Option>
                </>
              </Select>
            )}

            <Button
              onClick={handleSubmit}
              type="default"
              style={{ margin: "10px 0px 10px 0px" }}
              loading={loading}
              block
            >
              Submit
            </Button>
          </TabPane>
          <TabPane tab="Profile Image" key="2">
            <div style={{ marginBottom: 20 }}></div>
            <h4 style={{ marginBottom: "-10px" }}>
              Your Current Profile Image:
            </h4>
            <div style={{ marginBottom: 30 }}></div>
            <div style={{ marginBottom: 20, textAlign: "center" }}>
              {media.selected ? (
                <>
                  <div style={{ marginBottom: 15 }}></div>
                  <Avatar src={media.selected.url} size={100} />
                </>
              ) : image ? (
                <>
                  <div style={{ marginBottom: 15 }}></div>
                  <Avatar src={image.url} size={100} />
                </>
              ) : (
                ""
              )}
            </div>
            <Media />
          </TabPane>
        </Tabs>
      </Col>
    </Row>
  );
};

export default ProfileUpdate;
