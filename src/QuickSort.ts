
class QuickSort {
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
     * Sorts the list of numbers in ascending or descending order using the quick sort algorithm.
     */
    public sort(order: string): void {
        this.quickSort(0, this.list.length - 1, order); // Sorts the list using the quick sort algorithm
    }
    /**
     * Recursively performs the quick sort algorithm on the given list of numbers.
     * @param low - The starting index of the subarray to be sorted.
     * @param high - The ending index of the subarray to be sorted.
     * @param order - Order of list.
     */
    private quickSort(low: number, high: number, order: string): void {
        if (low < high) {
            const pivotIndex = this.partition(low, high, order); // Finds the pivot index by partitioning the subarray
            this.quickSort(low, pivotIndex - 1, order); // Recursively sorts the left partition
            this.quickSort(pivotIndex + 1, high, order); // Recursively sorts the right partition
        }
    }

    /**
     * Partitions the subarray around a pivot element and returns its final index.
     * @param low - The starting index of the subarray to be partitioned.
     * @param high - The ending index of the subarray to be partitioned.
     * @param order - Order of list.
     * @returns The final index of the pivot element.
     */
    private partition(low: number, high: number, order: string): number {
        const pivot = this.list[high]; // Chooses the pivot element (last element of the subarray)
        let i = low - 1; // Index of the smaller element
        const isAscending = order === "asc"; // Given order by user

        for (let j = low; j < high; j++) {
            const isLessOrEqual = isAscending ? this.list[j] <= pivot : this.list[j] >= pivot;
            if (isLessOrEqual) {
                i++;
                this.swap(i, j); // Swaps the current element with the element at the smaller index
            }
        }
        this.swap(i + 1, high); // Swaps the pivot element with the element at the next index
        return i + 1; // Returns the final index of the pivot element
    }

    /**
     * Swaps two elements in the list.
     * @param i - The index of the first element.
     * @param j - The index of the second element.
     */
    private swap(i: number, j: number): void {
        const temp = this.list[i];      // Store the value of the element at index i in a temporary variable
        this.list[i] = this.list[j];    // Assign the value of the element at index j to the element at index i
        this.list[j] = temp;            // Assign the value of the temporary variable to the element at index j
    }
}

export default QuickSort; // Exports the NumbersList class as the default export
