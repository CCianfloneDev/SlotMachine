// Create array of images that will be randomized.
var images = 
["images/1.png",
"images/2.png",
"images/3.png",
"images/4.png",
"images/5.png",
"images/6.png",
"images/7.png"];

/* Returns random number to grab image */
function GetRandomNumber() {
    var randomNumber = Math.floor(Math.random() * images.length);
    return randomNumber;
}

console.log(GetRandomNumber());



