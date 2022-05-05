const generateBtn = document.getElementById("gene");
const upperCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()"
const placeForPassword = document.getElementById("text");

generateBtn.addEventListener('click', function(){
let length = document.getElementById('num').value;
length = +length;

if(length == 0){
 return '';
}

const hasUpperCase = document.getElementById("ch1").checked;
const hasLowerCase = document.getElementById("ch2").checked;
const hasNumber = document.getElementById("ch3").checked;
const hasSymbol = document.getElementById("ch4").checked;

password = generate_password(length, hasUpperCase, hasLowerCase, hasNumber, hasSymbol);


placeForPassword.value = password;
})



copy.addEventListener('click', function(){
placeForPassword.select()
document.execCommand("copy");
document.getSelection().empty()
alert("Copied")
})











function generate_password(len, UpperCase, LowerCase, Number, Symbol){

const Arr = []



if(UpperCase == true){
Arr.push(upperCaseLetters)
}

if(LowerCase == true){
Arr.push(lowerCaseLetters)
}

if(Number == true ){
Arr.push(numbers)
}

if(Symbol == true){
Arr.push(symbols)
}

let password_generated = '';

console.log(len)

for(i=0; i<len; i++){
Rand_num = Math.random() * Arr.length;

if(Arr[Math.floor(Rand_num)] == upperCaseLetters){
password_generated = password_generated + GetUpperCaseLetter();

}

if(Arr[Math.floor(Rand_num)] == lowerCaseLetters){
password_generated = password_generated + GetLowerCaseLetter();

}

if(Arr[Math.floor(Rand_num)] == numbers){
password_generated = password_generated + GetNumber();

}

if(Arr[Math.floor(Rand_num)]== symbols){
password_generated = password_generated + GetSymbol()

}


}


return password_generated;

}


function GetUpperCaseLetter(){
var letter = upperCaseLetters[Math.floor(Math.random() * 26)]
return letter;
}

function GetLowerCaseLetter(){
var letter = lowerCaseLetters[Math.floor(Math.random() * 26)]
return letter;
}

function GetNumber(){
var letter = numbers[Math.floor(Math.random() * 10)]
return letter;
}
function GetSymbol(){
var letter = symbols[Math.floor(Math.random() * symbols.length)]
return letter;
}
































