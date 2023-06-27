// require('dotenv').config();

// const API_KEY = process.env.API_KEY;

// console.log(API_KEY)


import { cards } from './cards_array.js';
  
const button = document.querySelector(".button");
const cardChoice = document.querySelector(".card-choice");
const cardMeaning = document.getElementById("card-meaning");

button.addEventListener("click", function () {
  let randomIndex = Math.floor(Math.random() * cards.length);
  let randomCard = cards[randomIndex];
  const cardName = randomCard.Name;
  console.log(cardName);
  cardChoice.innerHTML = `<h3>${randomCard.Name}</h3><img src="${randomCard.img}" alt="${randomCard.Name}" style="display: block;">`;

  const cardImg = cardChoice.querySelector("img");
  cardImg.addEventListener("load", function () {
    cardMeaning.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  });

  getResponse(cardName);
});

//dropdown

const dropDown = document.querySelector(".mycard");

dropDown.addEventListener("change", function () {
  const selectValue = this.value;
  const selectIndex = cards.findIndex((card) => card.value === selectValue);
  const selectedCard = cards[selectIndex];
  cardChoice.innerHTML = `<h3>${selectedCard.Name}</h3><img src="${selectedCard.img}" alt="${selectedCard.Name}" style="display: block;">`;
  getResponse(selectValue);
});

// async function getResponse(card) {
//   const url = "https://chatgpt-ai-chat-bot.p.rapidapi.com/ask";
//   const options = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Key": API_KEY,
//       "X-RapidAPI-Host": "chatgpt-ai-chat-bot.p.rapidapi.com",
//     },
//     body: JSON.stringify({
//       query: `You are a expert Tarot reader.  I will give you a card and you will tell me what it means as a prediction
//         for the day. Please avoid negative readings and aim to inspire me with the meaning of the card. The card is the ${card}.`,
//     }),
//   };
//   displayLoading();
//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     const resultObj = JSON.parse(result);
//     const resultText = resultObj.response;
//     displayMeaning(resultText);
//   } catch (error) {
//     console.error(error);
//   }
// }

async function getResponse(card) {
  const url = `http://localhost:3000/tarot?card=${card}`;
  displayLoading();
  try {
    const response = await fetch(url);
    const result = await response.json();
    const resultText = result.response;
    displayMeaning(resultText);
  } catch (error) {
    console.error(error);
  }
}


function displayMeaning(meaning) {
  const windowHeight = window.innerHeight;
  const dailyReading = `<h4> ${meaning}</h4>`;
  cardMeaning.innerHTML = dailyReading;
}

function displayLoading() {
  cardMeaning.innerHTML = '<div class="spinner"></div>';
}
