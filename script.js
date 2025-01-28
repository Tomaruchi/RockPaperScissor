const choices = ["rock", "paper", "scissor"];

function playGame(userChoice) {
    // Hide the text when the game starts
    const textElement = document.getElementById("text");
    textElement.classList.add("hide");

    // Show the "VS" text with a smooth transition
    const vsElement = document.querySelector(".vs");
    vsElement.classList.add("show");

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    displayChoice("user-choice", userChoice);
    displayChoice("computer-choice", computerChoice);
    determineOutcome(userChoice, computerChoice);
}

function displayChoice(elementId, choice) {
    const element = document.getElementById(elementId);
    element.innerHTML = ""; // Clear previous choice

    const img = document.createElement("img");
    img.src = `IMG/${choice}.png`;
    img.alt = choice;
    img.style.height = "170px";
    img.style.width = "170px";
    element.appendChild(img);
}

function determineOutcome(userChoice, computerChoice) {
    let outcome;
    const outcomeElement = document.getElementById("outcome");

    if (userChoice === computerChoice) {
        outcome = "It's a Tie!";
        outcomeElement.style.color = "#009BDE";
    } else if (
        (userChoice === "rock" && computerChoice === "scissor") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissor" && computerChoice === "paper")
    ) {
        outcome = "You Win!";
        outcomeElement.style.color = "#49A62D";
    } else {
        outcome = "You Lose!";
        outcomeElement.style.color = "#E33123";
    }

    outcomeElement.textContent = outcome;
    outcomeElement.style.opacity = "1"; // Trigger fade-in effect
}