var fruit1 = "banana";
var fruit2 = "pineapple";
var fruit3 = "apple";
var fruit4 = "peach";
var fruit5 = "orange";
// Array helps to deal with collection of informations, it is a list of variables
// A collection of same type of variables
var fruitArray = ["banana", "pineapple", "apple", "peach", "orange"];

// Writing order is important
// console.log(fruitArray[1]);

// how to change array with JS
fruitArray[1] = "tomato";
// console.log(fruitArray[1]);

// A mix of different variables
var mixedArray = [42, "pineapple", true, [3, 6, "nine"], "orange"];

// retrieve one value:
// console.log(fruitArray[1]);

// retrieve an array inside a array:
// console.log(mixedArray[3][0]);

// retrieve the length of the array:
// console.log(fruitArray.length);


// The 'for' loop
for(var fruit of fruitArray){
    // using 'if' inside a 'for'
    if(fruit === "tomato"){
        console.log("what's a tomato doing here");
    } else {
        console.log(fruit);
    }
}

// () contain the condition
// For (x of y)