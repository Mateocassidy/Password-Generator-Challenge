/* Selects button from html. */
var generateBtn = document.querySelector("#generate");


/* Variable arrays of the upercase letters, lowercase letters, numbers, and special characters. */
var uppercaseletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseletter = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialcharacter = ["`", "~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "{", "[", "}", "]"];


/* Writes password to the #password input. */
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


/* Adds event listener to generate button. */
generateBtn.addEventListener("click", writePassword);


/* This generates the password based off user input. */
function generatePassword(){
  console.log("generatePassword() function called.");


  /* This lets user select the length. The if statement checks if the length selected is valid and alerts user if value is invalid.  */
  var length = parseInt(prompt("How many characters will the password have? (pick between 8 and 128)"));
  console.log("User entered password length: " + length);
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please choose a number between 8 and 128");
    return "";
  }


  /* This asks if they want to include uppercase/lowercase letters, numbers, and special characters. */
  var includeuppercase = confirm("Include uppercase letters?");
  console.log("Include uppercase letters? " + includeuppercase);
  var includelowercase = confirm("Include lowercase letters?");
  console.log("Include lowercase letters? " + includelowercase);
  var includenumber = confirm("Include numbers?");
  console.log("Include numbers? " + includenumber);
  var includespecial = confirm("Include special characters?");
  console.log("Include special characters? " + includespecial);

  /* Generates array of characters to include in the password. */
  var characters = [];
  if (includeuppercase) {
    characters = characters.concat(uppercaseletter);
  }
  if (includelowercase) {
    characters = characters.concat(lowercaseletter);
  }
  if (includenumber) {
    characters = characters.concat(number);
  }
  if (includespecial) {
    characters = characters.concat(specialcharacter);
  }

  /* Selects characters from the array created from code above. */
  var password = "";
  for (var i = 0; i < length; i++) {
    var randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }


  /* Returns generated password. */
  return password;
}

