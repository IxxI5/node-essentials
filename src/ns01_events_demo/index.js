// index.js
// This is a small Node.js example demonstrating how to use the events module to build a basic event-driven chat application.

const Chat = require("./chat");

// Create an instance of Chat
const chat = new Chat();

// Listener for new messages
chat.on("newMessage", (from, to, message) => {
  console.log("[MESSAGE] " + from + " to " + to + ": " + message);
});

// Listener for status updates
chat.on("statusUpdate", (username, status) => {
  console.log("[STATUS] " + username + " is now " + status);
});

// Example usage
chat.addUser("Alice");
chat.addUser("Bob");
chat.sendMessage("Alice", "Bob", "Hi Bob!");
chat.removeUser("Bob");
chat.sendMessage("Alice", "Bob", "Are you there?");
chat.addUser("Bob");
chat.sendMessage("Alice", "Bob", "Welcome back!");

/** Output:
 *  [STATUS] Alice is now online
    [STATUS] Bob is now online
    [MESSAGE] Alice to Bob: Hi Bob!
    [STATUS] Bob is now offline
    User Bob is not online.
    [STATUS] Bob is now online
    [MESSAGE] Alice to Bob: Welcome back!
 */

/*
Explanation:

1. EventEmitter Class:
   - We create a Chat class that extends EventEmitter. This allows us to use event-driven functionality for notifications.
   - We define methods to add and remove users and send messages.

2. Event Handlers:
   - We use chat.on to listen for two types of events:
     - newMessage to handle incoming messages.
     - statusUpdate to handle user status changes (online/offline).

3. Example Usage:
   - We simulate adding users, sending messages, and updating statuses to demonstrate how the event-driven system works.
*/
