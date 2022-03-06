// Global variables //
//variable for password length
var passwordLength = 0;
//variables to hold generated password text and display password
var passwordChars = "";
var passwordText = "";
var password = "";
//variables for user selected character types
//defaut is false; when user selects updates to true
var includeUpperCase = false;
var includeLowerCase = false;
var includeNumericChars = false;
var includeSpecialChars = false;

// Create password button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input to display to user in textarea
function writePassword() {
  //password is the return value of the function generatePassword()
  password = generatePassword();
  //display the password returned by generatePassword()
  passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// function to create the password
function generatePassword() {
  //user chooses character types
  chooseCharacterTypes();
  //user provides password length
  createPasswordLength();

  ///// START generate the password ///////////////////////

  //strings to be used to create passwordChar string
  var chars = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    number: "0123456789",
    special: "!@#$%^&*()_+~\\`|}{[]:;?><,./-=",
  };

  //Concatenate a string from the user's chosen characters' strings

  // if the user selected includeUpperCase (=== true), then add upperCase character string to passwordText
  if (includeUpperCase) {
    passwordChars += chars.upperCase;
  }
  // if the user selected includeLowerCase (=== true), then add lowerCase character string to passwordText
  if (includeLowerCase) {
    passwordChars += chars.lowerCase;
  }
  // if the user selected includeNumericChars (=== true), then add number character string to passwordText
  if (includeNumericChars) {
    passwordChars += chars.number;
  }
  // if the user selected includeSpecialChars (=== true), then add special character string to passwordText
  if (includeSpecialChars) {
    passwordChars += chars.special;
  }
  console.log("passwordText after characters chosen: " + passwordChars);
  // Randomly choose a character rom the concatenated passwordChar string until the user's chosen password length is reached
  for (var i = 0; i < passwordLength; i++) {
    password += passwordChars.charAt(
      Math.floor(Math.random() * passwordChars.length)
    );
  }
  ///// END generate the password ///////////////////////

  //return the generated password to the writePassword() function
  return password;
}

//select character types for password
function chooseCharacterTypes() {
  // get user's choice of characters to include in password
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
    var charChosen = true;
    alert(
      `Your password will include the character types marked "true"
      Upper Case: ${includeUpperCase}
      Lower Case: ${includeLowerCase}
      Numeric Characters: ${includeNumericChars}
      Special Characters: ${includeSpecialChars}`
    );
  } else {
    window.confirm(
      `You must select at least one character type for your password. Select OK to try again or select Cancel to exit.`
    );
    if (confirm() == true) {
      chooseCharacterTypes();
    } else
    return; ///cannot work out how to close the window.confirm() here;
  }
}

// create password length
function createPasswordLength() {
  // get user's choice for password length
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
// Clicking button triggers writePassword function
generateBtn.addEventListener("click", writePassword);
