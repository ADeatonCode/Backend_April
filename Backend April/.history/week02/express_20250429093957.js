const express = require('express');
const app = express();
app.use(express.json()); // allows access to the request.body


const db = ['test', 'test2', 'test3'];

app.get("/get", (req, res) => {
    res.send("GET route hit");
    console.log("GET route hit",db);
});

app.get("/pokemon",(req,res) => {
    console.log("pokemon route hit");
    res.send("GET route hit for pokemon");
});

app.post("/post", (req, res) => {
    console.log("POST route hit with body:", req.body);
    db.push(req.body); // Assuming the body contains a name field
    res.send("POST route hit with body: " + JSON.stringify(req.body));
});
a
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


