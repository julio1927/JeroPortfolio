import styled from "styled-components";

export const CardContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #222831;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const CardWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  align-items: center;
  grid-gap: 16px;
  padding: 0 10px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const Card = styled.div`
  background: #fff;
  display: flex;
  flex-direction: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 840px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;

export const CardLink = styled.a`
  text-decoration: none !important;
  margin: 0;
`;

export const CardIcon = styled.img`
  width: 100%;
  max-width: 100%;
  height: 50%;
  max-height: 100%;
  margin-bottom: 10px;
  transition: all 0.2s linear;

  &:hover {
    transform: scale(1.04);
  }
`;

export const CardH1 = styled.div`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 14px;

  @media and screen (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const CardH2 = styled.div`
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const CardDescription = styled.div`
  font-size: 0.9rem;
  text-align: center;
  color: #222831;
`;

export const ViewSourceBtn = styled.button`
  font-size: 14px;
`;

export const DemoBtn = styled.button`
  font-size: 14px;
  margin-bottom: 40px;
`;
