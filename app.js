//Grab elements needed - button, output field
var btn = document.getElementById("generateBtn");
var output = document.getElementById("passOutput");

//Create arrays of the different options of characters allowed in password and put in allChars object
//Alphabetical characters - Numbers - Special Characters

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


//Selects a random property of the allCharsObj object
// console.log(Object.values(allCharsObj)[Math.floor(Math.random() * Object.keys(allCharsObj).length)]);


//Make an uppercase array using map
var upperAlphabet = alphabet.map(el => el.toUpperCase());


//Event listener for button on click
btn.addEventListener("click", function() {
    var length = lengthPrompt();

    //pass in lenth as a parameter to dictate arr.length
    var pass = createPassword(length);
    
    //Update DOM with new password
    updatePassField(pass);
})

//functions for prompts

//Password length function - 
//If not an number or number outside of range - prompt wrong input and try again
//If number in range, return the number

var lengthPrompt = function() {
    var passLength = prompt("How long would you like your password to be (between 8-128 characters)?");

    while (isNaN(passLength) || passLength < 8 || passLength > 128 || passLength === "") {
        passLength = prompt("Please enter a number from 8-128:");
    }
    return passLength;
}


//Create password function
var createPassword = function(length) {
    var lowerQuestion = "Would you like to include lowecase letters?";
    var upperQuestion = "Would you like to include uppercase letters?";
    var specialQuestion = "Would you like to include special characters?";
    var numQuestion = "Would you like to include numbers?";
    var finalPassword = "";
    var allCharsObj = {
    };

    // Confirm to include lowercase letters true/false
    var includeLowercase = confirm(lowerQuestion);

    if (includeLowercase) {
        allCharsObj.alphabet = alphabet;
    }

    //Confirm to include uppercase letters true/false
    var includeUppercase = confirm(upperQuestion);

    if (includeUppercase) {
        allCharsObj.upperAlphabet = upperAlphabet;
    }

    //Confirm to include special characters true/false
    var includeSpecial = confirm(specialQuestion);

    if (includeSpecial) {
        allCharsObj.specialChars = specialChars;
    }

    //Confirm to include numberstrue/false
    var includeNumbs = confirm(numQuestion);

    if (includeNumbs) {
        allCharsObj.numbers = numbers;
    }

    //Create the final password string

    for (let i = 0; i < length; i++){

    //Random property from the built allCharsObj object
    var randomProp = (Object.values(allCharsObj)[Math.floor(Math.random() * Object.keys(allCharsObj).length)]);

    //Pulls a ransom value from the random propery selected
    var randomVal = randomProp[Math.floor(Math.random() * randomProp.length)];

    //Add the random value to the password string
    finalPassword += randomVal;
    }

    //Return the password string
    return finalPassword;  
}

//Function for include promps


//Update DOM Function
var updatePassField = function(pass) {
    var p = document.createElement("p");
    p.textContent = pass;
    output.innerHTML = "";
    output.appendChild(p);
}



//Output field manipulation
//Clear the field
//Append the new pasword -- as a child?



//Extra stuff:
// Copy to clipboard
// Instead of prompts, create fields -- radio buttons or check boxes for options