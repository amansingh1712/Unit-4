import React from "react";

const para = { fontSize: "14px", margin: "4px 0px", letterSpacing: "0.2px" };
const para2 = {
  fontSize: "13px",
  margin: "2px 0px",
  textAlign: "right",
  color: "gray",
};

const CardItem = ({
  title,
  urlToImage,
  categories,
  cost_for_two,
  time,
  payment_methods,
  stars,
  reviews,
  votes,
}) => {
  const check = () => {
    const card = payment_methods.card;
    const cash = payment_methods.cash;
    const upi = payment_methods.upi;
    let bag = "Accepts ";
    if (card && cash && upi) {
      return "Accepts all kinds of payments";
    }
    if (card) {
      bag = bag + "card, ";
    }
    if (cash) {
      bag = bag + "cash, ";
    }
    if (upi) {
      bag = bag + "upi, ";
    }
    bag = bag + "only payments";
    return bag;
  };
  return (
    <div
      style={{
        width: "420px",
        borderRadius: "5px",
        border: "1px solid lightGray",
      }}
    >
      <div
        style={{
          width: "400px",
          display: "flex",
          justifyContent: "space-between",
          margin: "10px",
          marginBottom: "20px",
        }}
      >
        <div style={{ width: "80px" }}>
          <img
            style={{ width: "80px", height: "80px", borderRadius: "5px" }}
            src={urlToImage}
            alt="food_img"
          />
        </div>

        <div
          style={{
            width: "220px",
            margin: "0px 0px",
          }}
        >
          <h3 style={{ margin: "0px", color: "red" }}>{title}</h3>
          <p style={para}>{categories}</p>
          <p style={para}>Cost ₹{cost_for_two} for two</p>
          <p style={para}>Min ₹60 • Up to {time} min</p>
          <p style={para}>{check()}</p>
        </div>

        <div style={{ width: "80px" }}>
          <div
            style={{
              fontSize: "18px",
              background: "green",
              width: "max-content",
              padding: "5px",
              marginLeft: "45px",
              color: "white",
              borderRadius: "5px",
            }}
          >
            {stars}
          </div>
          <p style={para2}>{reviews} reviews</p>
          <p style={para2}>{votes} votes</p>
        </div>
      </div>
      <div style={{ display: "flex", height: "25px" }}>
        <div style={{ flex: "2.7", border: "1px solid lightgray" }}></div>
        <div
          style={{
            flex: "1",
            display: "flex",
            border: "1px solid lightgray",
            justifyContent: "center",
            alignItems: "center",
            color: "green",
          }}
        >
          <div>Order Online {">"} </div>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
