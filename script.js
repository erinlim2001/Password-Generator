// Assignment Code

//when you click button first prompt will appear
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "~", "-", "_", "+","=", "<", ">", "?", "/", "`", "."];
var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


var passwordchar = [];


function generatePassword() {
  var userLength = prompt("How many character would you like your password? (min 8, max 128)");
  //min is 8, max is 128, if less or more reprompt question
  if (userLength < 8 || userLength > 128) {
    prompt("Must choose between 8 - 128. How many character would you like your password?");
  } else if (isNaN(userLength)) {
    prompt("Must choose between 8 - 128. How many character would you like your password?");
  } else {
    alert("You chose " + userLength + " characters.");
  }
 //user confirms whether or not they want lowercase, uppercase, numbers, special characters in password
  var confirmLower = confirm("Would you like to include lowercase letters?");
  var confirmUpper = confirm("Would you like to include uppercase letters?");
  var confirmNumber = confirm("Would you like to include numbers?");
  var confirmSpecial = confirm("Would you like to include special characters?");
  
// if they don't select any, alert user to choose at least one
// if user confirms any, password characters will add/concat those confirmed elements
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    passwordchar = alert("You must include at least one of the options.");
  }
  if (confirmLower) {
    passwordchar = passwordchar.concat(lower);
  }
  if (confirmUpper) {
    passwordchar = passwordchar.concat(upper);
  }
  if (confirmNumber) {
    passwordchar = passwordchar.concat(number);
  }
  if (confirmSpecial) {
    passwordchar = passwordchar.concat(specialChar);
  }
// new password is empty string that will have characters added depending on length and confirmed statements
  var newPassword = "";
// will randomly select for password up to length user has chosen
  for (var i = 0; i < userLength; i++) {
    newPassword = newPassword + passwordchar[Math.floor(Math.random() * passwordchar.length)];
  }
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


