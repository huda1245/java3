// chapter21to25
//  Answerno1 
/*
var firstName = prompt("Enter your first name")
var lastName = prompt("Enter your last name")
var fullName = ("Welcome "+ firstName + " " + lastName)
alert(fullName.toUpperCase());   */

//  Answerno2
// var favMobile = prompt("What is your fav mobile model")
// var model = ("My favourite phone is: "+ favMobile )
// document.write(model +"<br>" + "length of string is "+ model.length)  */

//  Answerno3
// var citizenship = "Pakistani";
// document.write("String: Pakistani" +  "<br>index of n :" + citizenship.indexOf("n") )  */

//  Answerno4
/*
var greet = "Hello World";
document.write("String: Hello World" +  "<br>last index of l is :" + greet.lastIndexOf("l") )   */


//  Answerno5

/*
var citizenship = "Pakistani";
document.write("String: Pakistani" +  "<br>index of 'i' is:" + citizenship.indexOf("i") )  */


//  Answerno6


/*
var Name = prompt("Enter your first name") +" "+ prompt("Enter your last name")
alert("Welcome " + Name.toUpperCase())   */

//  Answerno7

/*
var city = "Hyderabad";
var result = city.replace("Hyder" , "Islam")
document.write("City: Hyderabad <br>" + "After replacment: "+ result)  */


//  Answerno8

/*
var message = "Ali and Sami are best friends. They play cricket and football together" ;
var newMessage = message.replace(/and/g , "&");
document.write(newMessage)  */


//  Answerno9
/*
var num = "472";
var result = parseInt(num);
document.write("Value: " + num +"<br> Type: "+ typeof num +"<br> Value: " 
                + result +"<br> Type: "+ typeof result)  */


//  Answerno10

/*
var userInput = prompt("Write something to convert into upper case");
document.write(userInput.toUpperCase())  */

//  Answerno11

/*
var userInput = prompt("Write something to convert into title case");

function titleCase(userInput) {
    userInput = userInput.toLowerCase().split(' ');
    for (var i = 0; i < userInput.length; i++) {
        userInput[i] = userInput[i].charAt(0).toUpperCase() + userInput[i].slice(1); 
    }
    return userInput.join(' ');
  }

   titleCase(userInput);  */

//  Answerno12

/*
var num = 35.45;
num = num.toString();
document.write(num)
document.write("<br>" + typeof num)   */



//  Answerno13


// var userName = prompt("enter your name");

// if(userName = 33 || 43 || 46 || 64) {
//     document.write("Please enter a valid username")   XXX
// }
// else if (userName != 33 || 43 || 46 || 64) {
//     document.write(userName)
// }   */


//  Answerno14


/*
var arr =["cake" , "bread" , "muffins" , "dounut" , "chips" , "patties"]
var search = prompt("WELCOME!..What do you want to order"); 
search = search.toLowerCase();
for(var i = 0; i <= arr.length; i++){

    if(arr[i] === search){
        document.write(search + " is in our bakery at " + arr.indexOf(search) )
    }
    else if(arr[i] !== search){
        document.write(search + " is not available "  )
        break;
    }
}   */


//  Answerno15

// var password = prompt("Enter your password: ");
// var passwordLength = false;
// var passwordChar = false;
// var passwordInt = false;
// var passwordStart = true;

// //Checking for Alphabet
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);

//     //Checking for UpperCase Letters
//     if (charValue >= 65 && charValue <= 90 ){
//         passwordChar = true;
//     }

//     //Checking for LowerCase Letters
//     else if (charValue >= 97 && charValue <= 122 ){
//         passwordChar = true;
//     }
// }

// //Checking for Numbers
// for (i = 0; i < password.length; i++){
//     var charValue = password[i].charCodeAt(0);  
//     if (charValue >= 48 && charValue <= 57 ){
//         passwordInt = true;
//     }
// }

// //Checking for first letter
// var charValue = password.charCodeAt(0);
// if (charValue >= 48 && charValue <= 57 ){
//     passwordStart = false;
// }

// //Checking for Length
// if(password.length >= 6){
//     passwordLength = true;
// }

// if(passwordChar === false || passwordInt === false || passwordLength === false || passwordStart === false){
//     alert("Enter valid Password");
// }

// else{
//     alert("Password Approved");
// }

//  Answerno16

// var str = "University of Karachi";
// var arr = str.split("");
// document.write(arr)
// for(var i=0; i<arr.length; i++){
//     document.write(arr[i] + "<br>");
// }


//  Answerno17


// var str = prompt("Enter your message: ");
// document.write("User Input: " + str + "<br>");
// document.write("Last character of input: " + str[str.length - 1]);


//  Answerno18


// var str = "the quick brown fox jumps over the lazy dog";
// var count = (str.match(/the/g)).length;
// document.write("Text: " + str + "<br>");
// document.write("There are " + count + " occurrence(s) of the word 'the'");



// chapter21to25

//  Answerno1

// var num = +prompt("Enter a positive integer: ");

// if(num>0){ 
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");
// }
// else{
//     alert("Enter a positive integer please!")
// }



//  Answerno2


// var num = +prompt("Enter a negative integer: ");

// if(num<0){ 
// document.write("Number: " + num + "<br>");
// document.write("Round off value: " + Math.round(num) + "<br>");
// document.write("Floor value: " + Math.floor(num) + "<br>");
// document.write("Ceil value: " + Math.ceil(num) + "<br>");
// }
// else{
//     alert("Enter a negative integer please!")
// }

//  Answerno3

// var num = +prompt("Enter number: ");
// document.write("The absolute value of " + num + " is " + Math.abs(num));


//  Answerno4

// var randomNumber = Math.random() * 6;
// document.write("Random dice value: " + Math.floor(randomNumber));

//  Answerno5


// var coinValue = Math.random() * 2;
// coinValue = Math.floor(coinValue);
// if(coinValue > 0){
//     document.write("Random coin value: Heads");
// }
// else{
//     document.write("Random coin value: Tails");
// }

//  Answerno6

// var randomNumber = Math.random() * 100;
// document.write("Random number between 1-100: " + Math.floor(randomNumber));


//  Answerno7

// var weight = prompt("Enter your weight in kilograms: ");
// document.write("The weight of user is " + weight + " kilograms");

//  Answerno8

// var secretNumber = +prompt("Enter a number between 1 and 10");
// randomNumber = Math.random() * 10;
// randomNumber = Math.ceil(randomNumber);
// if(secretNumber === randomNumber){
//     alert("Congratulations");
// }
// else{
//     alert("Try Again");
// }



