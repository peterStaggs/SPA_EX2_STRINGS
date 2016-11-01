var subBtn = document.getElementById("submit");
var obj = {};

function alphabits() {
    
    myString = document.getElementById("myForm").value;
	if (document.getElementById("myForm").value === "") {
       alert('requires input');
    }
    //This easily checks to make sure only letters are used--scope is global
    if (!/^[a-zA-Z]*$/g.test(document.getElementById("myForm").value)) {
        alert("Invalid characters"); 
    }
    //.sort will by default put strings in alphabetical order. Here you split it by each string value (''), sort it, and reassemble it.
    var alphabetically = document.getElementById("myForm").value.split("").sort().join(""); 
    document.getElementById("alphabitsOutput").innerHTML = "<p>" + "This is in alphabetical order: " + alphabetically + "</p>";
}

function reversal() {
    myString = document.getElementById("myForm").value;
    //split the string, reverse the order, reassemble it.
    var reverse = myString.split("").reverse().join("");
    document.getElementById("reverseOutput").innerHTML = "<p>" + "This is in reverse: " + reverse + "</p>";
}

function palindrome() {
    myString = document.getElementById("myForm").value;
    //compare the original input to the input reversed--if they're the same, it's a palindrome.
    if (document.getElementById("myForm").value === document.getElementById("myForm").value.split("").reverse().join("")) {
    console.log("this is a palindrome bro");
    document.getElementById("palindrome").innerHTML = "<p>" + "this is a palindrome, bro" + "</p>";
   } else {
    console.log("this isn't a palindrome, bro");
    document.getElementById("palindrome").innerHTML = "<p>" + "this isn't a palindrome, bro" + "</p>";
     }
     return false;
}
//used onsubmit="return false" in the html to easily get the functions to run with enter keypress
document.getElementById("submit").addEventListener("click", alphabits);
document.getElementById("submit").addEventListener("click", reversal);
document.getElementById("submit").addEventListener("click", palindrome);
