import styled from "styled-components";

const colors = {
  black: "#000000",
  darkGray: "#1b1e23",
  white: "#ffffff",
  blackIce: "#0d0d0d",
};

/* Icones da tecnologia */
export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 5px;
  margin-top: 12px;
`;

export const IconItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(20% - 20px);
  min-width: 100px;
  max-width: 150px;
  margin: 10px;
`;

export const IconImage = styled.img`
  width: 100%;
  max-width: 90px;
  height: auto;
`;

export const IconLabel = styled.span`
  margin-top: 8px;
  font-size: 16px;
  text-align: center;
  color: ${colors.white};
`;
