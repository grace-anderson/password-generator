// Global variables //
//variable to track that at least one character type is selected
var characterTypeSelected = false;
//variable for password length
var passwordLength = 0;
var password = "";
var passwordText = "";
//character types selected by the user
var includeUpperCase = false;
var includeLowerCase = false;
var includeNumericChars = false;
var includeSpecialChars = false;

////// Assignment Code //////////////////////////////////////

// Generate password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //password is the return value of the function generatePassword
  password = generatePassword();
  //display the password generated returned by generatePassword
  passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log("writePassword: " + password);
}

// function to create the password
function generatePassword() {
  //user chooses character types
  chooseCharacterTypes();
  //user provides password length
  createPasswordLength();

  ///// START generate the password ///////////////////////

  //characters used to password
  var chars = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    special: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
  };

  //Concatenate the password text from the user's chosen characters

  // if the user selected includeUpperCase (=== true), then add upperCase characters to passwordText
  if (includeUpperCase) {
    passwordText += chars.upperCase;
  }
  // if the user selected includeLowerCase (=== true), then add lowerCase characters to passwordText
  if (includeLowerCase) {
    passwordText += chars.lowerCase;
  }
  // if the user selected includeNumericChars (=== true), then add number characters to passwordText
  if (includeNumericChars) {
    passwordText += chars.number;
  }
  // if the user selected includeSpecialChars (=== true), then add special characters to passwordText
  if (includeSpecialChars) {
    passwordText += chars.special;
  }
  console.log("passwordText after characters chosen: " + passwordText);
  // Using the concatenated password Text, randomly choose a character until the user's chosen password length is reached
  for (var i = 0; i < passwordLength; i++) {
    password += passwordText.charAt(
      Math.floor(Math.random() * passwordText.length)
    );
  }
  ///// END generate the password ///////////////////////

  //return the generated password to the writePassword() function
  return password;
}

//select character types for password
function chooseCharacterTypes() {
  includeUpperCase = window.confirm(
    "Do you want UPPER case letters in your password?"
  );

  includeLowerCase = window.confirm(
    "Do you want LOWER case letters in your password?"
  );

  includeNumericChars = window.confirm(
    "Do you want NUMERIC characters in your password?"
  );

  includeSpecialChars = window.confirm(
    "Do you want SPECIAL characters in your password?"
  );

  if (
    includeUpperCase === true ||
    includeLowerCase === true ||
    includeNumericChars === true ||
    includeSpecialChars === true
  ) {
    characterTypeSelected = true;
    alert(
      `Your password will include the character types marked "true"
      Upper Case: ${includeUpperCase}
      Lower Case: ${includeLowerCase}
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
    passwordLength = parseInt(userPasswordLength);
    console.log("parseInt password length: " + passwordLength);
    return passwordLength;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
