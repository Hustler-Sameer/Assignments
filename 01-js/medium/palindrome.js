/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

// function isPalindrome(str) {
//   let strNew = str.toLowerCase();
  
 
// let i = 0;
// let j = strNew.length -1;
//  while(i <= j){
//   if(strNew[i] != strNew[j]){
//     return false;
//   }
//   i++;
//   j--;

//  }
//  return true;



  
// }



const removeSpecial = (stringyy) => {
  let newStringArr = [];

  stringyy.toLowerCase().split('').forEach(element => {
    if(element.match('^[a-zA-Z]+$') && element){
      newStringArr.push(element);
    }
  });

  return newStringArr.join('')
} 

const isPalindrome = (str) => {
  let lString = removeSpecial(str);
 return lString
  .split('').reverse().join('') == lString.toLowerCase()
}



module.exports = isPalindrome;
