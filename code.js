function binarySearch(list, element) {
    // Define ends of search area of array
    let left = 0;
    let right = list.length - 1;
    // With for loop, adjust the unsearched part of the array. Move the left value or 
    //right value depending on the desired element's relation to the middle of the unsearched array
    while(left < right) {
        // Hopefully this works in JavaScript like it does in other languages where the decimal
        // just gets dropped, essentially flooring the value
        var mid = (left+right)/2;

        if(element == list[mid]) {
            return mid;
        }
        if(element < list[mid])
            right = mid;
        else
            left = mid;
    }

    return -1;
}

console.log(binarySearch([1,2,3,4,5],6));

/*
References:

Originally wanted to use recursion, realized wouldn't worked with test code
Used to find an example for for loop syntax in JavaScript, found while loop syntax and structure.
My original attempts didn't work super well and I found myself mirroring this example more and more,
now it is basically identical, with the exception of the loop termination condition. If I compared
less than or equal to, would have an infinite loop
https://stackoverflow.com/questions/69529162/binary-search-using-for-loop-in-javascript

Early version of loop had break statement, found syntax here:
https://www.w3schools.com/jsref/jsref_break.asp
*/