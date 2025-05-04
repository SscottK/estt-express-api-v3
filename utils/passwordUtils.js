const crypto = require("crypto");
const { Buffer } = require("buffer");
const bcrypt = require("bcryptjs");
const { console } = require("inspector");
const { resolve } = require("path");

/**
 * Verifies a password against a Django PBKDF2_SHA256 hash.
 * @param {string} password - The plain text password to verify.
 * @param {string} djangoHash - The hash string stored by Django.
 * @returns {Promise<boolean>} - True if the password matches, false otherwise.
 */

const verifyDjangoPassword = async (password, djangoHash) => {
    const parts = djangoHash.split("$");
    console.log("split")
    if (parts.length !== 4) {
        console.error("Invalid Django hash format:", djangoHash);
        return false;
    }
    const [algorithm, iterationsStr, salt, storedHashBase64] = parts;
    if (algorithm !== "pbkdf2_sha256") {
        console.error("Hash is not pbkdf2_sha256 format:", djangoHash);
        return false;
    }
    const iterations = parseInt(iterationsStr, 10)
    if (isNaN(iterations)){
        console.error("Invalid itereations count in hash:", djangoHash);
        return false;
    }
    const storedHash = Buffer.from(storedHashBase64, "base64");
    const keylen = storedHash.length
    return new Promise((resolve, reject) => {
            crypto.pbkdf2(
                password,
                salt,
                iterations,
                keylen,
                "sha256",
                (err, derivedKey) => {
                    if (err) {
                        console.error("PBKDF2 error during verification:", err);
                        return reject(new Error("Password verification failed internally."));
                    }
                    if (
                        storedHash.length === derivedKey.length &&
                        crypto.timingSafeEqual(storedHash, derivedKey)
                    ) {
                        resolve(true);
                    } else {
                        resolve(false)
                    }
                },
            );
        });

}// End of verifyDjangoPassword

/**
 * Verifies a password against a bcrypt hash.
 * @param {string} password - The plain text password to verify.
 * @param {string} bcryptHash - The bcrypt hash string.
 * @returns {Promise<boolean>} - True if the password matches, false otherwise.
 */
const verifyBcryptPassword = async (password, bcryptHash) => {
    // Function body remains the same
    try {
      return await bcrypt.compare(password, bcryptHash);
    } catch (err) {
      console.error("Bcrypt comparison error:", err);
      return false;
    }
  }; // End of verifyBcryptPassword
  
  /**
   * Hashes a password using bcrypt.
   * @param {string} password - The plain text password to hash.
   * @returns {Promise<string>} - The resulting bcrypt hash.
   */
const hashPassword = async (password) => {
    // Function body remains the same
    const saltRounds = parseInt(process.env.BCRYPT_SALT_ROUNDS, 10);
    return bcrypt.hash(password, saltRounds);
  }; // End of hashPassword
  
  // Export the functions using module.exports (remains the same)
  module.exports = {
    verifyDjangoPassword,
    verifyBcryptPassword,
    hashPassword,
  };