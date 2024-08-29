// chat.js

const EventEmitter = require("events");

// Define a Chat class that extends EventEmitter
class Chat extends EventEmitter {
  constructor() {
    super();
    // Store users and their status
    this.users = {};
  }

  // Method to add a user
  addUser(username) {
    if (!this.users[username]) {
      this.users[username] = "online";
      this.emit("statusUpdate", username, "online");
    } else {
      console.log(username + " is already online.");
    }
  }

  // Method to remove a user
  removeUser(username) {
    if (this.users[username]) {
      delete this.users[username];
      this.emit("statusUpdate", username, "offline");
    } else {
      console.log(username + " is not online.");
    }
  }

  // Method to send a message
  sendMessage(from, to, message) {
    if (this.users[to]) {
      this.emit("newMessage", from, to, message);
    } else {
      console.log("User " + to + " is not online.");
    }
  }
}

// Export the class so it can be used in other files
module.exports = Chat;

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
