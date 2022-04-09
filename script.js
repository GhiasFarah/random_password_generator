// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  var isLowerCase = confirm("Do you want lowercase characters in your password?")
  var isUpperCase = confirm("Do you want uppercase characters in your password?")
  var isNumbers = confirm("Do you want numbers in your password?")
  var isSpecialCharacters = confirm("Do you want special characters in your password?")
  var passwordLength = prompt("Choose a password length of 8 - 128 characters.")

  var characterBase = "";
  var generatedPassword = ""
  var lowercaseCharacters = "qwertyuiopasdfghjklzxcvbnm"
  var uppercaseCharacters = "QWERTYUIOPASDFGHJKLZXCVBNM"
  var numbers = "1234567890"
  var specialCharacters = "!@#$%^&*()"

  if (isLowerCase == true){
    characterBase = characterBase + lowercaseCharacters
  }
  if (isUpperCase == true){
    characterBase = characterBase + uppercaseCharacters
  }
  if (isNumbers == true){
    characterBase = characterBase + numbers
  }
  if (isSpecialCharacters == true){
    characterBase = characterBase + specialCharacters
  }

  for (let i = 0; i < passwordLength; i++) {
  generatedPassword = generatedPassword + characterBase.charAt(Math.floor(Math.random()*characterBase.length))
    
  }
  return generatedPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
