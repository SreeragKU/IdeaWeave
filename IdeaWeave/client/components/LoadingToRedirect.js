import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingToRedirect = ({ path = "/" }) => {
  const [count, setCount] = useState(3);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(interval);
      router.push(path);
    }

    return () => clearInterval(interval);
  }, [count]);

  return (
    
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <LoadingOutlined
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "50px",
          color: "red",
        }}
      />
    </div>
  );
};

export default LoadingToRedirect;