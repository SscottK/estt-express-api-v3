const express = require("express");
const router = express.Router();
const bcrypt =  require("bcryptjs");
const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/verify-token");

const {
    verifyDjangoPassword,
    verifyBcryptPassword,
    hashPassword,
  } = require("../utils/passwordUtils.js");

const { 
    findUserByUsername,
    updtaePasswordHash 
} = require("../services/authServices.js")

router.get("/:userid", async (req, res) => {
    console.log("Recieved request for /users");
    
    try {
        const user = await prisma.auth_user.findUnique({
            where: {
                id: 1
            }
        })
        
        console.log(`Found ${user.username}`);
        res.status(200).json({
            "user": user.username,
            "password": user.password
        });

    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Failed to retrive users from database"})
    }
});


router.post("/signin", async (req, res) => {
    const { username, password } = req.body;
    
    try {
        const user =  await findUserByUsername(username)
        //finish login router
        //check against django password verifier
        if (!user || !user.password) {
            return res.status(401).json({ message: "Invalid credentials" })
        }
        let isValid = false;
        let needsRehash = false;
        const storedHash = user.password;
        if (storedHash.startsWith("pbkdf2_sha256$")) {
            isValid = await verifyDjangoPassword(password, storedHash);
            if  (isValid) {
                needsRehash = true;
            }
        } else if (
            storedHash.startsWith("$2a$") ||
            storedHash.startsWith("$2b$") ||
            storedHash.startsWith("$2y$")
        ) {
            isValid = await verifyBcryptPassword(password, storedHash);
        } else {
            console.error("Unknown password has format for user:", username);
            isValid = false;
        }

        if (!isValid) {
            return res.status(401).json({ message: "Invalid credentials"});
        }

        // if (needsRehash) {
        //     try {
        //         console.log(`Re-hashing password to bcrypt for user: ${username}`);
        //         const newHash = await hashPassword(password);
        //         await updtaePasswordHash(username, newHash)
        //     } catch (error) {
        //         console.error(`Failed to re-hash password for user ${username}:`, rehashError)
        //     }
        // }
        if (isValid) {
            const token = jwt.sign(
                { username: user.username, id: user.id },
                process.env.JWT_SECRET
              );
            console.log(`User ${username} logged in successfully.`)
            res.json({ message: "Login successful", 
                user: user,
                token: token
            })
            
        }
            
         
    } catch (error) {
        console.error("Login route error:", error);
        res.status(500).json({ message: "Internal server error" }); 
    }
})

module.exports = router;
