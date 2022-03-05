// Global variables //
//variable to track that at least one character type is selected
var characterTypeSelected = false;
//variable for password length
var passwordLength = 0;
var password = "";
//character types selected by the user
var includeLowerCase = false;
var includeUpperCase = false;
var includeNumericChars = false;
var includeSpecialChars = false;

//characters to be used when creating password
var chars = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
};

// array from which to select the characters for the password
var getChar = [
  function upperCase() {
    return chars.upperCase[Math.floor(Math.random() * chars.upperCase.length)];
  },
  function lowerCase() {
    return chars.lowerCase[Math.floor(Math.random() * chars.lowerCase.length)];
  },
  function number() {
    return chars.number[Math.floor(Math.random() * chars.number.length)];
  },
  function special() {
    return chars.special[Math.floor(Math.random() * chars.special.length)];
  },
];

// Assignment Code ////////////////////////////////////////
// Generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //password is the return value of the function generatePassword
  password = generatePassword();
  //display the password generated returned by generatePassword
  var passwordText = document.querySelector("#password");
  console.log("passwordText: " + passwordText);

  passwordText.value = password;
  console.log("writePassword: " + password);
}

// function to create the password
function generatePassword() {
  //user chooses character types
  chooseCharacterTypes();
  //user provides password length
  createPasswordLength();

  /////generate the password ////////////

  for (var i = 0; i < passwordLength; i++) {
    // charToAdd is generating a random number between 1 and 4 to which will be used to randomly select one charater types from the chars
    var charToAdd = getChar[Math.floor(Math.random() * getChar.length)];
    // if the character type was selected by user and and the charToAdd function, then add a character to the password
  
    if (includeUpperCase) {
      password += charToAdd();
    } else if (includeLowerCase) {
      password += charToAdd();
    } else if (includeNumericChars) {
      password += charToAdd();
    } else {
      //includeSpecialChars //
        password += charToAdd();
    }
    // then return password to writePassword()
    console.log("Password: " + password);
  }
  return password;
}

//select character types for password
function chooseCharacterTypes() {
  includeLowerCase = window.confirm(
    "Do you want LOWER case letters in your password?"
  );

  includeUpperCase = window.confirm(
    "Do you want UPPER case letters in your password?"
  );

  includeNumericChars = window.confirm(
    "Do you want NUMERIC characters in your password?"
  );

  includeSpecialChars = window.confirm(
    "Do you want SPECIAL characters in your password?"
  );

  if (
    includeLowerCase === true ||
    includeUpperCase === true ||
    includeNumericChars === true ||
    includeSpecialChars === true
  ) {
    characterTypeSelected = true;
    alert(
      `Your password will include the character types marked "true"
      Lower Case: ${includeLowerCase}
      Upper Case: ${includeUpperCase}
      Numeric Characters: ${includeNumericChars}
      Special Characters: ${includeSpecialChars}`
    );
  } else {
    var continueOrExit = window.confirm(
      `You must select at least one character type for your password. Have another try or select Cancel to exit.`
    );
    if (!continueOrExit) {
      return; //this return is not working-should close prompt and return user to main page.
    } else {
      chooseCharacterTypes();
    }
  }
}

// create password length
function createPasswordLength() {
  var userPasswordLength = prompt(
    "Enter a number greater than 0 and between 8 and 128"
  );
  if (userPasswordLength === null) {
    return; // break out of the prompt
  } else if (
    userPasswordLength < 8 ||
    userPasswordLength > 128 ||
    userPasswordLength === 0 ||
    isNaN(userPasswordLength)
  ) {
    createPasswordLength();
    return;
  } else {
    console.log(userPasswordLength);
    alert(`Your chosen password length is ${userPasswordLength}`);
    passwordLength = userPasswordLength;
    return passwordLength;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
