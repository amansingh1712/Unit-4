import React, { useEffect, useState } from "react";

import data from "../db.json";
import CardItem from "./CardItem";

const containerStyles = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gap: "25px",
  justifyContent: "center",
};

const RestaurantDetails = () => {
  const [cardData, setCardData] = useState([]);
  const [formData, setFormData] = useState({
    payment_methods: { card: false, cash: false, upi: false },
    time: 30,
  });
  console.log(formData);

  useEffect(() => {
    setCardData([...data]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardData([...cardData, { ...formData, id: cardData.length + 1 }]);
  };

  const handleChange = (e) => {
    e.preventDefault();

    let inputName = e.target.name;

    if (e.target.type === "checkbox") {
      if (formData.payment_methods[inputName]) {
        console.log("try");
        setFormData({
          ...formData,
          payment_methods: {
            ...formData.payment_methods,
            [inputName]: false,
          },
        });
      } else {
        setFormData({
          ...formData,
          payment_methods: {
            ...formData.payment_methods,
            [inputName]: true,
          },
        });
      }
    } else {
      setFormData({ ...formData, [inputName]: e.target.value });
    }
  };

  const handleStar = (star) => {
    let temp = data
      .filter((item) => item.stars > star)
      .sort((a, b) => a.stars - b.stars);
    setCardData([...temp]);
  };

  const handlePaymentCheck = (way) => {
    let temp = [];
    if (way === "cash") {
      temp = data.filter((item) => item.payment_methods.cash === true);
    } else if (way === "card") {
      temp = data.filter((item) => item.payment_methods.card === true);
    } else {
      temp = data.filter(
        (item) =>
          item.payment_methods.cash === true &&
          item.payment_methods.card === true &&
          item.payment_methods.upi === true
      );
    }
    setCardData([...temp]);
  };

  const handleSort = (query) => {
    let temp = [];
    if (query === "htl") {
      temp = cardData.sort((a, b) => b.cost_for_two - a.cost_for_two);
    } else {
      temp = cardData.sort((a, b) => a.cost_for_two - b.cost_for_two);
    }

    setCardData([...temp]);
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          justifyContent: "space-between",
        }}
      >
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <span>Title : </span>
              <div>
                <input name="title" type="text" onChange={handleChange} />
              </div>
            </div>
            <div>
              <span>Categories : </span>
              <div>
                <input name="categories" type="text" onChange={handleChange} />
              </div>
            </div>
            <div>
              <span>Image url : </span>
              <div>
                <input name="urlToImage" type="text" onChange={handleChange} />
              </div>
            </div>
            <div>
              <span>Cost for two : </span>
              <div>
                <input
                  name="cost_for_two"
                  type="text"
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <span>Reviews : </span>
              <div>
                <input name="reviews" type="number" onChange={handleChange} />
              </div>
            </div>
            <div>
              <span>Votes : </span>
              <div>
                <input name="votes" type="number" onChange={handleChange} />
              </div>
            </div>
            <div>
              <span>Stars : </span>
              <div>
                <input name="stars" type="number" onChange={handleChange} />
              </div>
            </div>
            <div>
              <span>Payment methods: </span>
              <div>
                <input name="card" type="checkbox" onChange={handleChange} />
                Card
                <input name="cash" type="checkbox" onChange={handleChange} />
                Cash
                <input name="upi" type="checkbox" onChange={handleChange} />
                UPI
              </div>
            </div>
            <div>
              <button type="submit">Add</button>
            </div>
          </form>
        </div>
        <div>
          <div>
            <p>Star sort</p>
            <button onClick={() => handleStar(1)}>1 star</button>
            <button onClick={() => handleStar(2)}>2 star</button>
            <button onClick={() => handleStar(3)}>3 star</button>
            <button onClick={() => handleStar(4)}>4 star</button>
          </div>
          <div>
            <p>Payment Sort</p>
            <button onClick={() => handlePaymentCheck("cash")}>
              Cash only
            </button>
            <button onClick={() => handlePaymentCheck("card")}>
              Card only
            </button>
            <button onClick={() => handlePaymentCheck("all")}>All</button>
          </div>
          <div>
            <p>Amount sort</p>
            <button onClick={() => handleSort("htl")}>Sort high to low</button>
            <button onClick={() => handleSort("lth")}>Sort low to high</button>
          </div>
        </div>
      </div>
      <div style={containerStyles}>
        {cardData.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantDetails;
