// index.js
// Demonstrating how to use the pipe method in Node.js for streaming large files (see largefile.txt) from a server to a client.
// This method is useful to efficiently handle large files without loading the entire file into memory.

const http = require("http");
const fs = require("fs");
const path = require("path");

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Check if the request URL is for a file
  if (req.url === "/largefile") {
    // Path to the large file
    const filePath = path.join(__dirname, "largefile.txt");

    // Set headers to indicate file type and disposition
    res.writeHead(200, {
      "Content-Type": "text/plain",
      "Content-Disposition": 'attachment; filename="largefile.txt"',
    });

    // Create a readable stream for the file
    const readStream = fs.createReadStream(filePath);

    // Pipe the read stream to the response
    readStream.pipe(res);

    // Handle errors
    readStream.on("error", (err) => {
      res.writeHead(500);
      res.end("Server Error");
    });
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

// Start the server on port 3000
server.listen(3000, () => {
  console.log("Server running at http://localhost:3000/");
});

/** Usage (open a new terminal in VS Code)
 *  curl "http://localhost:3000/largefile"
 */

/*
Explanation:

1. Readable Stream: The fs.createReadStream(filePath) creates a readable stream for the large file. This stream reads the file in chunks rather than loading it all into memory at once.

2. Pipe Method: readStream.pipe(res) pipes the readable stream directly into the response object. This means that the data from the file is sent to the client in chunks, optimizing memory usage and performance.

3. Error Handling: An error event listener is attached to the readable stream to handle any issues that may arise during file reading. If an error occurs, a 500 server error response is sent to the client.

4. Headers: Proper HTTP headers are set to indicate the content type and disposition, ensuring that the file is treated as an attachment and prompting a download on the client side.

5. Server Listening: The server listens on port 3000 and logs a message to the console when it is up and running.

This approach allows for efficient handling of large files, making it suitable for applications where memory usage is a concern and streaming large amounts of data is required.
*/
