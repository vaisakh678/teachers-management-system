const mongoose = require("mongoose")

const user_schema = new mongoose.Schema({
    name: String,
    password: String,
    type: String
})

module.exports = mongoose.model("User", user_schema)

