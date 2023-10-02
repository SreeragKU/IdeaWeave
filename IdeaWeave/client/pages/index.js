import { Button } from "antd";
import React, { useContext } from 'react';
import { AuthContext } from "../context/auth";

export default function Home() {
  const [auth] = useContext(AuthContext); 
  const { user } = auth; 

  return (  
    <div>
      <h1> Home </h1>
      <Button type="primary">Click me</Button>
      <br />
      <pre>{JSON.stringify(auth,  null, 4)}</pre>
    </div>
  );
}
