// Importing required modules and classes
import FileManager from "./FileManager";
import MergeSort from "./MergeSort";
import QuickSort from "./QuickSort";
import readline from 'readline';

// Defining the SortingApp class
class SortingApp {
  private rl: readline.Interface; // Interface for reading input from the command line
  private fileManager: FileManager; // Instance of the FileManager class

  constructor() {
    // Creating an instance of the readline interface
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    // Creating an instance of the FileManager class
    this.fileManager = new FileManager();
  }

  public async start(): Promise<void> {
    try {
      // Prompting the user for the algorithm choice
      const algorithm = await this.prompt('Which algorithm do you want to use? (QuickSort/MergeSort): ');

      // Validating the algorithm choice
      if (!['QuickSort', 'MergeSort'].includes(algorithm)) {
        throw new Error('Invalid algorithm choice.');
      }
      console.log(`Selected algorithm: ${algorithm}`);

      // Prompting the user for the sorting order choice
      const order = await this.prompt('Which order do you want? (asc/desc): ');
      if (!['asc', 'desc'].includes(order)) {
        throw new Error('Invalid order choice.');
      }
      console.log(`Selected order: ${order}`);

      const outputFile = await this.prompt('Enter the output file name: ');
      if (!outputFile.trim()) {
        throw new Error('Invalid output file name.');
      }
      console.log(`Output file name: ${outputFile}`);

      // Closing the readline interface
      this.rl.close();

      let numbersList: MergeSort | QuickSort | null = null;

      // Reading the input file based on the chosen algorithm
      if (algorithm === 'QuickSort') {
        numbersList = this.fileManager.readInputFile("QuickSort");
      } else if (algorithm === 'MergeSort') {
        numbersList = this.fileManager.readInputFile("MergeSort");
      }

      // Checking if there was an error reading the input file
      if (numbersList === null) {
        throw new Error('Error reading input file.');
      }

      // Sorting the numbersList based on the selected order
      if (order === 'asc') {
        numbersList.sort('asc');
      } else if (order === 'desc') {
        numbersList.sort('desc');
      }

      // Writing the sorted numbers to the output file
      const writeResult = this.fileManager.writeOutputFile(numbersList, outputFile);

      // Checking if there was an error writing the output file
      if (writeResult === null) {
        throw new Error('Error writing output file.');
      }

      console.log("Sorting completed successfully.");
    } catch (error) {
      console.error("An error occurred:", error);
      process.exit(1);
    }
  }

  // Helper function to prompt the user and return the answer as a Promise
  private prompt(question: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }
}

// Creating an instance of the SortingApp class and starting the sorting process
const app = new SortingApp();
app.start();