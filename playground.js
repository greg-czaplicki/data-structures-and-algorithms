// Bubble Sort
const bubbleSort = (nums) => {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length; i += 1) {
      if (nums[i] > nums[i + 1]) {
        [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
        swapped = true;
        // console.log(nums);
      }
    }
  } while (swapped);
};

// Insertion Sort
const insertionSort = (nums) => {
  for (let i = 1; i <= nums.length; i += 1) {
    for (let j = 0; j < i; j += 1) {
      if (nums[i] < nums[j]) {
        [nums[i], nums[j]] = [nums[j], nums[i]];
      }
    }
  }
  return nums;
};

// Merge Sort
const stitch = (left, right) => {
  const results = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }

  while (left.length) {
    results.push(left.shift());
  }
  while (right.length) {
    results.push(right.shift());
  }

  return results;
};

const mergeSort = (nums) => {
  if (nums.length < 2) return nums;
  const numLength = nums.length;
  const middle = Math.floor(numLength / 2);
  const left = nums.slice(0, middle);
  const right = nums.slice(middle, numLength);

  return stitch(mergeSort(left), mergeSort(right));
};

// Quick Sort
const quickSort = (nums) => {
  if (nums.length <= 1) return nums;

  const pivot = nums[nums.length - 1];
  const left = [];
  const right = [];

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }

  return quickSort(left).concat(pivot, quickSort(right));
};

const myNums = [5, 23, 2, 9, 44, 7, 6, 19];

console.log(quickSort(myNums));
