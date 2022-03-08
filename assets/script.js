//variables
var password = "";
var passwordLength = 0;
var includeUpperCase = false;
var includeLowerCase = false;
var includeNumericChars = false;
var includeSpecialChars = false;

var generateBtn = document.querySelector("#generate");

// Write password to the #password text area
function writePassword() {
  // Call generatePassword to create and return password
  var password = generatePassword();

  // Select the password text area
  var passwordText = document.querySelector("#password");

  // Apply the generated password text to the text area
  passwordText.value = password;
}

// Get password length, character types and password text
function generatePassword() {
  //user inputs passwordLength
  createPasswordLength();
  //user chooses character types to create password
  chooseCharacterTypes();

  createPasswordText();
  //pass password to writePassword()
  return password;
}

// create password length
function createPasswordLength() {
  // get user input for password length
  var userPasswordLength = prompt(
    `Choose your password length:
      Enter a number greater between 8 and 128 inclusive`
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
    alert(`Your chosen password length is ${userPasswordLength}`);
    passwordLength = parseInt(userPasswordLength);
    return passwordLength;
  }
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
    alert(
      `Your password will include the character types marked "true"
      Upper Case: ${includeUpperCase}
      Lower Case: ${includeLowerCase}
      Numeric Characters: ${includeNumericChars}
      Special Characters: ${includeSpecialChars}`
    );
  } else {
    alert(`You must select at least one character type for your password.`);
    chooseCharacterTypes(); /// TO DO - work out the option for the user to exit the pop-ups here ;
  }
}

//create password text to match user's inputted length and chosen character types
function createPasswordText() {
  // strings to be concatenated to form the string from which the password is created
  var chars = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    special: "!#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
  };

  var passwordText = "";

  // concatenate char strings from user's chosen character types
  if (includeUpperCase) {
    passwordText += chars.uppercase;
  }

  if (includeLowerCase) {
    passwordText += chars.lowercase;
  }

  if (includeNumericChars) {
    passwordText += chars.numeric;
  }

  if (includeSpecialChars) {
    passwordText += chars.special;
  }
  // the loop chooses a random character from the concatenated string until passwordLength reached
  password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += passwordText.charAt(
      Math.floor(Math.random() * passwordText.length)
    );
  }
  // Returns the password 
  return password;
}

// Add event listener to generate button
// Runs the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
