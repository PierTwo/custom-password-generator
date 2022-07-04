// Selects the Generate Password button by calling its id
var generateBtn = document.querySelector("#generate");

// Generates a password using the user criteria
function generatePassword() {
  // Prompts user to enter a value for password length
  var passLength = prompt("Please enter a length for the password between 8 and 128.");

  // Loops the password length prompt if an improper value is entered
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("ERROR: Please enter a value between 8 and 128.");
  };

  // Asks the user which character types to include
  var charsLower = confirm("Do you want to include lowercase characters? \nOK for Yes. Cancel for No.");
  var charsUpper = confirm("Do you want to include uppercase characters? \nOK for Yes. Cancel for No.");
  var charsNums = confirm("Do you want to include numbers? \nOK for Yes. Cancel for No.");
  var charsSpecial = confirm("Do you want to include special characters? \nOK for Yes. Cancel for No.");

  // Creates an array of all character type variables to store their boolean values
  var charTypes = [charsLower, charsUpper, charsNums, charsSpecial];

  // Checks if all of the character type variables within the array are false
  function checkTypes(charTypes) {
    return charTypes === false;
  };

  // Loops the character type confirm boxes if none are selected
  while (charTypes.every(checkTypes)) {
    alert("ERROR: At least one character type needed for password.");

    charsLower = confirm("Do you want to include lowercase characters? \nOK for Yes. Cancel for No.");
    charsUpper = confirm("Do you want to include uppercase characters? \nOK for Yes. Cancel for No.");
    charsNums = confirm("Do you want to include numbers? \nOK for Yes. Cancel for No.");
    charsSpecial = confirm("Do you want to include special characters? \nOK for Yes. Cancel for No.");

    charTypes = [charsLower, charsUpper, charsNums, charsSpecial];
  };

  // Selects what character types are included in the password based on user criteria
  function passChars() {
    var charsUsed = "";

    if (charsLower) {
      charsUsed += "abcdefghijklmnopqrstuvwxyz";
    };

    if (charsUpper) {
      charsUsed += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };

    if (charsNums) {
      charsUsed += "0987654321";
    };

    if (charsSpecial) {
      charsUsed += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    };

    // Returns which character types are to be used when generating
    return charsUsed;
  };

  // Creates the variable to set the generated password to
  var passGenerated = "";

  // Randomly selects characters from types chosen to create a password based on the length entered by user
  for (var i = 0; i < passLength; i++) {
    passGenerated += passChars().charAt(Math.floor(Math.random() * passChars().length));
  };

  // Returns the generated password
  return passGenerated;
};

// Write password to the #password text area
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
