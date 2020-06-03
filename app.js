//Grab elements needed - button, output field
var btn = document.getElementById("generateBtn");
var output = document.getElementById("passOutput");

//Create arrays of the different options of characters allowed in password and put in allChars object
//Alphabetical characters - Numbers - Special Characters

var charOptions = {
    lower: {
        name: "lower",
        question: "Would you like to include lowecase letters?",
        arr: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    },
    upper: {
        name: "upper",
        question: "Would you like to include uppercase letters?",
    }, 
    numbs: {
        name: "numbers",
        question: "Would you like to include numbers?",
        arr: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    }, 
    special:{
        name: "special",
        question: "Would you like to include special characters?",
        arr: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
    }
};

//Make an uppercase array using map
 charOptions.upper.arr = charOptions.lower.arr.map(el => el.toUpperCase());

//Event listener for button on click
btn.addEventListener("click", function() {
    var length = lengthPrompt();

    //pass in lenth as a parameter to dictate arr.length
    var pass = createPassword(length);

    //Update DOM with new password
    updatePassField(pass);
})

//Password length function
var lengthPrompt = function() {
    var passLength = prompt("How long would you like your password to be (between 8-128 characters)?");

    while (isNaN(passLength) || passLength < 8 || passLength > 128 || passLength === "") {
        passLength = prompt("Please enter a number from 8-128:");
    }
    return passLength;
}

//Create password function
var createPassword = function(length) {
    var finalPassword = "";
    var allCharsArr = [];

    //Loop through all character options and push the allowed ones to an array
    for (let x = 0; x < Object.keys(charOptions).length; x++) {
        var include = confirm(Object.values(charOptions)[x].question);

        if (include) {
            allCharsArr.push(Object.values(charOptions)[x].arr);
        }
    }

    //Create the final password string
    for (let i = 0; i < length; i++){

        //Random property from the built allCharsObj object
        var randomProp = (allCharsArr[Math.floor(Math.random() * allCharsArr.length)]);

        //Pulls a ransom value from the random propery selected
        var randomVal = randomProp[Math.floor(Math.random() * randomProp.length)];

        //Add the random value to the password string
        finalPassword += randomVal;
    }

    //Return the password string
    return finalPassword;  
}

//Update DOM Function
var updatePassField = function(pass) {
    var p = document.createElement("p");
    p.textContent = pass;
    output.innerHTML = "";
    output.appendChild(p);
}

//Extra stuff:
// Copy to clipboard
// Instead of prompts, create fields -- radio buttons or check boxes for options