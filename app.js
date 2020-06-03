//Grab elements needed - button, output field
var btn = document.getElementById("generateBtn");
var output = document.getElementById("passOutput");

//Create arrays of the different options of characters allowed in password
//Alphabetical characters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Numbers
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

//Special Characters
var specialChars = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];


//Event listener for button on click
btn.addEventListener("click", function() {
    var length = lengthPrompt();

    //pass in lenth as a parameter to dictate arr.length
    var pass = createPassword(length);

    
    var p = document.createElement("p");
    p.textContent = pass;
    console.log(p);
    output.innerHTML = "";
    output.appendChild(p);
})


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
    var fullPassArr = [];
    var finalPassword = "";
    for (let i = 0; i < length; i++){
        var num = Math.floor(Math.random() * 10);
        fullPassArr.push(num);
    }
    
    for (let i = 0; i < length; i++) {
        finalPassword += fullPassArr[i];
    }

    console.log(fullPassArr.length);
    return finalPassword;  
}






//Output field manipulation
//Clear the field
//Append the new pasword -- as a child?




//Extra stuff:
// Copy to clipboard
// Instead of prompts, create fields -- radio buttons or check boxes for options