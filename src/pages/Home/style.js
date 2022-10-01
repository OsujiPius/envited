import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 0 160px;

  @media (max-width: 1025px) {
    height: auto;
    position: relative;
    flex-direction: column-reverse;
    padding: 0;
  }
`;

export const EventContainer = styled.div`
  flex: 1;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1025px) {
    margin-bottom: 40px;
  }
`;

export const ImgContainer = styled.div`
  width: auto;
  height: auto;

  img {
    @media (max-width: 1025px) {
      width: 311px;
      height: 548.27px;
    }
    @media (max-width: 450px) {
      width: 165.63px;
      height: 292px;
      margin-top: -20px;
    }
  }
`;

export const DetailsContainer = styled.div`
  height: auto;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  margin-bottom: 20px;
  margin-right: 20px;

  @media (max-width: 1025px) {
    align-items: center;
    width: 99%;
  }
`;

export const DetailTitle = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  text-align: right;
  color: #240d57;
  margin-bottom: -10px;

  @media (max-width: 1025px) {
    text-align: center;
  }

  @media (max-width: 450px) {
    font-size: 36px;
  }
`;

export const DetailTitleSpan = styled.span`
  background-color: #f3ec78;
  background: linear-gradient(90deg, #8456ec 24.2%, #e87bf8 120.46%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
`;

export const DetailSubtitle = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 300;
  font-size: 24px;
  text-align: right;
  color: #4f4f4f;

  @media (max-width: 1025px) {
    text-align: center;
  }
  @media (max-width: 450px) {
    font-size: 16px;
  }
`;

export const DetailButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16px;
  width: 320px;
  height: 55px;
  background: linear-gradient(90deg, #8456ec 3.25%, #e87bf8 100%);
  border-radius: 10px;
  border: none;
  cursor: pointer;

  @media (max-width: 1025px) {
    position: absolute;
    bottom: 0;
  }

  @media (max-width: 450px) {
    width: 187px;
    height: 50px;
    bottom: -5%;
  }
`;

export const DetailButtonText = styled.p`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;

  a {
    color: #fff;
    text-decoration: none;
  }

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
