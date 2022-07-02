// Selects id of generate
var generateBtn = document.querySelector("#generate");

// Generates a password using the user criteria
function generatePassword() {
  // Prompts user to enter a vlue for password length
  passLength = prompt("Please enter a length for the password between 8 and 128.");

  // Loops the password length prompt until a proper value is selected
  while (passLength < 8 || passLength > 128 || isNaN(passLength)) {
    passLength = prompt("ERROR: Please enter a value between 8 and 128.");
  };

  // Asks user to confirm if to include different character types
  passLower = confirm("Do you want to include lowercase characters? \nOK for Yes or Cancel for No.");
  passUpper = confirm("Do you want to include uppercase characters? \nOK for Yes or Cancel for No.");
  passNums = confirm("Do you want to include numbers? \nOK for Yes or Cancel for No.");
  passSpecial = confirm("Do you want to include special characters? \nOK for Yes or Cancel for No.");

  // Creates an array of all character type variables
  charType = [passLower, passUpper, passNums, passSpecial];

  // checks if all of the variables in the array are false
  function checkType(charType) {
    return charType == false;
  };

  // Loops the character type prompts until at least one character type is selected
  while (charType.every(checkType)) {
    alert("ERROR: At least one character type needed for password.");

    passLower = confirm("Do you want to include lowercase characters? \nOK for Yes or Cancel for No.");

    passUpper = confirm("Do you want to include uppercase characters? \nOK for Yes or Cancel for No.");

    passNums = confirm("Do you want to include numbers? \nOK for Yes or Cancel for No.");

    passSpecial = confirm("Do you want to include special characters? \nOK for Yes or Cancel for No.");

    charType = [passLower, passUpper, passNums, passSpecial];
  };

  // Selects what characters are included in password based on user criteria
  function passChars() {
    Chars = "";

    if (passLower) {
      Chars = Chars + "abcdefghijklmnopqrstuvwxyz";
    };

    if (passUpper) {
      Chars = Chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };

    if (passNums) {
      Chars = Chars + "0987654321";
    };

    if (passSpecial) {
      Chars += " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
    };

    return Chars;
  };

  var passGenerated = "";

  // Randomly selects characters to create a password based on length user chose
  for (var i = 0; i < passLength; i++) {
    passGenerated += passChars().charAt(Math.floor(Math.random() * passChars().length));
  };

  return passGenerated;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
