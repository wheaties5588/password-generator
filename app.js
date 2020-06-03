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

//Empty array that will be built from the questions (pushed on if answered yes)
var fullPassArr = [];




//Event listener for button on click
btn.addEventListener("click", function() {
    var length = lengthPrompt();
    console.log(length);

    //pass in lenth as a parameter to dictate arr.length
    createPassword(length);

    
    // var p = document.createElement("p");
    // p.innerText = passLength;
    // console.log(p);
    // output.innerHTML = "";
    // output.appendChild(p);
})


//functions for prompts

//Password length function
var lengthPrompt = function() {
    var passLength = prompt("How long would you like your password to be (between 8-128 characters)?");

    while (passLength < 8 || passLength > 128) {
        alert("Please enter a number between 8-128");
        passLength = prompt("How long would you like your password to be (between 8-128 characters)?");
    }

    return passLength;
}


//Create passwork function
var createPassword = function(length) {
    for (let i = 0; i < length; i++){
        var num = Math.floor(Math.random() * 10);
        fullPassArr.push(num);
    }
    console.log(fullPassArr);
}






//Output field manipulation
//Clear the field
//Append the new pasword -- as a child?




//Extra stuff:
// Copy to clipboard
// Instead of prompts, create fields -- radio buttons or check boxes for options