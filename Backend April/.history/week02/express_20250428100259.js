const express = require('express');
const app = express();
app.use(express.json()); // allows access tothe request.body

app.get("/get", (req, res) => {
    res.send("GET route hit");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    req.send("Hellow World!");
});


