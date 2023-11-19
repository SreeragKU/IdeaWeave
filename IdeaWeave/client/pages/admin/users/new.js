import { useState } from "react";
import AdminLayout from "../../../components/layout/AdminLayout";
import { Row, Col, Button, Input, Checkbox, Select } from "antd";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/router";
import generator from "generate-password";

const generatePassword = () => {
  const length = 8;
  const numbers = '0123456789';
  const symbols = '!@#$%^&*';
  const lowercase = 'abcdefghijklmnopqrstuvwxyz';
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const allCharacters = numbers + symbols + lowercase + uppercase;

  let password = '';
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  password += lowercase[Math.floor(Math.random() * lowercase.length)];
  password += uppercase[Math.floor(Math.random() * uppercase.length)];

  for (let i = 4; i < length; i++) {
    password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
  }

  return password
    .split('')
    .sort(() => Math.random() - 0.5)
    .join(''); 
};



const NewUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [password, setPassword] = useState(generatePassword());
  const [role, setRole] = useState("");
  const [checked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [websiteError, setWebsiteError] = useState("");

  const validateName = (value) => {
    if (value.trim() === "") {
      setNameError("Name is required");
      return false;
    } else {
      setNameError("");
      return true;
    }
  };

  const validateEmail = (value) => {
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!value.match(emailPattern)) {
      setEmailError("Invalid email address");
      return false;
    } else {
      setEmailError("");
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
  const passwordPattern = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  const isPasswordValid = value.match(passwordPattern);
  setIsPasswordValid(isPasswordValid);
  setPasswordError("");
  return isPasswordValid;
};


const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    setLoading(true);
    // console.table({ name, email, website, password, role, checked });
    const { data } = await axios.post("/create-user", {
      email,
      name,
      website,
      password,
      role,
      checked,
    });
    if (data.error) {
      toast.error(data.error);
      setLoading(false);
    } else {
      toast.success("User created successfully");
      setLoading(false);
    }
  } catch (err) {
    console.log(err);
    toast.error("Signup failed. Try again.");
    setLoading(false);
  }
};

  const validateForm = () => {
    const isNameValid = validateName(name);
    const isEmailValid = validateEmail(email);
    const isWebsiteValid = validateWebsite(website);
    const isPasswordValid = validatePassword(password);

    return isNameValid && isEmailValid && isWebsiteValid && isPasswordValid;
  };

  return (
    <AdminLayout>
      <Row style={{ paddingLeft: "30px", paddingTop: "50px" }}>
        <Col span={12} offset={6}>
          <h4 style={{ marginBottom: "-10px" }}>Add new user</h4>
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
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
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
          <div style={{ display: "flex" }}>
            <Button
              onClick={() => setPassword(generatePassword())}
              type="default"
              size="large"
              style={{ margin: "10px 0px 10px 0px" }}
            >
              Generate password
            </Button>
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
          </div>
          {passwordError && <div style={{ color: "red" }}>{passwordError}</div>}

          {/* Password strength requirements */}
          <div className="password-strength">
            <p>{password.length >= 8 ? '✔' : '✘'} At least 8 characters</p>
            <p>{/[A-Z]/.test(password) ? '✔' : '✘'} At least one uppercase character</p>
            <p>{/[a-z]/.test(password) ? '✔' : '✘'} At least one lowercase character</p>
            <p>{/[0-9]/.test(password) ? '✔' : '✘'} At least one number</p>
            <p>{/[!@#$%^&*]/.test(password) ? '✔' : '✘'} At least one special character</p>
          </div>

          <Select
            defaultValue="Subscriber"
            style={{ margin: "10px 0px 10px 0px", width: "100%" }}
            onChange={(e) => setRole(e)}
          >
            <Select.Option value="Subscriber">Subscriber</Select.Option>
            <Select.Option value="Author">Author</Select.Option>
            <Select.Option value="Admin">Admin</Select.Option>
            <Select.Option value="Reviewer">Reviewer</Select.Option>
          </Select>

          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
          >
            Send the new user an email about their account.
          </Checkbox>

          <Button
            onClick={handleSubmit}
            type="default"
            style={{ margin: "10px 0px 10px 0px" }}
            loading={loading}
            block
          >
            Submit
          </Button>
        </Col>
      </Row>
    </AdminLayout>
  );
};

export default NewUser;