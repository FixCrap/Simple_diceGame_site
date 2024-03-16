var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "./images/dice" + randomNumber1 + ".png"; 

document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src",randomDiceImage)

var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "./images/dice" + randomNumber2 + ".png"; 

document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src",randomDiceImage2)

if (randomNumber1 > randomNumber2) {
    document.querySelector("body > div > h1").textContent = " Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("body > div > h1").textContent = " Player 2 Wins!";
}

else {
    document.querySelector("body > div > h1").textContent = " It's a draw!";
}