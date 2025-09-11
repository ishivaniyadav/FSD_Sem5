// server.js
const WebSocket = require("ws");

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New client connected successfully");

  // When a message is received
  ws.on("message", (message) => {
    console.log(`Received: ${message}`);

    // Broadcast to all clients
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(message.toString());
      }
    });
  });

  // On disconnect
  ws.on("close", () => {
    console.log("Client disconnected");
  });
});

//Display message that sever runs successfully
console.log("WebSocket server running on ws://localhost:8080");
