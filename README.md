# _**CAMPY: The Camp Planner App**_

### by _**Jonathan Delcid, Cesar Lopez, Wajma Niazi, Christen Weston, & John Whitten**_

### _January 25, 2022_

#### _Campy is a multi-html, dynamic web-based application wherein the user can organize a packing list, receive a weather forecast and a map for a specific inputted location, and search meal and cocktail recipes in order to plan for an upcoming camping trip._

## Github Pages Link

### [Campy: The Camp Planner App ](https://johnwhittenstudio.github.io/camp-planner/) 

## Technologies Used

- _Babel 7.6.4_
- _Bootstrap 5.1.3_
- _CSS_
- _css-loader 3.2.0_
- _eslint 6.3.0_
- _eslint-loader 3.0.0_
- _file-loader 1.1.6_
- _html-loader 0.5.5_
- _HTML_
- _package-json_
- _Javascript_
- _Jest 24.9.0_
- _JQuery 3.6.0_
- _Node.js_
- _Node Package Manager 6.14.9_
- _popper.js 1.16.1_
- _style-loader 1.0.0_
- _webpack 4.39.3_
- _webpack-cli 3.3.8_
- _webpack-dev-server 3.8.0_

## Project Title: CAMPY: The Camp Planner App

#### MVP Objective

An app that helps a user organize a packing list, receive a weather forecast and a map for a specific inputted location, and research meal and cocktail recipes in order to help plan for an upcoming camping trip.

### User Interface

Campy consists of 5 HTML pages, each containing unique functions for user engagement.
| HTML | UI Function |
| ------ | ------ |
| Index | Introduction landing page with images hyperlinked to their respective HTML. |
| Gear | Drag and drop options from hard-coded lists based on various camping styles, each with unique packing list recommendations. |
| Weather & Map | Search LocationIQ and OpenWeather APIs by entering a city & state to see a 7-day forecast and map. |
| Meals | Search MealDB and CocktailDB APIs to get recipes with images, ingredients, measurements, and instructions. |
| About | Information about the Dev team with links to individual GitHub and LinkedIn accounts. |

## Creating API Keys

This website requires 4 separate API keys:

- LocationIQ [LocationIQ-API](https://locationiq.com/)
- OpenWeather [OpenWeather-API](https://openweathermap.org/api)
- TheMealDB [TheMealDB-API](https://www.themealdb.com/)
- TheCocktailDB [TheCocktailDB-API](https://www.thecocktaildb.com/)

_The following 2 API keys will need to be created and set up by the user:_

- LocationIQ [LocationIQ-API](https://locationiq.com/)
- OpenWeather [OpenWeather-API](https://openweathermap.org/api)
  _See Instructions below._

_The following 2 API keys are open source with unlimited usage, do not need to be created by the user, and are hard-coded in the application:_

- TheMealDB [TheMealDB-API](https://www.themealdb.com/)
- TheCocktailDB [TheCocktailDB-API](https://www.thecocktaildb.com/)

### Creating a Location IQ API Key

LocationIQ [LocationIQ-API](https://locationiq.com/)

_You will need to make an account and get an API key. The Free Trial version of LocationIQ permits the user 1 Access Token with 5,000 requests /day and 2 requests /second._

- Visit the [LocationIQ-API](https://locationiq.com/) site. In the top right of the home page, click `SIGN UP`.

- Click `Sign in with Google` if you want to sign in with your Google account. OR enter your `Work email`, `Full name`, `Use Case`, and check the `I'm not a robot` reCAPTCHA box. Then click the `SIGN UP` button.

- The next page will require you to select an option from the `I'm using LocationIQ for:`, and you should select `A Website`. For the `I'll use the following APIs` checkbox options, check `All of them!`. Click `GET STARTED`.

- Click on the `API Access Tokens` on the left column to generate your personal API key.

- At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.

### Creating an OpenWeather API Key

OpenWeather [OpenWeather-API](https://openweathermap.org/api)

_You will need to make an account and get an API key. The Free Trial version of LocationIQ permits the user with 60 calls /minute and 1,000,000 calls/month._

- Visit the [OpenWeather-API](https://openweathermap.org/api) site. Click `SIGN UP`.

- In the _**Create New Account**_ menu, enter your `Username`, `Email`, `Password`, and `Repeat Password`. Check the boxes next to `I am 16 years old and over` and `I agree with Privacy Policy, Terms and conditions...`. Consent to receive communications if you prefer. Check the `I'm not a robot` reCAPTCHA box. Then click the `Create Account` button.

- Once you are signed in, click on the `API keys` tab in your account. You can use the Default key that the API provides or generate a new key with a unique name. Generally, you'd only need multiple keys if you are using the API in multiple locations (such as on different sites) and you want to keep track of the API usage in each location.

- At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.

## Project Setup/Installation Instructions

- _Open the terminal on your local computer._

- _Navigate to the parent directory of your preference._

- _Clone this project using `$ git clone https://github.com/johnwhittenstudio/camp-planner`_

- _Navigate to the top level of the directory with the command `$ cd camp-planner`_

- _Make sure you have installed [Node js](https://nodejs.org/en/)_

- _Run command ` $ npm install` to install all dependencies._

- _Create file for storing environmental variables you want to keep secret (such as an API key) ` $ touch .env`_

- _Add the following line of code to the .env file `API_KEY_WEATHER=insert-your-API-key-here` where you substitute the OpenWeather API key you got by following the instructions above for the "insert-your-API-key-here". The following is an example using a fake API key: `API_KEY_WEATHER=1234567890`_

- _Add the following line of code to the .env file `API_KEY_MAP=insert-your-API-key-here` where you substitute the LocationIQ API key you got by following the instructions above for the "insert-your-API-key-here". The following is an example using a fake API key: `API_KEY_MAP=1234567890`_ -->

- _Run the command `$ npm run build`_

- _Run the command `$ npm run start` to launch on a browser._

## Additional Setup/Installation Note for Windows Users

This environment was created on a Mac. For it to work properly in your local environment make the following change:

- _Update package.json, line 8 to: "start": "npm run build & webpack-dev-server --open --mode development"_

## Known Bugs

- _None._

## License

[MIT License](https://opensource.org/licenses/MIT) Published _**2022**_ by _**Jonathan Delcid, Cesar Lopez, Wajma Niazi, Christen Weston, & John Whitten**_

## Contact Information

If you encounter any issues with this site, please contact the dev team:

- Jonathan Delcid at [jdelcid23@gmail.com](mailto:jdelcid23@gmail.com)
- Cesar Lopez at [Lopez.cesar.aug@gmail.com](mailto:lopez.cesar.aug@gmail.com)
- Wajma Niazi at [w1niazi@hotmail.com](mailto:w1niazi@hotmail.com)
- Christen Weston at [paleeserecycle@gmail.com](mailto:paleeserecycle@gmail.com)
- John Whitten at [johnwhitten.studio@gmail.com](mailto:johnwhitten.studio@gmail.com)
