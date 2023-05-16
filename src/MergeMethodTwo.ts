

/**
 * Represents a list of numbers.
 */
class NumbersList {
    private list: number[]; // Private property to store the list of numbers

    /**
     * Creates a new instance of NumbersList.
     * @param list - An array of numbers to initialize the list.
     */
    constructor(list: number[]) {
        this.list = list; // Assigns the provided list of numbers to the private property
    }

    /**
     * Returns the current list of numbers.
     * @returns An array of numbers.
     */
    public getList(): number[] {
        return this.list; // Returns the private list of numbers
    }

    /**
     * Sets the list of numbers to a new array.
     * @param list - An array of numbers.
     */
    public setList(list: number[]): void {
        this.list = list; // Updates the private list of numbers with the provided array
    }

    /**
     * Sorts the list of numbers in ascending order using the merge sort algorithm.
     */
    public sort(): void {
        this.list = this.mergeSort(this.list); // Sorts the list using the merge sort algorithm
    }

    /**
     * Recursively performs the merge sort algorithm on the given list of numbers.
     * @param list - An array of numbers to be sorted.
     * @returns A new array containing the sorted numbers.
     */
    private mergeSort(list: number[]): number[] {


        if (list.length <= 1) {
            return list; // Base case: if the list has 0 or 1 element, it is already sorted
        }

        const middleIndex = Math.floor(list.length / 2); // Finds the middle index of the list
        const leftList = list.slice(0, middleIndex); // Splits the list into two halves: leftList 
        const rightList = list.slice(middleIndex); //rightList

        return this.merge(this.mergeSort(leftList), this.mergeSort(rightList)); // Recursively merges and sorts the left and right halves
    }

    /**
     * Merges two sorted arrays into a new sorted array.
     * @param leftList - An array of numbers sorted in ascending order.
     * @param rightList - An array of numbers sorted in ascending order.
     * @returns A new array containing the merged and sorted numbers.
     */
    private merge(leftList: number[], rightList: number[]): number[] {
        let result: number[] = []; // Array to store the merged and sorted numbers
        while (leftList.length && rightList.length) {
            // Continue looping until either leftList or rightList becomes empty
            if (leftList[0] >= rightList[0]) {
                result.push(leftList.shift()!); // Removes and appends the first element of leftList to the result array
            } else {
                result.push(rightList.shift()!); // Removes and appends the first element of rightList to the result array
            }
        }

        while (leftList.length) {
            // Appends any remaining elements in leftList to the result array
            result.push(leftList.shift()!);
        }

        while (rightList.length) {
            // Appends any remaining elements in rightList to the result array
            result.push(rightList.shift()!);
        }

        return result; // Returns the merged and sorted array
    }
}

export default NumbersList; // Exports the NumbersList class as the default export