import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Card, Col, Row, Button, Typography } from 'antd'
import { ThemeContext } from '../context/theme'
import { AuthContext } from '../context/auth'
import { useRouter } from 'next/router'
import { Result, Skeleton, Descriptions, Tag } from 'antd'
import jsPDF from 'jspdf'
import 'jspdf-autotable'

const { Title, Paragraph, Text } = Typography

const Plans = () => {
  const [plans, setPlans] = useState([])
  const { theme } = useContext(ThemeContext)
  const [auth, setAuth] = useContext(AuthContext)
  const [userSubscription, setUserSubscription] = useState(null)
  const [buttonLoading, setButtonLoading] = useState(false)
  const router = useRouter()
  if (!router.isFallback && !post) {
    return <ErrorPage statusCode={404} />
  }

  useEffect(() => {
    checkUserSubscription()
    fetchPlans()
  }, [auth])

  const checkUserSubscription = async () => {
    try {
      if (auth.user) {
        const response = await axios.get(`/subscription/${auth.user._id}`)
        setUserSubscription(response.data)

        if (response.data && response.data.isActive) {
          router.push('/success.js')
        }
      }
    } catch (error) {
      console.error('Error checking user subscription:', error)
    }
  }

  const fetchPlans = async () => {
    try {
      const { data } = await axios.get('/prices')
      setPlans(data.data || [])
    } catch (error) {
      console.error('Error fetching plans:', error)
    }
  }

  const handleBuyNow = async (priceId) => {
    try {
      if (!auth.user) {
        console.error('User not authenticated')
        return
      }

      const { _id } = auth.user
      setButtonLoading(true)

      const response = await axios.post('/session', {
        priceId,
        userId: _id,
        email: auth.user.email,
      })

      window.location.href = response.data.url
    } catch (error) {
      console.error('Error initiating checkout:', error)
    } finally {
      setButtonLoading(false)
    }
  }

  const getRandomColor = () => {
    const hue = Math.floor(Math.random() * 360)
    const lightness =
      theme === 'dark'
        ? Math.floor(Math.random() * 20) + 20
        : Math.floor(Math.random() * 30) + 70
    const saturation =
      theme === 'dark'
        ? Math.floor(Math.random() * 30) + 50
        : Math.floor(Math.random() * 30) + 50

    return {
      backgroundColor: `hsl(${hue},${saturation}%,${lightness}%)`,
      color: '#000',
    }
  }
  const [subscriptionDetails, setSubscriptionDetails] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (auth.user && auth.user._id) {
      fetchSubscriptionDetails(auth.user._id)
    }
  }, [auth.user])

  const fetchSubscriptionDetails = async (userId) => {
    try {
      const response = await axios.get(`/subscription/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
      })

      if (response.status === 200) {
        const data = response.data
        setSubscriptionDetails(data)
      } else {
        console.error('Failed to fetch subscription details:', response.status)
      }
    } catch (error) {
      console.error('Error fetching subscription details:', error)
    } finally {
      setLoading(false)
    }
  }
  const downloadReceipt = () => {
    const receiptDetails = subscriptionDetails?.receiptDetails

    if (!receiptDetails) {
      return
    }

    const pdf = new jsPDF()

    // Small Logo to the left
    pdf.addImage('/images/Logo.png', 'PNG', 20, 10, 30, 30)

    // "IdeaWeave Project" Heading to the right
    pdf.setFont('times', 'bold')
    pdf.setFontSize(32)
    pdf.setTextColor(33, 33, 33)
    pdf.text('IdeaWeave Project', 60, 35)

    // Receipt Heading
    pdf.setFontSize(18)
    pdf.text('Receipt', 105, 60, 'center')

    // Company Information
    setCompanyInformation(pdf)

    // Receipt Details
    setReceiptDetails(pdf, receiptDetails)

    // Signature Line
    setSignatureLine(pdf)

    // Save PDF
    pdf.save('subscription_receipt.pdf')
  }

  const setCompanyInformation = (pdf) => {
    pdf.setFont('helvetica')
    pdf.setFontSize(12)
    pdf.setTextColor(100, 100, 100)

    pdf.text('Company Information:', 20, 80)
    pdf.setTextColor(33, 33, 33)

    pdf.text('IdeaWeave Project', 20, 90)
    pdf.text('Sreerag, Regular MCA', 20, 100)
    pdf.text('Amal Jyothi College of Engineering', 20, 110)
    pdf.text('Kottayam, Kerala, India', 20, 120)
    pdf.text('Email: ideaweavep@gmail.com', 20, 130)
  }

  const setReceiptDetails = (pdf, receiptDetails) => {
    pdf.setTextColor(33, 33, 33)
    pdf.text('Receipt Details:', 20, 150)

    const tableData = [
      ['Receipt Number', receiptDetails.receiptNumber],
      ['Amount Paid', `INR ${(receiptDetails.amountPaid / 100).toFixed(2)}`],
      ['Payment Status', receiptDetails.paymentStatus],
      [
        'Payment Date',
        new Date(receiptDetails.paymentDate).toLocaleDateString(),
      ],
    ]

    pdf.autoTable({
      startY: 160,
      head: [['Description', 'Value']],
      body: tableData,
      theme: 'striped',
      margin: { top: 155 },
      styles: { textColor: [33, 33, 33], fontSize: 12 },
    })
  }

  const setSignatureLine = (pdf) => {
    pdf.line(
      20,
      pdf.internal.pageSize.height - 20,
      190,
      pdf.internal.pageSize.height - 20
    )
    pdf.text(
      'Authorized Signature',
      105,
      pdf.internal.pageSize.height - 10,
      'center'
    )
  }

  const cardStyle = {
    maxWidth: '800px',
    margin: 'auto',
    marginTop: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '30px',
  }

  const pageStyle = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  }

  const titleStyle = {
    color: '#1890ff',
    marginTop: '50px',
  }

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <Title
        level={2}
        style={{
          color: theme === 'dark' ? '#fff' : 'D3D3D3',
          marginTop: '50px',
        }}
      >
        Subscription
      </Title>
      {userSubscription ? (
        <div style={pageStyle}>
          <Title level={2} style={titleStyle}>
            🌟 Hooray! 🎉
          </Title>
          <Paragraph>
            <Text type="warning" strong>
              Congratulations!
            </Text>{' '}
            Your subscription is now active for
            <Text strong style={{ color: '#1890ff' }}>
              {' '}
              {subscriptionDetails?.remainingTimeInDays} days
            </Text>
            . We're excited to embark on this journey with you!.
          </Paragraph>
          {loading ? (
            <Skeleton active />
          ) : subscriptionDetails ? (
            <Card style={cardStyle}>
              {subscriptionDetails.receiptDetails ? (
                <>
                  <Title level={3}>Receipt Details</Title>
                  <Descriptions bordered column={2}>
                    <Descriptions.Item label="Receipt Number">
                      {subscriptionDetails.receiptDetails.receiptNumber}
                    </Descriptions.Item>
                    <Descriptions.Item label="Amount Paid">
                      <Tag color="green" style={{ padding: '8px' }}>
                        ₹{subscriptionDetails.receiptDetails.amountPaid / 100}
                      </Tag>
                    </Descriptions.Item>
                    <Descriptions.Item label="Payment Status">
                      {subscriptionDetails.receiptDetails.paymentStatus}
                    </Descriptions.Item>
                    <Descriptions.Item label="Payment Date">
                      {new Date(
                        subscriptionDetails.receiptDetails.paymentDate
                      ).toLocaleDateString()}
                    </Descriptions.Item>
                  </Descriptions>
                  <Button
                    type="primary"
                    style={{ marginTop: '20px' }}
                    onClick={downloadReceipt}
                  >
                    Download Receipt
                  </Button>
                </>
              ) : (
                <Result
                  status="warning"
                  title="No receipt details available"
                  subTitle="Please check back later."
                />
              )}
            </Card>
          ) : (
            <Result
              status="error"
              title="Failed to fetch subscription details"
              subTitle="Please try again later."
            />
          )}
        </div>
      ) : (
        <Row gutter={[16, 16]} justify="center">
          {Array.isArray(plans) && plans.length > 0 ? (
            plans.map((plan) => (
              <Col key={plan.id} xs={24} sm={12} md={8} lg={6}>
                <Card
                  title={
                    <span style={{ color: '#000' }}>
                      {plan.nickname || 'Untitled Plan'}
                    </span>
                  }
                  style={{
                    ...getRandomColor(),
                    minHeight: 300,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    borderRadius: '15px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.3s ease-in-out',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  hoverable
                >
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <div
                      style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        background: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '0 auto',
                        marginBottom: '20px',
                        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)',
                        position: 'relative',
                        zIndex: 1,
                      }}
                    >
                      <span
                        style={{
                          fontSize: '28px',
                          fontWeight: 'bold',
                          color: '#000',
                        }}
                      >
                        &#8377;{Number(plan.unit_amount / 100).toFixed(2)}
                      </span>
                      <div
                        style={{
                          position: 'absolute',
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          border: `8px solid #fff`,
                          boxSizing: 'border-box',
                          position: 'absolute',
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
                      borderRadius: '0 0 15px 15px',
                      background: theme === 'dark' ? '#333' : '#1890ff',
                      borderColor: theme === 'dark' ? '#333' : '#1890ff',
                      color: '#fff',
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
  )
}

export default Plans
