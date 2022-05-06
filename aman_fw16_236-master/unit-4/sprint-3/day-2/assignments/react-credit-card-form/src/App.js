import React, { useState } from "react";
import "./styles.css";
import styled from "styled-components";
import Card from "./components/Card";
import Form from "./components/Form";

const ContainerDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 500px;
  width: 900px;
  margin: auto;
  font-family: sans-serif;
`;

export default function App() {
  const [data, setData] = useState({});

  return (
    <ContainerDiv>
      <Card data={data} setData={setData} />
      <Form data={data} setData={setData} />
    </ContainerDiv>
  );
}