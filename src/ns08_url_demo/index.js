// index.js

const { URL, URLSearchParams } = require("url");

// Define a different URL
const myUrl = new URL(
  "https://www.example.org/products/item?id=456&category=books"
);

// Display the serialized URL
console.log("Serialized URL:");
console.log(myUrl.href); // https://www.example.org/products/item?id=456&category=books
console.log(myUrl.toString()); // https://www.example.org/products/item?id=456&category=books

// Display the host (root domain)
console.log("\nHost:");
console.log(myUrl.host); // www.example.org

// Display the hostname (does not include port)
console.log("\nHostname:");
console.log(myUrl.hostname); // www.example.org

// Display the pathname
console.log("\nPathname:");
console.log(myUrl.pathname); // /products/item

// Display the serialized query string
console.log("\nSerialized Query:");
console.log(myUrl.search); // ?id=456&category=books

// Display the URLSearchParams object
console.log("\nParams Object:");
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '456', 'category' => 'books' }

// Add a new parameter to the query string
myUrl.searchParams.append("sort", "price");
console.log("\nUpdated Params Object:");
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '456', 'category' => 'books', 'sort' => 'price' }

// Loop through all parameters and log them
console.log("\nParams Iteration:");
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));

// Modify the pathname and update the URL
myUrl.pathname = "/products/new-item";
console.log("\nModified URL with New Pathname:");
console.log(myUrl.href); // https://www.example.org/products/new-item?id=456&category=books&sort=price

// Remove a parameter
myUrl.searchParams.delete("category");
console.log("\nParams After Removal:");
console.log(myUrl.searchParams); // URLSearchParams { 'id' => '456', 'sort' => 'price' }

/** Output:
 *  Host:
    www.example.org

    Hostname:
    www.example.org

    Pathname:
    /products/item

    Serialized Query:
    ?id=456&category=books

    Params Object:
    URLSearchParams { 'id' => '456', 'category' => 'books' }

    Updated Params Object:
    URLSearchParams { 'id' => '456', 'category' => 'books', 'sort' => 'price' }

    Params Iteration:
    id: 456
    category: books
    sort: price

    Modified URL with New Pathname:
    https://www.example.org/products/new-item?id=456&category=books&sort=price

    Params After Removal:
    URLSearchParams { 'id' => '456', 'sort' => 'price' }
 */

/*
Explanation:

1. Define a Different URL:
   - const myUrl = new URL("https://www.example.org/products/item?id=456&category=books");
   - This initializes a URL object with a new URL.

2. Display the Serialized URL:
   - console.log(myUrl.href); and console.log(myUrl.toString());
   - Outputs the full URL as a string.

3. Host and Hostname:
   - console.log(myUrl.host); shows the domain with potential port (not applicable here).
   - console.log(myUrl.hostname); shows just the domain.

4. Pathname:
   - console.log(myUrl.pathname); returns the path part of the URL.

5. Serialized Query String:
   - console.log(myUrl.search); returns the query string starting with ?.

6. URLSearchParams Object:
   - console.log(myUrl.searchParams); shows the query parameters in a URLSearchParams object.

7. Add and Modify Parameters:
   - myUrl.searchParams.append("sort", "price"); adds a new parameter to the query string.
   - console.log(myUrl.searchParams); displays the updated parameters.
   - myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`)); iterates through all query parameters.

8. Modify Pathname and Update URL:
   - myUrl.pathname = '/products/new-item'; updates the pathname.
   - console.log(myUrl.href); shows the URL with the new pathname.

9. Remove a Parameter:
   - myUrl.searchParams.delete("category"); removes the specified parameter.
   - console.log(myUrl.searchParams); shows the remaining parameters after deletion.

This example illustrates how to handle various aspects of URL manipulation with a different URL.
*/
