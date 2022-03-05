// Assignment Code ////////////////////////////////////////
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //password is the return value of the function generatePassword
  var password = generatePassword();
  //display the password generated returned by reneratePassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function to create the password
function generatePassword() {
  //user choice of character types
  chooseCharacterTypes();
  //password length
  createPasswordLength();
}

//select character types for password
function chooseCharacterTypes() {
  var includeLowerCase = window.confirm(
    "Do you want LOWER case letters in your password?"
  );

  var includeUpperCase = window.confirm(
    "Do you want UPPER case letters in your password?"
  );

  var includeNumericChars = window.confirm(
    "Do you want NUMERIC characters in your password?"
  );

  var includeSpecialChars = window.confirm(
    "Do you want SPECIAL characters in your password?"
  );

  if (
    includeLowerCase === true ||
    includeUpperCase === true ||
    includeNumericChars === true ||
    includeSpecialChars === true
  ) {
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
    return userPasswordLength;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
