
const stashTrackerImg = {
  cardType: 'img-card',
  class: 'stash-tracker-img',
  liveLink: 'https://stashtracker.herokuapp.com/',
  imagePath: '../images/stash-tracker/stash-tracker-screenshot.png',
  images: [],
  githubLink: 'https://github.com/anderswood/stash-tracker'
}

const stashTrackerContent = {
  cardType: 'content-card',
  class: 'stash-tracker-content',
  title: 'Stash Tracker',
  text: 'This app allows the user to record backcountry skiing routes using polygons and polylines with the Google Maps API. The user can toggle between different saved stashes to display them on the map. I designed and built the app for a non-profit group that needed help collecting backcountry route information in a private way. I spent two weeks building the app as a personal project.'
}

const weatherlyImg = {
  cardType: 'img-card',
  class: 'weatherly-img',
  liveLink: 'https://anderswood.github.io/weatherly/',
  imagePath: '../images/weatherly/weatherly1.png',
  images: [],
  githubLink: 'https://github.com/anderswood/weatherly'
}

const weatherlyContent = {
  cardType: 'content-card',
  class: 'weatherly-content',
  title: 'Weatherly',
  text: 'Weatherly is a weather forecasting app built with React.js that pulls weather data from the Weather Underground API. The app enables users to view hourly and 10 day weather forecasts for a selected city and stores the most recently selected city in the browser\'s local storage. The app is fully responsive.'
}

const movieTrackerImg = {
  cardType: 'img-card',
  class: 'movie-tracker-img',
  liveLink: 'https://themovietracker.herokuapp.com/',
  imagePath: '../images/movie-tracker/movie-tracker-screenshot.png',
  images: [],
  githubLink: 'https://github.com/anderswood/movie-tracker'
}

const movieTrackerContent = {
  cardType: 'content-card',
  class: 'movie-tracker-content',
  title: 'Movie Tracker',
  text: 'This is a React.js/Redux.js app built with router and a Node.js/express back-end that pulls movie details from The Movie DB. The app allows users to browse recently released movies and favorite individual movies. The favorite movies are saved to the user\'s dashboard. My team of three members (including myself) built that app as part of a school project over one week.'
}

const madTalkImg = {
  cardType: 'img-card',
  class: 'madtalk-img',
  liveLink: 'https://madtalk.herokuapp.com/',
  imagePath: '../images/madtalk/madtalk2.png',
  images: [],
  githubLink: 'https://github.com/lauraturk/MadTalk'
}

const madTalkContent = {
  cardType: 'content-card',
  class: 'madtalk-content',
  title: 'MadTalk',
  text: 'This React.js app is a fun take on MadLibs: the app prompts the user to provide whimsical words that replace words in a text snippet. The text snippets are drawn from saucy romance novel synopses. The app uses the browser\'s speech recognition interface (supported by chrome) which allows the user to input the words by speaking. The app then reads the completed game. Our group built the back with Node.js, Express, Knex and PostgreSQL. My team of three members (including myself) built that app as part of our capstone project over 1.5 weeks.'
}

export const cardContentArr = [
  stashTrackerImg,
  stashTrackerContent,
  weatherlyImg,
  weatherlyContent,
  movieTrackerImg,
  movieTrackerContent,
  madTalkImg,
  madTalkContent
 ];
