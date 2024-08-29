// server.js
// This example demonstrates the essential features of the http module in Node.js for creating a RESTful API.
// It shows how to handle HTTP GET requests, parse query parameters, and respond with JSON data. In a real-world application,
// you’d likely integrate with a weather API service to fetch live data instead of using static data (see weatherData).

// Import the required modules
const http = require("http"); // The 'http' module is used to create an HTTP server
const url = require("url"); // The 'url' module is used to parse and handle URL data

const port = 3000; // Define the port number for the server to listen on

// Example weather data (static for simplicity)
const weatherData = {
  "New York": { temperature: "22°C", condition: "Sunny" },
  London: { temperature: "18°C", condition: "Cloudy" },
  Tokyo: { temperature: "28°C", condition: "Rainy" },
};

// Function to handle incoming HTTP requests
const requestHandler = (req, res) => {
  // Parse the URL to get the path and query parameters
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname; // Extract the path from the URL
  const query = parsedUrl.query; // Extract query parameters from the URL

  // Check if the request is for the /weather endpoint and has a city query parameter
  if (pathname === "/weather" && query.city) {
    const city = query.city; // Get the city parameter from the query
    const weather = weatherData[city]; // Lookup the weather data for the city

    // If the city exists in the weatherData
    if (weather) {
      // Respond with a 200 OK status and the weather data in JSON format
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ city, ...weather }));
    } else {
      // If the city is not found, respond with a 404 Not Found status and an error message
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "City not found" }));
    }
  } else {
    // If the request path is not /weather or city parameter is missing, respond with a 404 Not Found status
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Not found" }));
  }
};

// Create an HTTP server and pass the requestHandler function to handle incoming requests
const server = http.createServer(requestHandler);

// Start the server and listen on the specified port
server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`); // Log a message indicating the server is running
});

/*
Explanation:

1. Import Modules:
   - http is used to create the server.
   - url is used to parse incoming requests.

2. Weather Data:
   - weatherData is a static object representing weather information for different cities.

3. Request Handler:
   - Parses the URL to check if the request is for /weather and has a city query parameter.
   - Checks if the city exists in the weatherData. If so, it responds with the weather data in JSON format.
   - If the city is not found, or the request path is incorrect, it responds with an error message.

4. Server Setup:
   - Creates an HTTP server using http.createServer() with the request handler.
   - Listens on port 3000 and logs a message when the server is running.

To start the server, run the following command in your terminal:
node server.js

You can test the API using a tool like curl, Postman, or your browser. For example, you can use curl to get the weather data for New York:
curl "http://localhost:3000/weather?city=New%20York"

You should get a response like:
{
   "city": "New York",
   "temperature": "22°C",
   "condition": "Sunny"
}
*/
