# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @pheyboer/lotide`

**Require it:**

`const _ = require('@pheyboer/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `assertArraysEqual:`: Function to compare if two arrays are equal
- `assertEqual`: Function to compare if two values are equal
- `assertObjectsEqual`: Function to compare if two objects are equal
- `countLetters`: Function to count each of the letters in a string
- `countOnly`: Function to count how many times specific items appear in an array
- `eqArrays`: Function to check if two arrays are equal
- `eqObjects`: Function to check if two objects are equal
- `findKey`: Function to search through keys of an object and return the first key defined by a callback function
- `findKeyByValue`: Function  to search for the first key in an Object by a given value
- `flatten`: Function to flatten a nested array into single level array
- `head`: Function that returns first element of an array
- `letterPositions`: Function to return an object that maps each letter of a string to an array, identifying its indicies
- `map`: Fucntion to return an array based on results of the callback function
- `middle`: Function to find middle element of an array
- `tail`: Function to return new array containing all elements except first one of inital array
- `takeUntil`: Function to create new array as a slice of original array
- `without`: Function to create a new array, removing specific elements