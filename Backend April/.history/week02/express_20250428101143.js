const express = require('express');
const app = express();
app.use(express.json()); // allows access tothe request.body

app.get("/get", (req, res) => {
    res.send("GET route hit");
});

get.app("/pokemon",(req,res) => {
    console.log("pokemon route hit");
    res.send("GET route hit for pokemon");
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


