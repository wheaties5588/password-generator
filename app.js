//Grab elements needed - button, output field
var btn = document.getElementById("generateBtn");
var copyBtn = document.getElementById("copyBtn");
var output = document.getElementById("passOutput");
var length;
var pass;

//Object of different character options with they arrays and questions
//Alphabetical characters - Numbers - Special Characters
var charOptions = {
    lower: {
        arr: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    },
    upper: {
    }, 
    numbs: {
        arr: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
    }, 
    special:{
        arr: ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
    }
};

//Make an uppercase array using map
 charOptions.upper.arr = charOptions.lower.arr.map(el => el.toUpperCase());

//Event listener for button on click
btn.addEventListener("click", function() {
    //Retrieve elements from form

    length = lengthValidate(length);

    if (length !== false) {
        //pass in lenth as a parameter to dictate arr.length
        pass = createPassword(length);

        //Update DOM with new password
        updatePassField(pass);

        //Change copy to clipboard button text back to original
        copyBtn.innerText = "Copy to clipboard";
    }
})

//Password length function
var lengthValidate = function() {
    var passLength = document.getElementById("length").value;

    if (isNaN(passLength) || passLength < 8 || passLength > 128 || passLength === "") {
        passLength = false;
        alert("Please enter a number from 8-128:");
    }
    return passLength;
}


//Create password function
var createPassword = function(length) {
    //Get elements from form
    charOptions.lower.check = document.getElementById("lowerCase").checked;
    charOptions.upper.check = document.getElementById("upperCase").checked;
    charOptions.numbs.check = document.getElementById("numbers").checked;
    charOptions.special.check = document.getElementById("specialChars").checked;
    var finalPassword = "";
    var allCharsArr = [];


    //Loop through all character options and push the allowed ones to an array
    for (let x = 0; x < Object.keys(charOptions).length; x++) {
        var include = Object.values(charOptions)[x].check;

        if (include) {
            allCharsArr.push(Object.values(charOptions)[x].arr);
        }
    }

    //Create the final password string
    for (let i = 0; i < length; i++){

        //Random property from the built allCharsArr array
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
    p.id = "passText"
    p.textContent = pass;
    output.innerHTML = "";
    output.appendChild(p);
}


//Copy to clipboard event listener and function
copyBtn.addEventListener("click", copyToClipboard);

function copyToClipboard() {
    var passText = document.getElementById("passText").innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = passText;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);

    if (passText !== null || passText !== ""){
        copyBtn.innerText = "Copied!";
    }
}

//Extra stuff:
// Copy to clipboard
// Instead of prompts, create fields -- check boxes for options - complete