const cards = [
    { Name: 'Fool 0', value: '', img: "" },
    { Name: 'The Fool', value: 'fool', img: "./untitled folder/sm_RWSa-T-00.png" },
    { Name: 'The Magician I', value: 'magician', img: './untitled folder/sm_RWSa-T-01.png' },
    { Name: 'The High Priestess II', value: 'priestess', img: "./untitled folder/sm_RWSa-T-02.png" },
    { Name: 'The Empress III', value: 'empress', img: "./untitled folder/sm_RWSa-T-03.png" },
    { Name: 'The Emperor IV', value: 'emperor', img: "./untitled folder/sm_RWSa-T-04.png" },
    { Name: 'The Heirophant V', value: 'heirophant', img: "./untitled folder/sm_RWSa-T-05.png" },
    { Name: 'The Lovers VI', value: 'lovers', img: "./untitled folder/sm_RWSa-T-06.png" },
    { Name: 'The Chariot VII', value: 'chariot', img: "./untitled folder/sm_RWSa-T-07.png" },
    { Name: 'Strength VIII', value: 'strength', img: "./untitled folder/sm_RWSa-T-08.png" },
    { Name: 'The Hermit IX', value: 'hermit', img: "./untitled folder/sm_RWSa-T-09.png" },
    { Name: 'The Wheel of Fortune X', value: 'wheel', img: "./untitled folder/sm_RWSa-T-10.png" },
    { Name: 'Justice XI', value: 'justice', img: "./untitled folder/sm_RWSa-T-11.png" },
    { Name: 'The Hanged Man XII', value: 'hanged', img: "./untitled folder/sm_RWSa-T-12.png" },
    { Name: 'Death XIII', value: 'death', img: "./untitled folder/sm_RWSa-T-13.png" },
    { Name: 'Temprence XIV', value: 'temperance', img: "./untitled folder/sm_RWSa-T-14.png" },
    { Name: 'The Devil XV', value: 'devil', img: "./untitled folder/sm_RWSa-T-15.png" },
    { Name: 'The Tower XVI', value: 'tower', img: "./untitled folder/sm_RWSa-T-16.png" },
    { Name: 'The Star XVII', value: 'star', img: "./untitled folder/sm_RWSa-T-17.png" },
    { Name: 'The Moon XVIII', value: 'moon', img: "./untitled folder/sm_RWSa-T-18.png" },
    { Name: 'The Sun XIX', value: 'sun', img: "./untitled folder/sm_RWSa-T-19.png" },
    { Name: 'Judgement XX', value: 'judgement', img: "./untitled folder/sm_RWSa-T-20.png" },
    { Name: 'The World XXI', value: 'world', img: "./untitled folder/sm_RWSa-T-21.png" },
    { Name: 'Ace of Swords', value: 'as', img: "./untitled folder/sm_RWSa-S-0A.png" },
    { Name: 'Two of Swords', value: '2s', img: "./untitled folder/sm_RWSa-S-02.png" },
    { Name: 'Three of Swords', value: '3s', img: "./untitled folder/sm_RWSa-S-03.png" },
    { Name: 'Four of Swords', value: '4s', img: "./untitled folder/sm_RWSa-S-04.png" },
    { Name: 'Five of Swords', value: '5s', img: "./untitled folder/sm_RWSa-S-05.png" },
    { Name: 'Six of Swords', value: '6s', img: "./untitled folder/sm_RWSa-S-06.png" },
    { Name: 'Seven of Swords', value: '7s', img: "./untitled folder/sm_RWSa-S-07.png" },
    { Name: 'Eight of Swords', value: '8s', img: "./untitled folder/sm_RWSa-S-08.png" },
    { Name: 'Nine of Swords', value: '9s', img: "./untitled folder/sm_RWSa-S-09.png" },
    { Name: 'Ten of Swords', value: '10s', img: "./untitled folder/sm_RWSa-S-10.png" },
    { Name: 'Page of Swords', value: 'ps', img: "./untitled folder/sm_RWSa-S-J1.png" },
    { Name: 'Knight of Swords', value: 'kns', img: "./untitled folder/sm_RWSa-S-J2.png" },
    { Name: 'Queen of Swords', value: 'qs', img: "./untitled folder/sm_RWSa-S-QU.png" },
    { Name: 'King of Swords', value: 'ks', img: "./untitled folder/sm_RWSa-S-KI.png" },
    { Name: 'Ace of Wands', value: 'aw', img: "./untitled folder/sm_RWSa-W-0A.png" },
    { Name: 'Two of Wands', value: '2w', img: "./untitled folder/sm_RWSa-W-02.png" },
    { Name: 'Three of Wands', value: '3w', img: "./untitled folder/sm_RWSa-W-03.png" },
    { Name: 'Four of Wands', value: '4w', img: "./untitled folder/sm_RWSa-W-04.png" },
    { Name: 'Five of Wands', value: '5w', img: "./untitled folder/sm_RWSa-W-05.png" },
    { Name: 'Six of Wands', value: '6w', img: "./untitled folder/sm_RWSa-W-06.png" },
    { Name: 'Seven of Wands', value: '7w', img: "./untitled folder/sm_RWSa-W-07.png" },
    { Name: 'Eight of Wands', value: '8w', img: "./untitled folder/sm_RWSa-W-08.png" },
    { Name: 'Nine of Wands', value: '9w', img: "./untitled folder/sm_RWSa-W-09.png" },
    { Name: 'Ten of Wands', value: '10w', img: "./untitled folder/sm_RWSa-W-10.png" },
    { Name: 'Page of Wands', value: 'pw', img: "./untitled folder/sm_RWSa-W-J1.png" },
    { Name: 'Knight of Wands', value: 'knw', img: "./untitled folder/sm_RWSa-W-J2.png" },
    { Name: 'Queen of Wands', value: 'qw', img: "./untitled folder/sm_RWSa-W-QU.png" },
    { Name: 'King of Wands', value: 'kw', img: "./untitled folder/sm_RWSa-W-KI.png" },
    { Name: 'Ace of Pentacles', value: 'ap', img: './untitled folder/sm_RWSa-P-0A.png' },
    { Name: 'Two of Pentacles', value: '2p', img: './untitled folder/sm_RWSa-P-02.png' },
    { Name: 'Three of Pentacles', value: '3p', img: './untitled folder/sm_RWSa-P-03.png' },
    { Name: 'Four of Pentacles', value: '4p', img: './untitled folder/sm_RWSa-P-04.png' },
    { Name: 'Five of Pentacles', value: '5p', img: './untitled folder/sm_RWSa-P-05.png' },
    { Name: 'Six of Pentacles', value: '6p', img: './untitled folder/sm_RWSa-P-06.png' },
    { Name: 'Seven of Pentacles', value: '7p', img: './untitled folder/sm_RWSa-P-07.png' },
    { Name: 'Eight of Pentacles', value: '8p', img: './untitled folder/sm_RWSa-P-08.png' },
    { Name: 'Nine of Pentacles', value: '9p', img: './untitled folder/sm_RWSa-P-09.png' },
    { Name: 'Ten of Pentacles', value: '10p', img: './untitled folder/sm_RWSa-P-10.png' },
    { Name: 'Page of Pentacles', value: 'pp', img: './untitled folder/sm_RWSa-P-J1.png' },
    { Name: 'Knight of Pentacles', value: 'knp', img: './untitled folder/sm_RWSa-P-J2.png' },
    { Name: 'Queen of Pentacles', value: 'qp', img: './untitled folder/sm_RWSa-P-QU.png' },
    { Name: 'King of Pentacles', value: 'kp', img: './untitled folder/sm_RWSa-P-KI.png' },
    { Name: 'Ace of Cups', value: 'ac', img: "./untitled folder/sm_RWSa-C-0A.png" },
    { Name: 'Two of Cups', value: '2c', img: "./untitled folder/sm_RWSa-C-02.png" },
    { Name: 'Three of Cups', value: '3c', img: "./untitled folder/sm_RWSa-C-03.png" },
    { Name: 'Four of Cups', value: '4c', img: "./untitled folder/sm_RWSa-C-04.png" },
    { Name: 'Five of Cups', value: '5c', img: "./untitled folder/sm_RWSa-C-05.png" },
    { Name: 'Six of Cups', value: '6c', img: "./untitled folder/sm_RWSa-C-06.png" },
    { Name: 'Seven of Cups', value: '7c', img: "./untitled folder/sm_RWSa-C-07.png" },
    { Name: 'Eight of Cups', value: '8c', img: "./untitled folder/sm_RWSa-C-08.png" },
    { Name: 'Nine of Cups', value: '9c', img: "./untitled folder/sm_RWSa-C-09.png" },
    { Name: 'Ten of Cups', value: '10c', img: "./untitled folder/sm_RWSa-C-10.png" },
    { Name: 'Page of Cups', value: 'pc', img: "./untitled folder/sm_RWSa-C-J1.png" },
    { Name: 'Knight of Cups', value: 'knc', img: "./untitled folder/sm_RWSa-C-J2.png" },
    { Name: 'Queen of Cups', value: 'qc', img: "./untitled folder/sm_RWSa-C-QU.png" },
    { Name: 'King of Cups', value: 'kc', img: "./untitled folder/sm_RWSa-C-KI.png" },
  ];
  


const button = document.querySelector(".button");
const cardChoice = document.querySelector(".card-choice"); 
const cardMeaning = document.getElementById('card-meaning');


button.addEventListener('click', function (){
    let randomIndex = Math.floor(Math.random()*cards.length);
    let randomCard = cards[randomIndex];
    const cardName = randomCard.Name
    console.log(cardName)
    cardChoice.innerHTML = `<h3>${randomCard.Name}</h3><img src="${randomCard.img}" alt="${randomCard.Name}" style="display: block;">`
    
    const cardImg = cardChoice.querySelector('img');
    cardImg.addEventListener('load', function() {
    cardChoice.scrollIntoView({
      behavior: 'smooth',
      block: 'end'
    });
})
   
    
    getResponse(cardName);
    

});


//dropdown


const dropDown = document.querySelector('.mycard');


dropDown.addEventListener('change', function (){
    const selectValue= this.value;
    const selectIndex = cards.findIndex(card => card.value === selectValue);
    const selectedCard = cards[selectIndex];
    cardChoice.innerHTML = `<h3>${selectedCard.Name}</h3><img src="${selectedCard.img}" alt="${selectedCard.Name}" style="display: block;">`;
    getResponse(selectValue)
    
})




async function getResponse(card){
const url = 'https://chatgpt-ai-chat-bot.p.rapidapi.com/ask';
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': '526d114da5mshd11026488d6ba9dp15cf91jsn42c0b1394840',
		'X-RapidAPI-Host': 'chatgpt-ai-chat-bot.p.rapidapi.com'
	},
	body: JSON.stringify({
		query: `You are a expert Tarot reader.  I will give you a card and you will tell me what it means as a prediction
        for the day. Please avoid negative readings and aim to inspire me with the meaning of the card. The card is the ${card}.`
	})
};
displayLoading();
try {
	const response = await fetch(url, options);
	const result = await response.text();
	const resultObj = JSON.parse(result);
    const resultText = resultObj.response;
    displayMeaning(resultText);
} catch (error) {
	console.error(error);
}
}

function displayMeaning(meaning){
    const windowHeight = window.innerHeight;
    const dailyReading = 
    `<h4> ${meaning}</h4>`;
    cardMeaning.innerHTML = dailyReading;
}

function displayLoading() {
    cardMeaning.innerHTML = '<div class="spinner"></div>';  
}

