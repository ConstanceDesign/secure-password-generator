// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];


//Generate password
function generatePassword() {

  // Grab User Preferences
  var passwordLength = prompt("How long would you like your password to be? 8-120 characters");
  console.log("value of passwordlength", passwordLength);

  var doYouWantNumbers = confirm('Do you want numbers in your password?');
  console.log("value of doyouwantnumbers", doYouWantNumbers);

  var doYouWantSpecialChar = confirm('Do you want special characters in your password?');
  console.log("value of doYouWantSpecialChar", doYouWantSpecialChar);

  var doYouWantLowercase = confirm('Do you want lowercase letters in your password?');
  console.log("value of doYouWantLowercase", doYouWantLowercase);

  var doYouWantUppercase = confirm('Do you want uppercase letters in your password?');
  console.log("value of doYouWantUppercase", doYouWantUppercase);

  // Join Arrays based on user preferences
  var passwordArray = [];

  if (doYouWantNumbers === true) {
    passwordArray = passwordArray.concat(numbers);
    console.log('passwordArray at Numbers', passwordArray);
  }

  if (doYouWantSpecialChar === true) {
    passwordArray = passwordArray.concat(specialChar);
    console.log('passwordArray at Special Characters', passwordArray);
  }

  if (doYouWantLowercase === true) {
    passwordArray = passwordArray.concat(lowerCase);
    console.log('passwordArray at Lowercase', passwordArray);
  }

  if (doYouWantUppercase === true) {
    passwordArray = passwordArray.concat(upperCase);
    console.log('passwordArray at Uppercase', passwordArray);
  }

  if (doYouWantNumbers === false) {
    alert("No numbers will be added to password");
    console.log('No Numbers added', passwordArray);
  }

  if (doYouWantSpecialChar === false) {
    alert("No special characters will be added to password");
    console.log('No SpecialChar added', passwordArray);
  }

  if (doYouWantLowercase === false) {
    alert("No lowercase characters will be added to password");
    console.log('No Lowercase added', passwordArray);
  }

  if (doYouWantUppercase === false) {
    alert("No uppercase characters will be added to password");
    console.log('No Uppercase added', passwordArray);
  }


  // Randomize passwordArray
  var randomizedPasswordArray = passwordArray.sort(() => {
    return Math.random() - Math.random()
  });
  console.log('randomizedPasswordArray', randomizedPasswordArray);

  // Slice randomizedPasswordArray based on user preference for length
  var slicedRandomPasswordArray = randomizedPasswordArray.slice(0, parseInt(passwordLength));
  console.log('slicedRandomPasswordArray', slicedRandomPasswordArray);

  var finalPassword = slicedRandomPasswordArray.join('');
  console.log('finalPassword', finalPassword);

  return finalPassword;

}

// Add event listener to button to generate password
generateBtn.addEventListener("click", writePassword);
