"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// initializing router
const router = (0, express_1.Router)();
// Task 1: Hello world route
router.get("/hello", (req, res) => {
    res.json({
        msg: "Hello world!"
    });
});
// Task 2: ID echoing 
router.get("/echo/:id", (req, res) => {
    res.json({
        id: "dog"
    });
});
// Task 3: POST request
router.post("/sum", (req, res) => {
    const { numbers } = req.body;
    if (!Array.isArray(numbers) || !numbers.every(n => typeof n === "number")) {
        return res.status(400).json({
            error: "Invalid input(s)."
        });
    }
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    res.json({ sum });
});
let users = [];
router.post("/users", (req, res) => {
    const { name, email } = req.body || {};
    if (!name || !email) {
        return res.status(400).json({
            error: "Invalid input(s)."
        });
    }
    const newUser = { name, email };
    users.push(newUser);
    return res.json({ message: "User successfully aded" });
});
router.get("/users", (req, res) => {
    return res.status(201).json(users);
});
exports.default = router;
