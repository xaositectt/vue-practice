'use strict'

function reverse(arr) {
  if (typeof arr == 'object') {
    let reversed = [];
    while (arr.length > 0) {
      reversed.push(arr.pop());
    }
    console.log(reversed);
  } else {
    console.log('Not an array')
  }
};

reverse([1, 2, 3]);

function reverseRecursively(arr) {
  if (arr.length == 1) {
    return arr;
  } else {
    return arr[arr.length-1] + reverseRecursively(arr.slice(0, -1));
  }
};

console.log(reverseRecursively([1, 2, 3]));
