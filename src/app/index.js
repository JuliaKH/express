const users = require("./users/users");
const boards = require("./boards/boards");
const lists = require("./lists/lists");
const tasks = require("./tasks/tasks");
const express = require("express");

const app = express();

app.get("/", function(request, response){

    response.send("<h1>Главная страница</h1>");
});

app.use("/users",function (request, response) {
    let usersJson = JSON.stringify(users);
    response.send(usersJson);
});

app.use("/boards",function (request, response) {
    let boardsJson = JSON.stringify(boards);
    response.send(boardsJson);
});
app.use("/lists",function (request, response) {
    let listsJson = JSON.stringify(lists);
    response.send(listsJson);
});
app.use("/tasks",function (request, response) {
    let tasksJson = JSON.stringify(tasks);
    response.send(tasksJson);
});

app.listen(3000);
