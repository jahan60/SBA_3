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


//creating a message box under the input form so I can show errors.
jokeSetUp.addEventListener("blur", () => {
  if (jokeSetUp.value.trim().length < 4) {
    message.textContent = "Joke setup must be at least 4 characters.";
    message.style.color = "red";
  } else {
    message.textContent = "";
  }
});
//form submit event 
//prevent page refresh
jokeBuilder.addEventListener("submit", (event) => {
  event.preventDefault(); 
  console.log("form submitted");

 // get the text the user typed into both inputs form and remove extra spaces
const setupValue = jokeSetUp.value.trim();
const punchValue = punchLine.value.trim();

 //show error message, if they have fewer than 4 characters 
 if (setupValue.length < 4 || punchValue.length < 4) {
    message.textContent = "Both fields must have at least 4 characters.";
    message.style.color = "red";
    console.log("validation failed");
    return;
  }
  //show a success alert, if the fields are long enough
  alert("Joke added successfully");
  console.log("validation passed");
  message.textContent = "";

  // Clear input fields
  jokeSetUp.value = "";
  punchLine.value = "";

  //make a temporary containaer (document fragment) and styled a box to hold the joke.
  const fragment = document.createDocumentFragment();
  const jokeDiv = document.createElement("div");
  jokeDiv.classList.add("joke_box");

  //make all the pieces needed for one joke (setup, punchline, buttion, delete)
  const setupParagraph = document.createElement("p");
  setupParagraph.textContent = setupValue;

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Show Punchline";
  toggleBtn.classList.add("show_punchline_btn");
  toggleBtn.ariaExpanded = "false";

  const punchParagraph = document.createElement("p");
  punchParagraph.textContent = punchValue;
  punchParagraph.style.display = "none";

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete Joke";
  deleteBtn.classList.add("delete_btn");

  //append elements to the DOM 
  jokeDiv.appendChild(setupParagraph);
  jokeDiv.appendChild(toggleBtn);
  jokeDiv.appendChild(punchParagraph);
  jokeDiv.appendChild(deleteBtn);

  fragment.appendChild(jokeDiv);
  jokesContainer.appendChild(fragment);
});
