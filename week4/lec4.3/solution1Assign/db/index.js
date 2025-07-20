// What is a database
// Good question to have at this point
// Why don't we let the user hit the database directly?
// What extra does the http server provide exactly?
// 1. Databases were are created using protocols that browsers don't understand
// 2. Databases don't have granual access as a first class citizen. Very hard to do user specific access in them
// 3. There are some databases (firebase) that let you get rid of the http server and try their best to provide granual access

// import mongoose from "mongoose";
// import { email } from "zod/v4";

// Databases usually allow access to 4 primitives
// I. Create Data
// 2. Read Data
// 3. Update Data
// 4. Delete Data
// Popularly known as CRUD

// What is a database
// Let's see the API for the mongoose library
// Eventually, we'll be using prisma (which is the industry standard way of doing this)
// In mongoose, first you have to define the schema
// This sounds counter intuitive since mongodb is schemaless?
// That is true, but mongoose makes you define schema for things like autocompletions
// Validating data before it goes in the DB to make sure you're doing things right
// Schemaless Dbs can be very dangerous, using schemas in mongo makes it slightly Ie
// Dangerous

//  Defining Schema

// const userSchema=new mongoose.Schema({
//   email:String,
//   password:String,
//   purchasedCourses:[{
//     type:mongoose.Schema.Types.ObjectId,
//     ref:'Course'
//   }]
// });
// const CourseSchema=new mongoose.Schema({
//   title:String,
//   price:5999
// });            

// const User=mongoose.model('User',userSchema);
// const Course=mongoose.model('Course',CourseSchema);

// 3 jargonse to know about the databases
// cluster
// database
// table
// In MongoDB, the cluster is the server that the database is on
// The database is the collection of tables
// The table is the collection of dataf


// Create a course selling website
// Description
// You need to implement a course selling app. Make sure you setup your own mongodb instance before starting. It needs to support two types of users -

// Admins
// Users
// Admins are allowed to sign up, create courses. Users are allowed to sign up, view courses, purchase courses. This in the real world would translate to an app like udemy.

// This one doesn't use authentication the right way. We will learn how to do that in the next assignment. For this one, in every authenticated requests, you need to send the username and password in the headers (and not the jwt). This is the reason why this assignment doesn't have a sign in route.

// You need to use mongodb to store all the data persistently.

// Routes
// Admin Routes:
// POST /admin/signup Description: Creates a new admin account. Input Body: { username: 'admin', password: 'pass' } Output: { message: 'Admin created successfully' }
// POST /admin/courses Description: Creates a new course. Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' } Output: { message: 'Course created successfully', courseId: "new course id" }
// GET /admin/courses Description: Returns all the courses. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
// User routes
// POST /users/signup Description: Creates a new user account. Input: { username: 'user', password: 'pass' } Output: { message: 'User created successfully' }
// GET /users/courses Description: Lists all the courses. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }
// POST /users/courses/:courseId Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { message: 'Course purchased successfully' }
// GET /users/purchasedCourses Description: Lists all the courses purchased by the user. Input: Headers: { 'username': 'username', 'password': 'password' } Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

// Solution

const express=require('express')
const mongoose=require('mongoose')
const app=express()
const port =3002;
mongoose.connect('mongodb://localhost:27017/');


const AdminSchema=new mongoose.Schema({
  username:String,
  password:String
});

const UserSchema=new mongoose.Schema({
  username:String,
  password:String,
  parchasedCourses:[{

    type:mongoose.Schema.Types.ObjectId,
    ref:'Course'
  }]
});

const CourseSchema=new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    imageLink:String
})
const Admin=mongoose.model('Admin',AdminSchema);
const User=mongoose.model('User',UserSchema)
const Course=mongoose.model('Course',CourseSchema);

module.exports={
  Admin,
  User,
  Course
};