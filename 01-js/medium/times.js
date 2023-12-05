/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
There is no automated test for this one, this is more for you to understand time goes up as computation goes up
*/

function calculateTime(n) {
    var newDate = new Date();
    let ff1 = newDate.getSeconds();
    var sum= 0;
    
    console.log(newDate);
    
    for(var i = 0 ; i <n ; i++){
        sum+= i;
    }
    var newDate1 = new Date();
    let ff2 = newDate1.getSeconds();
    
    console.log(newDate1);
    console.log(ff2 - ff1);
    


    

  //  console.log(newDate.getMilliseconds())
    //return 0.01;
}
calculateTime(1000000000);