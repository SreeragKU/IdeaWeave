import React from 'react';
import { useSpring, animated } from 'react-spring';

const ErrorPage = ({ statusCode }) => {
  const animationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    reset: true,
  });

  const imageAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0, transform: 'scale(0.8)' },
    reset: true,
  });

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <animated.div style={imageAnimationProps}>
        <img
          src="/images/error-illustration.jpg" 
          alt="Error Illustration"
          style={{
            maxWidth: '300px', 
            maxHeight: '350px', 
            width: '100%',
            height: 'auto',
            borderRadius: '8px',
          }}

        />
      </animated.div>
      <animated.div style={animationProps}>
        <h1 style={{ fontSize: '4rem', color: '#FF4E50' }}>Error</h1>
        <p style={{ fontSize: '1.5rem' }}>
          {statusCode
            ? `An error ${statusCode} occurred on the server`
            : 'An error occurred on the client'}
        </p>
        <p style={{ fontSize: '1.2rem', color: '#2A363B' }}>
          Sorry, something went wrong!
        </p>
      </animated.div>
    </div>
  );
};

ErrorPage.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : null;
  return { statusCode };
};

export default ErrorPage;
