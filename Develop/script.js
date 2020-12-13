
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);
var numericCharacters =  ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = [  '@',  '%',  '+',  '\\',  '/',  "'",  '!',  '#',  '$',  '^',  '?',  ':',  ',',  ')',  '(',  '}',  '{',  ']',  '[',  '~',  '-',  '_',  '.'];
var lowerCase = [  'a',  'b',  'c',  'd',  'e',  "f",  'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',  'q',  'r',  's',  't',  'u',  'v',  'w',  'x',  'y',  'z'];
var upperCase = [  'A',  'B',  'C',  'D',  'E',  "F",  'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N', 'O',  'P',  'Q',  'R',  'S',  'R',  'U',  'V',  'W',  'X',  'Y',  'Z'];

function randomize(array){
  var randomIndex = Math.floor(Math.random()*array.length)
  var randomCharacter = array[randomIndex]
  return randomCharacter
}

function userInput() {
var characters =parseInt(prompt("How many characters would you like to include in your password?"))
if (characters<8){
  alert("Password needs to be longer than 8 characters!") 
  return
}
if (characters>128){
  alert("Password needs to be less than 128 characters!")
  return
}

if (isNaN(characters)===true){
  alert("Need to input a number between 8-128")
  return
}
}
 
var hasLowercase = confirm("Would you like to include lowercase letters?")
var hasUppercase = confirm("Would you like to include uppercase letters?")
var hasSpecialCharacters = confirm("Would you like to include special letters?")
var hasNumbers = confirm("Would you like to include numbers?")

var userChoices = {
  characters: characters, 
  hasLowercase: hasLowercase, 
  hasUppercase: hasUppercase,
  hasSpecialCharacters: hasSpecialCharacters, 
  hasNumbers: hasNumbers
}

console.log (userChoices) 
  return userChoices


function generatePassword() {
  var userOptions = userInput()
  var newPassword = []
  var possibleCharacters = []


if (userOptions.hasNumbers) {
  possibleCharacters = possibleCharacters.concat(numericCharacters)
  possibleCharacters.push(randomize(numericCharacters))
}

if (userOptions.hasSpecialCharacters) {
  possibleCharacters = possibleCharacters.concat(specialCharacters)
  possibleCharacters.push(randomize(specialCharacters))
}

if (userOptions.hasLowercase) {
  possibleCharacters = possibleCharacters.concat(lowerCase)
  possibleCharacters.push(randomize(lowerCase))
}

if (userOptions.hasUppercase) {
  possibleCharacters = possibleCharacters.concat(upperCase)
  possibleCharacters.push(randomize(upperCase))
}


for(var i=0; i<userOptions.characters;i++){
  var possible = randomize(possibleCharacters)
  newPassword.push(possible)
}

return newPassword.join("")
}



// generate password function (takes in user input uses randomize function push to array and return)



