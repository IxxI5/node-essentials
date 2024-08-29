// index.js
// This example demonstrates how to use the path module in Node.js for constructing file paths dynamically.
// It focuses on a file management system where you need to ensure that paths are constructed correctly
// regardless of the operating system.

const path = require("path");
const fs = require("fs");

// Define the base directory for our file management system
const baseDir = __dirname; // Current directory of the script

// Function to get the full path for a file within a user's directory
function getFilePath(userName, fileName) {
  // Construct user directory path
  const userDir = path.join(baseDir, "users", userName);

  // Ensure the users directory exists
  if (!fs.existsSync(userDir)) {
    fs.mkdirSync(userDir, { recursive: true });
  }

  // Construct the full file path
  const filePath = path.join(userDir, fileName);
  return filePath;
}

// Example usage
const userName = "john_doe";
const fileName = "document.txt";
const fullPath = getFilePath(userName, fileName);

console.log(`Full file path: ${fullPath}`);

// Write a message to the file (for demonstration purposes)
fs.writeFileSync(fullPath, "Hello, world!");

// Read the message back from the file (for verification)
const message = fs.readFileSync(fullPath, "utf8");
console.log(`Message from file: ${message}`);

/** Output:
 *  Full file path: D:\..\src\ns05_path_demo\users\john_doe\document.txt
    Message from file: Hello, world!
 */

/*
Explanation:

1. Import the "path" and "fs" Modules: We start by importing the required modules: "path" for path manipulation and "fs" for file system operations.

2. Define Base Directory: "baseDir" is set to the directory where the script is running, which serves as the root for our file paths.

3. Function to Get Full Path:
   - "getFilePath" constructs a file path based on a user's name and a file name.
   - "path.join" is used to create paths by joining segments, ensuring compatibility with different operating systems (e.g., using \ on Windows and / on Unix-based systems).
   - We ensure that the user's directory exists, creating it if necessary with "fs.mkdirSync".

4. Usage Example:
   - The function "getFilePath" is used to generate a file path for a user named "john_doe" and a file named "document.txt".
   - We then write a message to this file and read it back to verify the operation.

The use of "path.join" ensures that the path is correctly formed regardless of the underlying operating system, avoiding issues with hardcoded path separators.
*/
