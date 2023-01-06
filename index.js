var randomnumber1 = Math.floor(Math.random()*6) + 1;
var randomdiceimage = "dice" + randomnumber1 + ".png";
var randomdiceimagesource = randomdiceimage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomdiceimagesource);

var randomnumber2 = Math.floor(Math.random()*6) + 1;
var randomdiceimage2 = "dice" + randomnumber2 + ".png";
var randomdiceimagesource2 = randomdiceimage2;

document.querySelectorAll("img")[1].setAttribute("src",randomdiceimagesource2);

if (randomnumber1>randomnumber2) {
        document.querySelector("h1").innerHTML = "🚩Player1 wins! ";
}
else if (randomnumber2>randomnumber1) {
    document.querySelector("h1").innerHTML = "Player2 wins! 🚩";
}
else
{
    document.querySelector("h1").innerHTML = "Draw! ";
}

