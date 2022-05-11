const bcrypt = require('bcryptjs');

async function generatePass(hashedPassword) {
    const hash = await bcrypt.hash(hashedPassword, 12)

    return hash


}

async function checkPassword(hashedPassword, hash) {
    const isValid = await bcrypt.compare(hashedPassword, hash)

    return isValid
}


// generatePass('threemusketeers')


module.exports = { generatePass, checkPassword }
