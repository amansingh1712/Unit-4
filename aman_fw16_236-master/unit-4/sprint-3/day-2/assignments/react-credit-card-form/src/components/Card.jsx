import React, { useState } from "react";
import styled from "styled-components";
import chipImg from "../assets/chip.png";
import visaImg from "../assets/symbols.png";
import { ContainerDiv, CardDiv, Labels } from "./Card.styled";

const Card = ({ data, setData }) => {
  const { cardNumber, holderName, month, year, cvc } = data;
  return (
    <ContainerDiv>
      <CardDiv>
        <div style={{ height: "30px" }}>
          <img
            style={{ marginLeft: "190px", marginTop: "-20px", width: "60px" }}
            src={visaImg}
            alt="visaIcon"
          />
        </div>
        <div>
          <img style={{ width: "30px" }} src={chipImg} alt="chipIcon" />
        </div>
        <div>
          <p>{cardNumber}</p>
        </div>

        <div
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Labels>CARD HOLDER</Labels>
            <p>{holderName}</p>
          </div>
          <div>
            <Labels>EXPIRES</Labels>
            <p>
              {month}/{year}
            </p>
          </div>
          <div>
            <Labels>CVC</Labels>
            <p>{cvc}</p>
          </div>
        </div>
      </CardDiv>
    </ContainerDiv>
  );
};

export default Card;
