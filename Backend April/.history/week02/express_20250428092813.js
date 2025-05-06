const express = Required('express');
const app = express();
app.use(express.json()); // allows access tothe request.body


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});


