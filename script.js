// Cache elements
const jokeBuilder = document.getElementById("joke_builder");
const jokeSetUp = document.getElementById("joke_setup");
const punchLine = document.getElementById("punchline");
const jokesContainer = document.getElementById("jokes_container");
const backToTopBtn = document.getElementById("back_to_top");
const bodyElement = document.querySelector("body");

console.log("elements cached");

//create message element 
const message = document.createElement("p")
jokeBuilder.appendChild(message);
