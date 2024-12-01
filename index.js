var randomNumber = Math.floor(Math.random() * 4) + 1;

var randomBild = "Bild" + randomNumber + ".jpg";

var randomSrc = "images_Mittagessen/" + randomBild;

var image = document.querySelector("img");

image.setAttribute("src", randomSrc);



