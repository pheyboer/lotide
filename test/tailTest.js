const assertEqual = require("../assertEqual");
const tail = require("../tail");


const words = ["Yo Yo", "Lighthouse", "Labs"];
assertEqual(words.length, 3);
//test with multiple elements

assertEqual(tail(words).length, 2); //tail function removes first element
assertEqual(tail(words)[0], "Lighthouse"); //check the first and second elements
assertEqual(tail(words)[1], "Labs");

const singleElementArray = ["Only One"];
//test with 1 element
assertEqual(singleElementArray.length, 1);
assertEqual(tail(singleElementArray).length, 0);

const emptyArray = [];
//test with empty array
assertEqual(emptyArray.length, 0);
assertEqual(tail(emptyArray).length, 0);

//removed intermediate variables