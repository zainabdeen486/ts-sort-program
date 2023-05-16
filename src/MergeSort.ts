/**
 * Represents a list of numbers.
 */
class MergeSort {
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
     * Sorts the list of numbers in descending or ascending order using the merge sort algorithm.
     */
    public sort(order: string): void {
        this.mergeSort(0, this.list.length - 1, order); // Sorts the list using the merge sort algorithm

    }

    /**
     * Recursively performs the merge sort algorithm on the given list of numbers.
     * @param low - The starting index of the sublist to be sorted.
     * @param high - The ending index of the sublist to be sorted.
     * @param order - Order of list.
     */
    private mergeSort(low: number, high: number, order: string): void {
        if (low < high) {
            const middleIndex = Math.floor((low + high) / 2); // Find the middle index
            this.mergeSort(low, middleIndex, order); // Recursively sort the left sublist
            this.mergeSort(middleIndex + 1, high, order); // Recursively sort the right sublist
            this.merge(low, middleIndex, high, order); // Merge the sorted sublists
        }
    }

    /**
     * Merges two sorted sublists into the original list.
     * @param low - The starting index of the first sublist.
     * @param middle - The ending index of the first sublist.
     * @param high - The ending index of the second sublist.
     * @param order - Order of list.
     */
    private merge(low: number, middle: number, high: number, order: string): void {
        const leftLength = middle - low + 1; // Left list length
        const rightLength = high - middle; // Right list length

        const leftList = new Array<number>(leftLength); // Left list empty array
        const rightList = new Array<number>(rightLength); // Right list empty array
        //[87, 97, 102, 13, 56, 2, 24]
        // Copy data to temporary arrays

        //Left list
        for (let i = 0; i < leftLength; i++) {
            leftList[i] = this.list[low + i];
        }

        //Right list
        for (let j = 0; j < rightLength; j++) {
            rightList[j] = this.list[middle + 1 + j];
        }

        let i = 0; // Initial index of the left sublist
        let j = 0; // Initial index of the right sublist
        let k = low; // Initial index of the merged sublist
        const isAscending = order === "asc";

        // Merge the two sublists
        while (i < leftLength && j < rightLength) {
            if ((isAscending && leftList[i] <= rightList[j]) || (!isAscending && leftList[i] >= rightList[j])) {
                this.list[k] = leftList[i];
                i++;
            } else {
                this.list[k] = rightList[j];
                j++;
            }
            k++;
        }
        // Copy the remaining elements of the left sublist, if any
        while (i < leftLength) {
            this.list[k] = leftList[i];
            i++;
            k++;
        }

        // Copy the remaining elements of the right sublist, if any
        while (j < rightLength) {
            this.list[k] = rightList[j];
            j++;
            k++;
        }
    }
}

export default MergeSort; // Exports the NumbersList class as the default export
