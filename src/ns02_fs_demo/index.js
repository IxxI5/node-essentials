// index.js
// A simple example demonstrating how to use the fs module in Node.js to create a basic file upload and management system.

// Import the 'fs' and 'path' modules from Node.js
const fs = require("fs");
const path = require("path");

// Define the upload directory path ("nd02_fs_demo", "uploads") => "nd02_fs_demo/uploads"
const uploadDir = path.join(__dirname, "uploads"); // __dirname is the current directory of the index.js which is the "nd02_fs_demo"

// Ensure the uploads directory exists
// Check if the directory exists
if (!fs.existsSync(uploadDir)) {
  // If it does not exist, create it
  fs.mkdirSync(uploadDir, { recursive: true });
  console.log("Upload directory created.");
}

// Function to write a file to the upload directory
const writeFile = (fileName, content) => {
  // Create the full file path
  const filePath = path.join(uploadDir, fileName);
  // Write content to the file
  fs.writeFile(filePath, content, (err) => {
    if (err) {
      // Log an error if the operation fails
      console.error("Error writing file:", err);
    } else {
      // Confirm successful file write
      console.log(`File "${fileName}" written successfully.`);
    }
  });
};

// Function to read a file from the upload directory
const readFile = (fileName) => {
  // Create the full file path
  const filePath = path.join(uploadDir, fileName);
  // Read the file content
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // Log an error if the operation fails
      console.error("Error reading file:", err);
    } else {
      // Display the file content
      console.log(`Content of "${fileName}":\n${data}`);
    }
  });
};

// Function to list all files in the upload directory
const listFiles = () => {
  // Read the directory contents
  fs.readdir(uploadDir, (err, files) => {
    if (err) {
      // Log an error if the operation fails
      console.error("Error listing files:", err);
    } else {
      // List all files in the directory
      console.log("Files in upload directory:");
      files.forEach((file) => {
        console.log(file);
      });
    }
  });
};

// Example usage
// Write a file named 'example.txt' with some content
writeFile("example.txt", "This is an example file.");
// Read the content of 'example.txt'
readFile("example.txt");
// List all files in the 'uploads' directory
listFiles();

/** Output:
 *  Files in upload directory:
    example.txt
    File "example.txt" written successfully.
    Content of "example.txt":
    This is an example file.
 */

/*
Explanation of the Code:

1. Import Modules:
   - 'fs': Provides file system operations like reading and writing files.
   - 'path': Helps in constructing file paths.

2. Setup Directory:
   - 'uploadDir' specifies the path to the 'uploads' directory.
   - The code checks if this directory exists. If it does not, it is created using 'fs.mkdirSync'.

3. Write a File:
   - 'writeFile' function creates or overwrites a file with the specified name and content in the 'uploads' directory using 'fs.writeFile'.

4. Read a File:
   - 'readFile' function reads and logs the content of a file from the 'uploads' directory using 'fs.readFile'.

5. List Files:
   - 'listFiles' function lists and logs all files present in the 'uploads' directory using 'fs.readdir'.

6. Example Usage:
   - Demonstrates writing, reading, and listing files using the defined functions.
*/
