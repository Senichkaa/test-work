import React, { useState } from "react";
import axios from "axios";

import {
  Container,
  MainBackground,
  CalendarWrapper,
  MainHeader,
  InformationBlock,
  Description,
  TimeInformation,
  ContentWrapper,
  DetailsButton,
  SubmitButton,
  ButtonsContainer,
  ExitButton,
} from "./App.styled";
import icons from "../src/assets/icons.svg";

const BASE_URL = "https://test.teaching-me.org/categories/v1/open";

function App() {
  const [allAveragePrices, setAllAveragePrices] = useState({});

  const calcAveragePrice = async () => {
    // Отримую усі категорії за GET запитом
    try {
      const allCategories = await axios.get(`${BASE_URL}/categories/`, {
        headers: {
          "Accept-Language": "en",
        },
      });

      // Отримання інформації про усі категорії, які приходять з запиту
      const categories = allCategories.data;

      if (Array.isArray(categories) && categories.length > 0) {
        let allAveragePrices = {};

        for (const category of categories) {
          let currentPage = 0;
          let totalPages = 1;

          let totalPrice = 0;
          let totalPriceCounter = 0;
          // Запит на отримання всіх вчителів за категоріями
          while (totalPages > currentPage) {
            const allTeachersPerCategory = await axios.post(
              `${BASE_URL}/search/`,
              {
                categories: [category.code],
                page: currentPage,
                pageSize: 10,
              },
              {
                headers: {
                  "Accept-Language": "en",
                  "Content-Type": "application/json",
                },
              }
            );
            // Отримання інформації про всіх вчителів по категорії
            const teachers = allTeachersPerCategory.data.teachers;
            totalPages = allTeachersPerCategory.data.totalPages;

            for (const teacher of teachers) {
              totalPrice += teacher.pricePerHour;
              totalPriceCounter += 1;
            }
            currentPage += 1;
          }
          // Калькуляція середніх цін за певними категоріями
          const averagePricePerCategory = totalPrice / totalPriceCounter;
          allAveragePrices[category.name] = averagePricePerCategory;
          // Запит на отримання середньої ціни
          await axios.post(
            `${BASE_URL}/average-price/`,
            {
              categoryName: category.name,
              averagePrice: averagePricePerCategory,
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          );
        }
// Записую всі середні ціни по категоріях в один об'єкт, створений на 38 рядку
        setAllAveragePrices(allAveragePrices);
      } else {
        console.log("No categories found.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div style={{ marginLeft: 15, marginTop: 15 }}>
        <button style={{ marginBottom: 15 }} onClick={calcAveragePrice}>
          Calculate average price
        </button>
        {Object.entries(allAveragePrices).map(([category, price]) => (
          <p key={category}>
            {category}: {price}
          </p>
        ))}
      </div>

      <Container>
        <MainBackground>
          <ContentWrapper>
            <CalendarWrapper>
              <svg width={32} height={32}>
                <use href={`${icons}#icon-calendar`} />
              </svg>
            </CalendarWrapper>
            <ExitButton type="submit">
              <svg width={24} height={24}>
                <use href={`${icons}#icon-cancel`} />
              </svg>
            </ExitButton>
            <InformationBlock>
              <MainHeader>Request for lesson</MainHeader>
              <Description>
                Daniel Hamilton wants to start a lesson,
                <br /> please confirm or deny the request
              </Description>
              <TimeInformation>16 Feb, 12:26PM, 2024</TimeInformation>
              <ButtonsContainer>
                <DetailsButton type="submit">View details</DetailsButton>
                <SubmitButton type="submit">Submit</SubmitButton>
              </ButtonsContainer>
            </InformationBlock>
          </ContentWrapper>
        </MainBackground>
      </Container>
    </>
  );
}

export default App;
