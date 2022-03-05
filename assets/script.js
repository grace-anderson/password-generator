// Assignment Code ////////////////////////////////////////
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  //password length
  createPasswordLength();
}

// function to create password length
function createPasswordLength() {
  var passwordLength = prompt(
    "Enter a number greater than 0 and between 8 and 128"
  );
  if (passwordLength === null) {
    return; // break out of the prompt
  } else if (passwordLength < 8 || passwordLength > 128) {
    createPasswordLength();
    return;
  } else if (passwordLength === 0) {
    createPasswordLength();
    return;
  } else if (isNaN(passwordLength)) {
    createPasswordLength();
    return;
  } else {
    console.log(passwordLength);
    alert(`Your chosen password length is ${passwordLength}`);
    passwordText = `Your chosen password length is ${passwordLength}`;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
