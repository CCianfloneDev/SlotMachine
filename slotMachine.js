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
    var slotOne = document.getElementById("slotOne").src = images[GetRandomNumber()];
    var slotTwo = document.getElementById("slotTwo").src = images[GetRandomNumber()];
    var slotThree = document.getElementById("slotThree").src = images[GetRandomNumber()];

    if (slotOne == slotTwo && slotTwo == slotThree)
    {
        console.log(slotOne);
        console.log(slotTwo);
        console.log(slotThree);
        console.log("three kities in a row, thats a win.")
    }

    console.log(GetRandomNumber());
}

