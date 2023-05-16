import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";


const size = 1000000;
const min = 1;
const max = 1000000;
const allowDuplicates = true;

// Generate random numbers for testing
// function generateRandomNumbers(length: number): number[] {
//     const numbers: number[] = [];
//     for (let i = 0; i < length; i++) {
//         numbers.push(Math.floor(Math.random() * length));
//     }
//     return numbers;
// }

// Generate a sorted array in descending order
function generateSortedArray(length: number): number[] {
    const numbers: number[] = [];
    for (let i = length; i > 0; i--) {
      numbers.push(i);
    }
    return numbers;
  }

// function generateRandomArray(size: number, min: number, max: number, allowDuplicates: boolean): number[] {
//     const array: number[] = [];

//     for (let i = 0; i < size; i++) {
//         let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);

//         if (!allowDuplicates && array.includes(randomNumber)) {
//             // Skip duplicates if duplicates are not allowed
//             i--;
//             continue;
//         }

//         array.push(randomNumber);
//     }

//     return array;
// }

// Measure the execution time of a function
function measureExecutionTime(callback: () => void): number {
    const startTime = process.hrtime.bigint();
    callback();
    const endTime = process.hrtime.bigint();
    const executionTime = Number(endTime - startTime) / 1e6; // Convert to milliseconds
    return executionTime;
}

// Sort a numbers list with 1 million random numbers
const mergeSort = new MergeSort(generateSortedArray(1000000));

// Sort a numbers list with 1 million random numbers using quicksort
const quickSort = new QuickSort(generateSortedArray(1000000));

// Perform the sorting and measure the execution time
const executionTime = measureExecutionTime(() => {
    mergeSort.sort("desc");
});

console.log(`Sorting completed in ${executionTime.toFixed(2)} milliseconds.`);
