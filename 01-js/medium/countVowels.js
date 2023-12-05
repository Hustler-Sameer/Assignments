/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
  
   var counter = 0;
       newStr = str.toLowerCase();
  
    for(var i = 0 ; i<newStr.length; i++){
        if(newStr[i] === 'a' || newStr[i] === 'e' || newStr[i] ==='i' || newStr[i] === 'o' || newStr[i] ==='u'){
          counter++;

        }

    }
    return counter;
   
   
}

module.exports = countVowels;