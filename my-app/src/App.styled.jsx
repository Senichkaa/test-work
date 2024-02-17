import styled from "styled-components";

export const Container = styled.div`
  width: 1200px;
  padding: 50px 20px;
  margin: 0 auto;
  background-color: #eaeaea;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  font-family: Montserrat, sans-serif;
`;

export const MainBackground = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  height: 200px;
  width: 450px;
  padding: 20px 25px;

  border-radius: 25px;
`;

export const CalendarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  margin-bottom: 80px;
  border-radius: 50%;
  background-color: #d7e3ff;
`;

export const MainHeader = styled.h1`
  width: 300px;
  font-size: 18px;
  letter-spacing: 1.11px;
  margin: 0 0 10px 0;
`;

export const InformationBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 15px;
`;

export const Description = styled.p`
  width: 300px;
  margin: 0;
  color: #7d7d7d;
  margin-bottom: 15px;
`;

export const TimeInformation = styled.p`
  width: 300px;
  margin: 0 0 20px 0;
  color: #cac9c9;
`;

export const DetailsButton = styled.button`
  padding: 10px 15px;
  background-color: #fff;
  border-radius: 12px;
  border: 1px solid #dedede;
  font-size: 14px;
  letter-spacing: 1.1px;
  transition: background-color 250ms ease-in-out, border 250ms ease-in-out;
  font-family: Montserrat, sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #e8e8e8;
    border: 1px solid #b1b1b1;
  }
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  border-radius: 12px;
  font-size: 14px;
  letter-spacing: 1.1px;
  background-color: #000;
  color: #fff;
  border: 1px solid #000;
  transition: background-color 250ms ease-in-out, border 250ms ease-in-out;
  font-family: Montserrat, sans-serif;
  cursor: pointer;

  &:hover {
    background-color: #424242;
    border: 1px solid #b1b1b1;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-left: 137px;
`;

export const ExitButton = styled.button`
  position: absolute;
  top: 35px;
  right: 25px;
  fill: #a9a9a9;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: fill 250ms ease-in-out;

  &:hover {
    fill: #777777;
  }
`;
