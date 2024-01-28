import React, { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/auth';
import { Card, Typography, Result, Skeleton, Descriptions, Tag, Button } from 'antd';
import axios from 'axios';
import jsPDF from 'jspdf';
import 'jspdf-autotable';

const { Title, Paragraph, Text } = Typography;

const SuccessPage = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [subscriptionDetails, setSubscriptionDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (auth.user && auth.user._id) {
      fetchSubscriptionDetails(auth.user._id);
    }
  }, [auth.user]);

  const fetchSubscriptionDetails = async (userId) => {
    try {
      const response = await axios.get(`/subscription/${userId}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${auth.token}`,
        },
      });

      if (response.status === 200) {
        const data = response.data;
        setSubscriptionDetails(data);
      } else {
        console.error('Failed to fetch subscription details:', response.status);
      }
    } catch (error) {
      console.error('Error fetching subscription details:', error);
    } finally {
      setLoading(false);
    }
  };

  const downloadReceipt = () => {
    const receiptDetails = subscriptionDetails?.receiptDetails;
    if (receiptDetails) {
      const pdf = new jsPDF();
      pdf.setFont('helvetica');
      pdf.setFontSize(14);

      pdf.text('IdeaWeave', 105, 20, 'center');

      pdf.setFontSize(12);
      pdf.text('Subscription Receipt', 105, 30, 'center');
      pdf.line(20, 35, 190, 35); 

      const tableData = [
        ['Receipt Number', receiptDetails.receiptNumber],
        ['Amount Paid', `INR ${(receiptDetails.amountPaid / 100).toFixed(2)}`],
        ['Payment Status', receiptDetails.paymentStatus],
        ['Payment Date', new Date(receiptDetails.paymentDate).toLocaleDateString()],
      ];

      pdf.autoTable({
        startY: 40,
        head: [['Description', 'Value']],
        body: tableData,
        theme: 'striped',
      });
      pdf.save('subscription_receipt.pdf');
    }
  };

  const cardStyle = {
    maxWidth: '800px',
    margin: 'auto',
    marginTop: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    padding: '30px',
  };

  const pageStyle = {
    textAlign: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  };

  const titleStyle = {
    color: '#1890ff',
    marginTop: '50px',
  };

  return (
    <div style={pageStyle}>
      <Title level={2} style={titleStyle}>🌟 Hooray! 🎉</Title>
      <Paragraph>
        <Text type="warning" strong>
          Congratulations!
        </Text>{' '}
        Your subscription is now active for 
        <Text strong style={{ color: '#1890ff' }}> {subscriptionDetails?.remainingTimeInDays} days</Text>. 
        We're excited to embark on this journey with you!.
      </Paragraph>
      {loading ? (
        <Skeleton active />
      ) : subscriptionDetails ? (
        <Card style={cardStyle}>
          {subscriptionDetails.receiptDetails ? (
            <>
              <Title level={3}>Receipt Details</Title>
              <Descriptions bordered column={2}>
                <Descriptions.Item label="Receipt Number">{subscriptionDetails.receiptDetails.receiptNumber}</Descriptions.Item>
                <Descriptions.Item label="Amount Paid">
                  <Tag color="green" style={{ padding: '8px' }}>₹{subscriptionDetails.receiptDetails.amountPaid / 100}</Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Payment Status">{subscriptionDetails.receiptDetails.paymentStatus}</Descriptions.Item>
                <Descriptions.Item label="Payment Date">{new Date(subscriptionDetails.receiptDetails.paymentDate).toLocaleDateString()}</Descriptions.Item>
                </Descriptions>
              <Button type="primary" style={{marginTop: "20px"}} onClick={downloadReceipt}>
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
  );
};

export default SuccessPage;