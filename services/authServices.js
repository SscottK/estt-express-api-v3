const { PrismaClient } = require("../generated/prisma");
const prisma = new PrismaClient();


const findUserByUsername = async (username) => {
    try {
        const user =  await prisma.auth_user.findUnique({
            where: {
            username: username,
        }
        });
        return user
    } catch (error) {
        console.error("Error Finding user by username:", username);
        throw error;
    }
};

const updtaePasswordHash = async (username, newHash) => {
    try {
        const user = await prisma.auth_user.update({
            where: {
                username: username,
            },
            data: {
                password: newHash
            }
        })
    } catch (error) {
        
    }
}


module.exports = {
    findUserByUsername,
    updtaePasswordHash,
}