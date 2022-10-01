import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  padding: 0 200px;

  @media (max-width: 1025px) {
    height: auto;
    flex-direction: column-reverse;
    padding: 0;
    overflow-x: hidden;
  }
`;

export const EventDetails = styled.div`
  width: 50%;
  height: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  padding-left: 10px;

  @media (max-width: 1025px) {
    width: 100%;
    padding-left: 20px;
    margin-top: -100px;
  }

  @media (max-width: 450px) {
    margin-top: 15px;
  }
`;

export const EventTitle = styled.h1`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 48px;
  color: #240d57;
  margin-top: 130px;

  @media (max-width: 450px) {
    font-size: 28px;
    margin-bottom: 24px;
  }
`;

export const EventSubtitle = styled.h3`
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #828282;
  margin-top: -25px;

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const EventInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  gap: 137px;
  height: 72px;
  width: 446px;
  border-radius: 10px;
  margin-left: 15px;

  .icon {
    height: 56px;
    width: 56px;
  }

  @media (max-width: 450px) {
    width: 349.57px;
    height: 64px;
    margin-left: -10px;

    .arrow {
      margin-left: -120px;
    }
  }
`;

export const EventInfoText = styled.div`
  height: 45px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: -130px;
`;

export const EventInfoText1 = styled.h1`
  width: 155px;
  height: 21px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  color: #240d57;
  margin-top: 1px;

  @media (max-width: 450px) {
    font-size: 16px;
  }
`;
export const EventInfoText2 = styled.h3`
  width: 253px;
  height: 21px;
  font-family: "Helvetica";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #4f4f4f;
  margin-top: -9px;

  span {
    color: #000;
  }

  @media (max-width: 450px) {
    font-size: 14px;
  }
`;

export const EventImg = styled.div`
  width: 50%;
  height: 80%;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 1025px) {
    height: 100%;
    width: 100%;

    img {
      width: 593px;
      height: 593px;
    }
  }

  @media (max-width: 450px) {
    width: 375px;
    height: 375px;
  }
`;
