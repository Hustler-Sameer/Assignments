/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  console.log('code is runing');
  
 let strSorted = str1.toLowerCase().split("").sort().join("");
 let strStorted2 = str2.toLowerCase().split("").sort().join("");
  for(let i =0 ; i < str1.length; i++){
    if(strSorted[i] != strStorted2[i]){
      return false;
    } 
  }
  return true;

}

module.exports = isAnagram;
