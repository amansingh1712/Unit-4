import styled from "styled-components";

export const Status = styled.span`
  color: ${(props) => (props.color ? "green" : "red")};
`;
