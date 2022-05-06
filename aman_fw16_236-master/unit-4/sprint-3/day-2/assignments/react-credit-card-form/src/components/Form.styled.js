import styled from "styled-components";

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;

export const Labels = styled.p`
  font-size: 12px;
`;

export const Icons = styled.img`
  width: 20px;
`;

export const Inp = styled.input`
  border: transparent;
  border-bottom: 1px solid deeppink;
  font-size: 18px;
`;

export const PaymentInp = styled.input`
  margin-left: 15px;
  font-size: 20px;
  color: deeppink;
  width: 100px;
  border: transparent;
  border-bottom: 1px solid lightgray;
`;

export const PaymentBtn = styled.input`
  font-size: 19px;
  height: 40px;
  width: 170px;
  background-color: #f6425b;
  border-radius: 10px;
  color: white;
  border: 1px solid #f6425b;
`;