// until now we've been storing data in memory this is bad for a few reasons 
// data cant be dynamic if you update in memory object the updates are lost if the process restarts
// there are multiple servers in the real world 

// user hits the backend 
// backend hits the database
// user doesnt have access to the database/cant talk to the db

// Types 
// Graph DB : stores data as nodes and edges
// Vector DB : stores data as vectors
//  SQL DB : stores data in tables with rows and columns
// NoSQl DB : stores data in key value pairs

// MongoDb lets you create database
// in each db it lets you create (collections)
// in each table it lets you dump JSON data
// it is schemaless
// it scales well and is a decent choice for a lot of application

// How to start?
// 1. Create a MongdDB free instance by going to https://mongodb.com/
// 2. Get your mongoldb connection URL
// 3. Download MongoDB Compass and try to explore the DB

// how does the backend connect to the databases 
// using libraries 
// express lets u create an http server
// jsonwebtokens library lets you create jwt
// mongoose lets you connect to your database

// 
const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";

// Connect to MongoDB
mongoose.connect("your_mongo_url", { useNewUrlParser: true, useUnifiedTopology: true });

// User Schema
const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String
});

const app = express();
app.use(express.json());

// Check if user exists
async function userExists(username, password) {
    const user = await User.findOne({ username: username, password: password });
    return user;
}

// Signin Route
app.post("/signin", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const user = await userExists(username, password);

    if (!user) {
        return res.status(403).json({
            message: "Username or password is incorrect"
        });
    }

    const token = jwt.sign({ username: username }, jwtPassword);
    return res.json({
        token
    });
});

// Signup Route
app.post("/signup", async function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({ username: username });

    if (existingUser) {
        return res.status(400).json({
            message: "Username already exists"
        });
    }

    const user = new User({
        name: name,
        username: username,
        password: password
    });

    await user.save();

    res.json({
        message: "User created successfully"
    });
});

// Protected Route Example
app.get("/users", async function (req, res) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(401).json({ message: "Missing token" });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, jwtPassword);
        const users = await User.find({});
        res.json({ users });
    } catch (err) {
        return res.status(403).json({ message: "Invalid token" });
    }
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
