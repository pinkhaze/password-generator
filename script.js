// Declare arrays for numeric, uppercase, lowercase and special character sets
const numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ",", ".", "/", "~", "}", "|", "{", "`", "_", "^", "[", "]", "\\", "@", "?", "="];

// Variable to hold password length
let passwordLength;
// Declare empty array to hold user selected character set(s)
let selectedCharSets = [];
let randomizedChars = [];
let newPassword = [];

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
    while(true) {
        passwordLength = window.prompt("How many numbers?");
         // Validate user input is a number
        if (isNaN(passwordLength)) {
            alert("Not a number!");
        // Validate user input is between 8 and 128 characters (inclusive)
        } else if (passwordLength < 8 || passwordLength > 128) {
            alert("Not in range!");
        } else
        break;
    }
    
    // Confirm if user wants numeric characters
    var confirmNumbers = confirm("Include numbers?");
    console.log(confirmNumbers);
    
    // If true, add numeric characters to new array
    if (confirmNumbers) {
        selectedCharSets = selectedCharSets.concat(numericChars);
    }

    // Confirm is user wants uppercase characters
    var confirmUppercase = confirm("Include uppercase letters?");
    console.log(confirmUppercase);
    // If true, add uppercase characters to new array
    if (confirmUppercase) {
        selectedCharSets = selectedCharSets.concat(uppercaseChars);
      }
    
    // Confirm if user wants lowercase characters
    var confirmLowercase = confirm("Include lowercase letters?");
    console.log(confirmLowercase);
    // If true, add lowercase characters to new array
    if (confirmLowercase) {
        selectedCharSets = selectedCharSets.concat(lowercaseChars);
    }
  
    // Confirm if user wants special characters
    var confirmSpecial = confirm("Include special characters?");
    console.log(confirmSpecial);
    // If true, add special characters to new array
    if (confirmSpecial) {
        selectedCharSets = selectedCharSets.concat(specialChars);
    }

    // Validate user selection includes at least one character set
    if ((!confirmUppercase) && (!confirmLowercase) && (!confirmNumbers) && (!confirmSpecial)) {
        return null;
    }

    console.log(confirmNumbers, confirmUppercase, confirmLowercase, confirmSpecial);
    console.log(selectedCharSets);

    for(var i = 0; i <passwordLength; i++) {
        randomizedChars = selectedCharSets[Math.floor(Math.random() * selectedCharSets.length)]
        newPassword.push(randomizedChars);
      }
      return newPassword.join('');
    }