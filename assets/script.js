// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  passwordLength();
}

//prompt for password length
function passwordLength() {
  var passwordLength = prompt("Enter a number between 8 and 128");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
