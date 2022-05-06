import React, { useState } from "react";
import calendarImg from "../assets/calendar.png";
import creditCardImg from "../assets/credit-card.png";
import userImg from "../assets/user.png";
import padlockImg from "../assets/padlock.png";
import {
  ContainerDiv,
  Labels,
  Icons,
  Inp,
  PaymentInp,
  PaymentBtn,
} from "./Form.styled";

const Form = ({ data, setData }) => {
  const [obj, setObj] = useState({});
  const handelSubmit = (e) => {
    e.preventDefault();
    setData({ ...data, ...obj });
  };

  const handleChange = (e) => {
    const name = e.target.name;
    setObj({ ...obj, [name]: e.target.value });
  };

  return (
    <form onSubmit={handelSubmit}>
      <ContainerDiv>
        <p style={{ fontSize: "22px" }}>Payment details</p>
        <div>
          <Labels>CARD HOLDERNAME</Labels>
          <Icons src={userImg} alt="userIcon" />
          <Inp
            name="holderName"
            style={{ width: "300px" }}
            type="text"
            onChange={handleChange}
          />
        </div>
        <div>
          <Labels>CARD NUMBER</Labels>
          <Icons src={creditCardImg} alt="creditCardIcon" />
          <Inp
            name="cardNumber"
            style={{ width: "300px" }}
            type="number"
            onChange={handleChange}
          />
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Labels>EXPIRY MONTH</Labels>
            <Icons src={calendarImg} alt="calendarIcon" />
            <Inp
              name="month"
              style={{ width: "70px" }}
              type="number"
              onChange={handleChange}
            />
          </div>
          <div>
            <Labels>EXPIRY YEAR</Labels>
            <Icons src={calendarImg} alt="calendarIcon" />
            <Inp
              name="year"
              style={{ width: "70px" }}
              type="number"
              onChange={handleChange}
            />
          </div>
          <div>
            <Labels>CVC</Labels>
            <Icons src={padlockImg} alt="cvvIcon" />
            <Inp
              name="cvc"
              style={{ width: "70px" }}
              type="number"
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ marginTop: "20px", margin: "auto" }}>
          <span style={{ fontSize: "18px" }}>Payment amount:</span>
          <PaymentInp name="paymentAmt" type="number" onChange={handleChange} />
        </div>
        <div style={{ marginTop: "25px", margin: "auto" }}>
          <PaymentBtn type="submit" value="PAY"></PaymentBtn>
        </div>
      </ContainerDiv>
    </form>
  );
};

export default Form;
