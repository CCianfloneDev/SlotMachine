//On button click call populate cells method.
document.getElementById("spinButton").addEventListener("click", PopulateCells);

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

/* TO DO */
//Add logic for rewards.


/* Populates cells using random number, called on button click.*/
function PopulateCells() {
    //changes image of each cell using predefined array of images at index of random number.
    document.getElementById("slotOne").src = images[GetRandomNumber()];
    document.getElementById("slotTwo").src = images[GetRandomNumber()];
    document.getElementById("slotThree").src = images[GetRandomNumber()];

    console.log(GetRandomNumber());
}

