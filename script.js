// Declare arrays for numeric, uppercase, lowercase and special character sets
const numericChars = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const specialChars = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", "~", "}", "|", "{", "_", "^", "[", "]", "\\", "@", "?", "="];

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
    // Declare empty arrays at beginning of function to clear out previously generated passwords
    let passwordLength; // holds user input for password length
    let selectedCharSets = []; // holds user selected character set(s)
    let oneOfEach = []; // holds one character from each user selected character set
    let randomizedChars = [];  // holds randomly generated characters
    let newPassword = []; // holds final password
    
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
    // If true, add numericChars array to selectedChars array; add one random number to oneOfEach array
    if (confirmNumbers) {
        selectedCharSets = selectedCharSets.concat(numericChars);
        oneOfEach.push(numericChars[Math.floor(Math.random() * numericChars.length)])
    }

    // Confirm is user wants uppercase letters
    var confirmUppercase = confirm("Would you like to inclue uppercase letters in your password?");
    // If true, add uppercaseChars array to selectedChars array; add one random uppercase letter to oneOfEach array
    if (confirmUppercase) {
        selectedCharSets = selectedCharSets.concat(uppercaseChars);
        oneOfEach.push(uppercaseChars[Math.floor(Math.random() * uppercaseChars.length)])
      }
    
    // Confirm if user wants lowercase characters
    var confirmLowercase = confirm("Would you like to include lowercase letters in your password?");
    // If true, add lowercaseChars array to selectedChars array; add one random lowercase number to oneOfEach array
    if (confirmLowercase) {
        selectedCharSets = selectedCharSets.concat(lowercaseChars);
        oneOfEach.push(lowercaseChars[Math.floor(Math.random() * lowercaseChars.length)])
    }
  
    // Confirm if user wants special characters
    var confirmSpecial = confirm("Would you like to include special characters in your password?");
    // If true, add specialChars array to selectedChars array; add one random special character to oneOfEach array
    if (confirmSpecial) {
        selectedCharSets = selectedCharSets.concat(specialChars);
        oneOfEach.push(specialChars[Math.floor(Math.random() * specialChars.length)])
    }

    // Validate user selection includes at least one character set; if not, stop function
    if ((!confirmUppercase) && (!confirmLowercase) && (!confirmNumbers) && (!confirmSpecial)) {
        return null;
    }

    //console.log(confirmNumbers, confirmUppercase, confirmLowercase, confirmSpecial);
    //console.log(selectedCharSets);
    console.log(oneOfEach);

    // Resource for getting a random number: https://git.bootcampcontent.com/University-of-Minnesota/UofM-VIRT-FSF-PT-04-2023-U-LOLC-ENTG/-/blob/main/03-JavaScript/01-Activities/28-Stu_Mini-Project/Main/script.js
    // Randomly select characters from selectedCharSets array and store them in randomizedChars array; add randomizedChars array to newPassword array
    for (var i = 0; i <passwordLength; i++) {
        randomizedChars = selectedCharSets[Math.floor(Math.random() * selectedCharSets.length)]
        newPassword.push(randomizedChars);
      }

    // Turn oneOfEach array into string; insert string at beginninng of newPassword array to ensure password contains at least one character from each user selected character set
    newPassword.splice(0, oneOfEach.length, oneOfEach.join(''));
    
    // Turn contents of array into string
    return newPassword.join('');
    }