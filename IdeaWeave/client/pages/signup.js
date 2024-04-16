import React, { useState, useContext, useEffect } from 'react'
import { Form, Input, Button, Col, Row } from 'antd'
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons'
import Link from 'next/link'
import axios from 'axios'
import toast from 'react-hot-toast'
import { AuthContext } from '../context/auth'
import { useRouter } from 'next/router'

function Signup() {
  const [auth, setAuth] = useContext(AuthContext)
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    special: false,
  })
  const [password, setPassword] = useState('')
  const [showRequirements, setShowRequirements] = useState(false)
  const [stage, setStage] = useState(1)
  const [data, setData] = useState({
    email: '',
    otp: '',
    name: '',
    password: '',
  })

  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (auth?.token) {
      router.push('/')
    }
  }, [auth, router])

  const checkPasswordStrength = (value) => {
    setPassword(value)
    const requirements = {
      length: value.length >= 8,
      uppercase: /[A-Z]/.test(value),
      lowercase: /[a-z]/.test(value),
      number: /[0-9]/.test(value),
      special: /[!@#$%^&*]/.test(value),
    }
    setPasswordStrength(requirements)
    const allConditionsMet = Object.values(requirements).every(
      (condition) => condition
    )
    setShowRequirements(!allConditionsMet)
  }

  const handleGetOtp = async () => {
    if (data.email && data.email.trim() !== '') {
      try {
        setLoading(true)

        const response = await axios.post('/send-otp', { email: data.email })
        if (response.data?.success) {
          toast.success('Check your email (even spam). OTP is sent')
          setStage(2)
        } else {
          toast.error('Failed to send OTP. Try again.')
        }
      } catch (error) {
        toast.error('Failed to send OTP. Try again.')
      } finally {
        setLoading(false)
      }
    }
  }

  const handleVerifyOtp = async () => {
    if (data.otp && data.otp.trim() !== '') {
      try {
        setLoading(true) // Set loading to true before making the request

        const response = await axios.post('/verify-otp', {
          email: data.email,
          otp: data.otp,
        })
        if (response.data?.token) {
          toast.success('OTP verified successfully')
          setStage(3)
        } else {
          toast.error('Failed to verify OTP. Please try again.')
        }
      } catch (error) {
        toast.error('Failed to verify OTP. Please try again.')
      } finally {
        setLoading(false) // Set loading back to false in the finally block
      }
    }
  }

  const handleRegister = async () => {
    try {
      setLoading(true) // Set loading to true before making the request

      if (stage === 3 && (!data.name || !data.password)) {
        toast.error('Name and password are required')
        setLoading(false)
        return
      }

      const response = await axios.post('/signup', {
        email: data.email,
        name: data.name,
        password: data.password,
        otp: data.otp,
      })

      if (response.data?.token) {
        toast.success('Successfully signed up')
        router.push('/signin')
      } else {
        toast.error(response.data.error || 'Signup failed. Try again.')
      }
    } catch (err) {
      toast.error('Signup failed. Try again')
      console.error(err)
    } finally {
      setLoading(false) // Set loading back to false in the finally block
    }
  }

  const onFormFinish = async (values) => {
    try {
      setLoading(true) // Set loading to true before making the request

      if (stage === 1) {
        await setData({ ...data, email: values.email })
        await handleGetOtp()
      } else if (stage === 2) {
        await setData({ ...data, otp: values.otp })
        await handleVerifyOtp()
      } else if (stage === 3) {
        await setData({ ...data, name: values.name, password: values.password })
        if (!data.name || !data.password) {
          return
        } else {
          await handleRegister()
        }
      }
    } catch (error) {
      console.error(error)
      toast.error('An error occurred. Please try again.')
    } finally {
      setLoading(false) // Set loading back to false in the finally block
    }
  }

  const isEmailStage = stage === 1
  const isOTPStage = stage === 2
  const isNamePasswordStage = stage === 3

  const renderRequirementStatus = (condition, requirement) => {
    return (
      <p
        style={{
          color: condition ? 'green' : 'red',
          textDecoration: condition ? 'line-through' : 'none',
        }}
      >
        {condition ? '✔' : '✘'} {requirement}
      </p>
    )
  }

  const resetUserData = () => {
    // Clear user data and reset to stage 1
    setData({
      email: '',
      otp: '',
      name: '',
      password: '',
    })
    setStage(1)
  }

  return (
    <Row>
      <Col span={8} offset={8}>
        <h1 style={{ paddingTop: '100px' }}>Sign Up</h1>

        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFormFinish}
        >
          {isEmailStage && (
            <Form.Item
              name="email"
              rules={[
                {
                  type: 'email',
                  required: true,
                  message: 'Please input a valid email!',
                },
              ]}
              style={{ marginBottom: '20px' }}
            >
              <Input
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="Email"
              />
            </Form.Item>
          )}

          {isOTPStage && (
            <Form.Item
              name="otp"
              rules={[
                {
                  required: true,
                  message: 'Please input the OTP sent to your email',
                },
              ]}
              style={{ marginBottom: '20px' }}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="Enter OTP"
                value={data.otp}
                onChange={(e) => setData({ ...data, otp: e.target.value })}
              />
            </Form.Item>
          )}

          {isNamePasswordStage && (
            <>
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Name is required',
                  },
                ]}
                style={{ marginBottom: '20px' }}
              >
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Name"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    validator: (rule, value) => {
                      const conditionsMet = Object.values(
                        passwordStrength
                      ).every((condition) => condition)
                      if (conditionsMet) {
                        return Promise.resolve()
                      } else {
                        return Promise.reject(
                          'Password does not meet the requirements.'
                        )
                      }
                    },
                  },
                ]}
                style={{ marginBottom: '20px' }}
              >
                <div>
                  <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    iconRender={(visible) =>
                      visible ? <EyeOutlined /> : <EyeInvisibleOutlined />
                    }
                    onChange={(e) => {
                      checkPasswordStrength(e.target.value)
                      setData({ ...data, password: e.target.value })
                    }}
                  />
                  {showRequirements && (
                    <div className="password-strength">
                      {renderRequirementStatus(
                        passwordStrength.length,
                        'At least 8 characters'
                      )}
                      {renderRequirementStatus(
                        passwordStrength.uppercase,
                        'At least one uppercase character'
                      )}
                      {renderRequirementStatus(
                        passwordStrength.lowercase,
                        'At least one lowercase character'
                      )}
                      {renderRequirementStatus(
                        passwordStrength.number,
                        'At least one number'
                      )}
                      {renderRequirementStatus(
                        passwordStrength.special,
                        'At least one special character'
                      )}
                    </div>
                  )}
                </div>
              </Form.Item>
            </>
          )}

          <Form.Item style={{ marginBottom: '0' }}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
              disabled={loading}
            >
              {stage === 1
                ? 'Get OTP'
                : stage === 2
                ? 'Verify OTP'
                : 'Register'}
            </Button>
          </Form.Item>

          <div style={{ paddingTop: '16px' }}>
            {isEmailStage ? (
              'Already have an account? '
            ) : (
              <span onClick={resetUserData} style={{ cursor: 'pointer' }}>
                Go back
              </span>
            )}
            {isEmailStage ? <Link href="/signin">Login now!</Link> : null}
          </div>
        </Form>
      </Col>
    </Row>
  )
}

export default Signup
