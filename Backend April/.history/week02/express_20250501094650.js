const express = require('express');
const app = express();
app.use(express.json()); // allows access to the request.body
const uuid = require('uuid'); // for generating unique ids


let db = [
    { id: "1", task: "test" },
    { id: "2", task: "eat" },
    { id: "3", task: "sleep" },
    { id: "4", task: "walk" }
]

app.get("/get", (req, res) => {
    res.send("GET route hit");
    console.log("GET route hit",db);
});

app.get("/query", (req, res) =>{
    console.log("query route hit", db, req.query)
    res.send("Hello Pokemon", db, req.query)
})

app.post("/post", (req, res) => {
    console.log("POST route hit with body:", req.body);
    const newTodo = {
        id: uuid.v4(), // Generate a unique ID for the new todo
        task: req.body.task // Assuming the body contains a task field
    };
    
    db.push(newTodo); // Assuming the body contains a name field
    
    
    res.send("POST route hit with body: " + JSON.stringify(req.body));
});
app.delete("/delete/:id", (req, res) => {
    console.log("DELETE route hit for pokemon", req.params);
    res.send("DELETE route hit for pokemon");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


