// Declare arrays for numeric, uppercase, lowercase and special character sets
const numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChars = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", "-", ",", ".", "/", "~", "}", "|", "{", "`", "_", "^", "[", "]", "\\", "@", "?", "="];

// Declare variable to hold user input for password length
let passwordLength;
// Declare empty array to hold user selected character set(s)
let selectedCharSets = [];
// Declare empty array to hold randomly generated characters
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
    // Resource for while loop: https://stackoverflow.com/questions/6961095/how-can-i-continue-a-javascript-if-else-if-statement-until-i-receive-valid-inp
    // Prompt user for password length
    while(true) {
        passwordLength = window.prompt("How long would you like your password to be? Choose a number between 8 and 128.");
         // Validate user input is a number
        if (isNaN(passwordLength)) {
            alert("Oops! You did not enter a number. Try again.");
        // Validate user input is between 8 and 128 characters (inclusive)
        } else if (passwordLength < 8 || passwordLength > 128) {
            alert("Oops! The number you entered is out of range. Try again.");
        } else
        break;
    }
    
    // Confirm if user wants numbers
    var confirmNumbers = confirm("Would you like to include numbers in your password?");
    // If true, add numbers to new array
    if (confirmNumbers) {
        selectedCharSets = selectedCharSets.concat(numericChars);
    }

    // Confirm is user wants uppercase letters
    var confirmUppercase = confirm("Would you like to inclue uppercase letters in your password?");
    // If true, add uppercase letters to new array
    if (confirmUppercase) {
        selectedCharSets = selectedCharSets.concat(uppercaseChars);
      }
    
    // Confirm if user wants lowercase characters
    var confirmLowercase = confirm("Would you like to include lowercase letters in your password?");
    // If true, add lowercase letters to new array
    if (confirmLowercase) {
        selectedCharSets = selectedCharSets.concat(lowercaseChars);
    }
  
    // Confirm if user wants special characters
    var confirmSpecial = confirm("Would you like to include special characters in your password?");
    // If true, add special characters to new array
    if (confirmSpecial) {
        selectedCharSets = selectedCharSets.concat(specialChars);
    }

    // Validate user selection includes at least one character set; if not, stop 
    if ((!confirmUppercase) && (!confirmLowercase) && (!confirmNumbers) && (!confirmSpecial)) {
        return null;
    }

    //console.log(confirmNumbers, confirmUppercase, confirmLowercase, confirmSpecial);
    //console.log(selectedCharSets);

    // Resource for getting a random number: https://git.bootcampcontent.com/University-of-Minnesota/UofM-VIRT-FSF-PT-04-2023-U-LOLC-ENTG/-/blob/main/03-JavaScript/01-Activities/28-Stu_Mini-Project/Main/script.js
    // Randomly select a character from user character choice(s); add characters to final array
    for (var i = 0; i <passwordLength; i++) {
        randomizedChars = selectedCharSets[Math.floor(Math.random() * selectedCharSets.length)]
        newPassword.push(randomizedChars);
      }
      // Turn array into string
      return newPassword.join('');
    }