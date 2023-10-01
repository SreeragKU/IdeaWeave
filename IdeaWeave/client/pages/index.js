import { Button } from "antd";
import React, {useState} from 'react';

export default function Home() {
  const {name, setName} = useState();
  return (  
    <div>
      <h1> Home </h1>
      <Button type="primary">Click me</Button>
      <br />
    </div>
  );
}
     