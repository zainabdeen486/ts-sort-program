// FileManager.ts

import fs from "fs"; // Import the fs module to perform file system operations
import MergeSort from "./MergeSort"; // Import the NumbersList class from the NumberList module
import path from "path"; // Import the path module to work with file paths
import QuickSort from "./QuickSort";

class FileManager {
    private inputFileName: string; // Private property to store the input file name
    private delimiter: string; // Private property to store the delimiter used in the input file
    /**
     * Creates a new instance of the FileManager class.
     * @param inputFileName - The name of the input file (default: "input.txt").
     * @param delimiter - The delimiter used in the input file (default: ", ").
     */
    constructor(
        inputFileName = "input.txt",
        delimiter = ", ",
    ) {
        this.inputFileName = inputFileName; // Assigns the provided input file name to the private property
        this.delimiter = delimiter; // Assigns the provided delimiter to the private property
    }

    // Test

    // Function to generate a random number between min and max (inclusive)
    public getRandomNumber(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to generate a large list of random numbers
    public generateLargeList(size: number) {
        const list = [];
        for (let i = 0; i < size; i++) {
            list.push(this.getRandomNumber(1, size));
        }
        return list;
    }



    //Test

    /**
     * Reads the input file and returns a NumbersList object.
     * @returns A NumbersList object representing the numbers read from the input file.
     */
    public readInputFile(algo: string): any {
        try {
            const data = fs.readFileSync(
                path.join(__dirname, this.inputFileName),
                "utf-8"
            ); // Reads the contents of the input file
            const list = data
                .split(this.delimiter) // Splits the data into an array of strings using the delimiter
                .map((num) => parseInt(num.trim())); // Converts each string element to a number

            // const largeListSize = 1000000; // Size of the large list
            // const largeList = this.generateLargeList(largeListSize); // Generate a large list of random numbers
            // return new NumbersList(largeList); // Returns a new NumbersList object initialized with the parsed numbers
            return algo == "QuickSort" ? new QuickSort(list) : new MergeSort(list)  // Returns a new NumbersList object initialized with the parsed numbers

        } catch (error: any) {
            console.error(`Error reading input file: ${error.message} `); // Displays an error message if there was an error reading the file
            process.exit(1); // Exits the program with a non-zero exit code
        }
    }

    /**
     * Writes the sorted numbers from a NumbersList object to the output file.
     * @param numbersList - A NumbersList object containing the sorted numbers.
     */
    public writeOutputFile(numbersList: any, outputFile: string): void {
        try {
            const data = numbersList.getList().join(this.delimiter); // Joins the sorted numbers using the delimiter
            fs.writeFileSync(
                path.join(__dirname, outputFile),
                data
            ); // Writes the data to the output file
            console.log(`Sorted numbers written to ${outputFile} `); // Displays a success message after writing the file
        } catch (error: any) {
            console.error(`Error writing output file: ${error.message} `); // Displays an error message if there was an error writing the file
            process.exit(1); // Exits the program with a non-zero exit code
        }
    }
}

export default FileManager; // Exports the FileManager class as the default export
