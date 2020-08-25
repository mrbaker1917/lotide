# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install mrbaker1917/lotide`

**Require it:**

`const _ = require('mrbaker1917/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual()`: alternate test for asserting whether arrays are equal.
* `assertEqual()`: alternate test for asserting whether two primitive values are equal.
* `assertObjectsEqual()`: tests whether two objects are equal.
* `countLetters()`: counts the number of each letter in a string.
* `eqArrays()`: determines whether two arrays are equal; uses recursion.
* `eqObjects()`: determines whether two objects are equal; uses recursion.
* `findKey()`: returns the key of a property, whose value satisfies a callback function.
* `findKeyByValue()`: returns the key of a specified value.
* `flatten()`: takes an array of array and flattens it so all elements are in the same array; uses recursion to go as deep as needed.
* `head()`: returns the first element of an array.
* `letterPositions()`: returns an object with the letters and their indices from a string.
* `map()`: maps through an array, applying a callback function to each element.
* `middle()`: returns the middle element or elements of an array.
* `tail()`: returns an array of all elements but the first of the input array.
* `takeUntil()`: returns an array of the input array up to the element that satisfies the callback function.
* `without()`: returns an array with all the elements of a first array, except those in a second array.