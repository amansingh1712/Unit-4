import React from "react";
import shoppingCart from "../../public/assets/shopping-cart.png";
import styled from "styled-components";

const ShoppingCartImg = styled.img`
  height: 30px;
  width: 30px;
`;

const ShoppingCart = () => {
  return (
    <div>
      <ShoppingCartImg src={shoppingCart} alt="shopping_cart" />
    </div>
  );
};

export default ShoppingCart;
