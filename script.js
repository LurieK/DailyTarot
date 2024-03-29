import { cards } from './cards_array.js';

const button = document.querySelector(".button");
const cardChoice = document.querySelector(".card-choice");
const cardMeaning = document.getElementById("card-meaning");

//random card
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

//API
async function getResponse(card) {
  const url = `http://localhost:5500/tarot?card=${card}`;

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

//load spiral
function displayLoading() {
  cardMeaning.innerHTML = '<div class="spinner"></div>';
}
