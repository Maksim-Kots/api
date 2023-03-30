const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const contacts = require('./pages/contacts');
const shop = require('./pages/shop');
const mainPage = require("./pages/mainPage");
const aboutMe = require("./pages/aboutMe");

app.get('/', (request, response) => {
    const student = {
        name: '',
        age: '',
    }
})

app.listen(8000, () => {
    console.log("Сервер запущен на порту 8000.")
})