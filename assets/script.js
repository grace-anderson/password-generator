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
const keys = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  number: "0123456789",
  special: "!@#$%^&*()_+~\\`|}{[]:;?><,./-="
};

// array to select the characters out of the keys  for the password
const getKey = [
  function upperCase() {
    return keys.upperCase[Math.floor(Math.random() * keys.upperCase.length)];
  },
  function lowerCase() {
    return keys.lowerCase[Math.floor(Math.random() * keys.lowerCase.length)];
  },
  function number() {
    return keys.number[Math.floor(Math.random() * keys.number.length)];
  },
  function special() {
    return keys.special[Math.floor(Math.random() * keys.special.length)];
  },
];

// Assignment Code ////////////////////////////////////////
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  //password is the return value of the function generatePassword
  password = generatePassword();
  //display the password generated returned by reneratePassword
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// function to create the password
function generatePassword() {
  //user choice of character types
  chooseCharacterTypes();
  //user provided password length
  createPasswordLength();

  /////generate the password
  // while the user selected passwordLength is > than the password.length, loop over the character keys and add a character to the passwork
  while (passwordLength.value > password.length) {
    // keyToAdd is generating a random number between 1 and 4 to which will be used to randomly select one charater types in the keys array
    let keyToAdd = getKey[Math.floor(Math.random() * getKey.length)];
    // if the character type was selected by user and and the keyToAdd function, then add a character to the password
    if (includeUpperCase && keyToAdd.name === upperCase)
      {
        password += keyToAdd();
      } else if (includeLowerCase && keyToAdd.name === lowerCase) {
        password += keyToAdd();
      } else if (includeNumericChars && keyToAdd.name === number) {
        password += keyToAdd(); 
      } else if (includeSpecialChars && keyToAdd.name === special) {
        password += keyToAdd(); 
      } else {
        alert(`Help! Password generation problem. Password created so far is: ${password}`);
      }
    // ... then add the key identified by keyTo Add to the password
    //   password += keyToAdd();
    // }
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
