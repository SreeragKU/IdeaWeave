import { Progress } from "antd";
import Link from "next/link";
import { CountUp } from 'use-count-up';

const RenderProgress = ({ number, name, link = "#" }) => (
  <Link href={link}>
    <Progress
      type="circle"
      strokeColor={{
        "0%": "#666",
        "50%": "#fff",
        "100%": "#111",
      }}
      percent={100}
      format={() => <CountUp isCounting end={number} duration={3} />}
    />
    <p style={{ marginTop: 18, color: "#666" }}>{name.toUpperCase()}</p>
  </Link>
);

export default RenderProgress;
