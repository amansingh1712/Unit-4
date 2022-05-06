import React from "react";
import styled from "styled-components";

const BannerStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  color: white;
  background: linear-gradient(to top, #33ccff 0%, #ff66ff 100%);
`;

const Banner = () => {
  return (
    <div>
      <BannerStyle>
        <div>
          <div>Shoppy Friday!</div>
          <div style={{ fontSize: "12px" }}>
            Flat 50% off use coupon - MASAI (code: 123)
          </div>
        </div>
      </BannerStyle>
    </div>
  );
};

export default Banner;
