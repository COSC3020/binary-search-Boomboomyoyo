const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

const testSearch =
    // Presumably creates an array of natural numbers, but I don't know how that is specified.
    jsc.forall("array nat", function(arr) {
        //Will test for arrays of length 1 or larger
        if(arr.length > 0) {
            //This will sort an array in ascending order, and is stable (maintains order of elements in case of duplicates)
            //Seems to function as I expect, so the issue is with the test condition or my function
            arr.sort(function(a, b) { return a - b; });
            // This compares the result of the test array to 0. This might be what the issue is?
            // No, not the issue, that is comparing the index which is returned to the asked after index
            // Test condition should be fine then? I'm searching the array for the first element, which
            // should always return 0 if my function is working correctly
            // The problem comes with arrays with multiple of the same value, so I need to test for one
            // of those values
            
            // My fix for the issue with the test code is to create a set of all correct indexes for a
            // searched element.
            correctIndexes = new Set([])
            for(i = 0; arr[i] == arr[0]; i++){
                correctIndexes.add(i)
            }
            return correctIndexes.has(binarySearch(arr, arr[0]));
        //Empty arrays will return false, because there is no element within the array. So, this else
        //checks if that is the case for empty arrays
        } else {
            // "foo" is apparently a placeholder term for programming template, meaning that this
            // was meant as a placeholder. Any value would accomplish the same thing
            return binarySearch(arr, "foo") === -1;
        }
    });

jsc.assert(testSearch);

/* References
To understand the array sort method
https://www.w3schools.com/js/js_array_sort.asp

To understand what the === operator is.
The difference between == and === is interesting. Says a lot about JavaScript types.
Should be different than what I've worked with, so I'll have to be careful
https://www.w3schools.com/js/js_comparisons.asp

Tried to read through the documentation, but it is using terms unfamiliar to me.
https://github.com/jsverify/jsverify

To figure out what the "foo" could mean from the original code
https://stackoverflow.com/questions/10061234/what-does-foo-stand-for

When I figured out that a error was being thrown, to narrow down the problem.
Turns out I was doing something dumb. Called arr when I meant list in the other file.
Need to remember to pay attention to that
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
*/
