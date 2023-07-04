# Daily Tarot

This is a web application that allows users to select a tarot card from a dropdown menu or to have one randomly selected and then receive a prediction for the day based on the meaning of that card. The predictions are generated using the **OpenAI Chat GPT API**, with the requests to the API handled server-side in an **Express.js** application (server.mjs). The server-side application is **asynchronous, using JavaScript's async/await syntax** for handling promises. The API key for the OpenAI service is securely stored in a .env file and accessed via the dotenv package. This web application is deployed on Vercel.

## How to Use
### Select My Card
Click "Select My Card" to have a random card selected for you.

### Dropdown Menu
The dropdown menu allows users to select a card from a list of options. Each card is represented by the Raider Waite image of the card and it's name.

### Card Prediction
Once a card is selected, the application uses the selected card's name to make an API call to a tarot card meaning service. The API returns a prediction for the day based on the meaning of the selected card. 
## Installation 

Clone the repository to your local machine: https://github.com/LurieK/DailyTarot.git

Navigate to the project folder and locate the index.html file.

Copy the file path of the index.html file and paste it into the address bar of your preferred web browser, or double-click the file to open it in your default browser.

Example of a file path: file:///C:/Users/YourUsername/path/to/dailytarot/index.html

Or to view visit: https://luriek.github.io/DailyTarot/

## Credits
This application was created by Luraine Kimmerle using the following resources:

Tarot card images from Rider Waite Tarot
Tarot card meaning API from ChatGPT Ai Chat bot

## Contributing

This app is a simple demo project and is not currently accepting contributions. However, if you find a bug or have a feature request, feel free to open an issue on the GitHub repository.

## License

[MIT](https://choosealicense.com/licenses/mit/)
