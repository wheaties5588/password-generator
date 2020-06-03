//Grab elements needed - button, output field
var btn = document.getElementById("generateBtn");
var output = document.getElementById("passOutput");

//Create arrays of the different options of characters allowed in password and put in allChars object
//Alphabetical characters - Numbers - Special Characters

var allCharsObj = {
    alphabet: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], 
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    specialChars: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
}

console.log(allCharsObj);


//Event listener for button on click
btn.addEventListener("click", function() {
    var length = lengthPrompt();

    //pass in lenth as a parameter to dictate arr.length
    var pass = createPassword(length);
    
    //Update DOM with new password
    updatePassField(pass);
})



//function to put all character lists into an array
var charArrCombine = function() {

}


//functions for prompts

//Password length function
var lengthPrompt = function() {
    var passLength = prompt("How long would you like your password to be (between 8-128 characters)?");
    console.log(typeof passLength);

    while ((passLength < 8 || passLength > 128)) {
        alert("Please enter a number between 8-128");
        passLength = prompt("How long would you like your password to be (between 8-128 characters)?");
    }

    return passLength;
}


//Create password function
var createPassword = function(length) {
    var passArr = [];
    var finalPassword = "";
    for (let i = 0; i < length; i++){
        var char = allCharsObj.alphabet[Math.floor(Math.random() * allCharsObj.alphabet.length)];
        passArr.push(char);
    }
    
    for (let i = 0; i < length; i++) {
        finalPassword += passArr[i];
    }

    console.log(passArr.length);
    return finalPassword;  
}


//Update DOM Function
var updatePassField = function(pass) {
    var p = document.createElement("p");
    p.textContent = pass;
    console.log(p);
    output.innerHTML = "";
    output.appendChild(p);
}



//Output field manipulation
//Clear the field
//Append the new pasword -- as a child?



//Extra stuff:
// Copy to clipboard
// Instead of prompts, create fields -- radio buttons or check boxes for options