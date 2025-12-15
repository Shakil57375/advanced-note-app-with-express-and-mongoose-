"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/hello', (req, res) => {
    res.send('Hello World!');
});
app.get('/hello/:name', (req, res) => {
    const hello = req.params;
    console.log(hello);
    res.send(`Hello ${hello.name}!`);
});
exports.default = app;
