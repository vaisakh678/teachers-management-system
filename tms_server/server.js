const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./Models/User");
const jwt = require("jsonwebtoken");

const app = express();
const port = 3001;
const secrete_key = "secrete_key";
mongoose.connect("mongodb://127.0.0.1:27017/teachers_data_management");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello");
});

app.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            name: req.body.username,
            password: req.body.password,
        });
        if (user) {
            const token = jwt.sign(
                {
                    id: user._id,
                    name: user.name,
                    type: user.type,
                },
                secrete_key
            );
            console.log(user);
            res.json({ status: "ok", user: token });
            console.log(`token ${token}`);
            console.log("--user found!");
        } else {
            res.json({ status: "ok", user: false });
            console.log("--user not found!");
        }
    } catch (err) {
        res.json({ status: "error", user: false });
        console.log(err);
        console.log("--smtng went fucked up");
    }
});

app.listen(port, () => {
    console.log("server is up!!");
});

// spaghetti testing
// this have to be handled tldr
// const data = User.create({
//     name: "vaisakh_t",
//     password: "test",
//     type: "teacher",
// });
