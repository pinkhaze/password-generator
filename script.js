// Array for numeric characters
const numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array for uppercase characters
const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

// Array for lowercase characters
const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Array for special characters
const specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ",", ".", "/", "~", "}", "|", "{", "`", "_", "^", "[", "]", "\\", "@", "?", "="];

// Variable to hold password length
let passwordLength;
// Declare empty array to hold user selected character set(s)
let selectedCharSets = [];
let randomizedChars = [];

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// TO DO:
function generatePassword() {
    // Prompt user for password length
    // Validate user input is a number
    // Validate user input is between 8 and 128 characters (inclusive)
    while(true) {
        passwordLength = window.prompt("How many numbers?");
        if (isNaN(passwordLength)) {
            alert("Not a number!")
        } else if (passwordLength < 8 || passwordLength > 128) {
            alert("Not in range!")
        } else
        break;
    }
    
    // Confirm if user wants numeric characters
    var confirmUppercase = confirm("Include uppercase letters?");
    console.log(confirmUppercase);
  
    // Confirm if user wants lowercase characters
    var confirmLowercase = confirm("Include lowercase letters?");
    console.log(confirmLowercase);
  
    // Confirm is user wants uppercase characters
    var confirmNumbers = confirm("Include numbers?");
    console.log(confirmNumbers);
  
    // Confirm if user want special characters
    var confirmSpecial = confirm("Include special characters?");
    console.log(confirmSpecial);

    // Validate user selection includes at least one character set
    if ((!confirmUppercase) && (!confirmLowercase) && (!confirmNumbers) && (!confirmSpecial)) {
        return null;
    }
    console.log("Testing comparison operators");



    // If yes to numeric characters, add characters to new array
    // If yes to lowercase characters, add characters to new array
    // If yes to uppercase characters, add characters to new array
    // If yes to special characters, add characters to new array
    // Use Math.random() to randomly select characters from new array
    // Push those characters to another array
    // Return array as string to display in text box
}
