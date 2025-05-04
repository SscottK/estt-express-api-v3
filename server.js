require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
let server;

const { PrismaClient } = require("./generated/prisma");
const prisma = new PrismaClient();
app.use(express.json());
const userCtrl = require('./controllers/user');


app.use('/users', userCtrl)


app.listen(port, ()=> {
    console.log(`Server listening at http://localhost:${port}`)
})

process.on("SIGINT", async () => {
    console.log("SIGINT received. Shutting down gracefully.");
    await prisma.$disconnect();
    // Add a check to ensure server is defined before closing
    if (server) {
      server.close(() => {
        console.log("HTTP server closed.");
        process.exit(0); // Exit after server closes
      });
    } else {
      process.exit(0); // Exit immediately if server wasn't initialized
    }
  });
  
process.on("SIGTERM", async () => {
    console.log("SIGTERM received. Shutting down gracefully.");
    await prisma.$disconnect();
    // Add a check to ensure server is defined before closing
    if (server) {
      server.close(() => {
        console.log("HTTP server closed.");
        process.exit(0); // Exit after server closes
      });
    } else {
      process.exit(0); // Exit immediately if server wasn't initialized
    }
  })