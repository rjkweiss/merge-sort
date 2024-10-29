// Merge Sort out-of-place
// Do not modify the original array
function mergeSort(arr) {

  // Check if the input is length 1 or less
    // If so, it's already sorted: return
    if (arr.length <= 1) return arr;

  // Divide the array in half
  let midIndex = Math.floor(arr.length / 2);

  // Recursively sort the left half
  let left = mergeSort(arr.slice(0, midIndex));

  // Recursively sort the right half
  let right = mergeSort(arr.slice(midIndex));

  // Merge the halves together and return
  return merge(left, right);

}


// Takes in two sorted arrays and returns them merged into one
function merge(arrA, arrB) {

  // Create an empty return array
  let merged = [];

  // Point to the first value of each array
  let ptr1 = 0, ptr2 = 0;

  // While there are still values in each array...
  while (ptr1 < arrA.length && ptr2 < arrB.length) {
    // Compare the first values of each array
    // Add the smaller value to the return array
    if (arrA[ptr1] < arrB[ptr2]) {
      merged.push(arrA[ptr1]);
      // Move the pointer to the next value in that array
      ptr1 += 1;
    } else {
      merged.push(arrB[ptr2]);
      // Move the pointer to the next value in that array
      ptr2 += 1;
    }
  }

  // check if there are any left overs for either of the arrays
  while (ptr1 < arrA.length || ptr2 < arrB.length) {
    if (arrA[ptr1] === undefined) {
      // then we have ptr2, so add to merged and increnent
      merged.push(arrB[ptr2]);
      ptr2 += 1;
    } else {
      // we have a valid ptr1
      merged.push(arrA[ptr1]);
      ptr1 += 1;
    }
  }

  // Return the return array
  return merged;

}

module.exports = [merge, mergeSort];
