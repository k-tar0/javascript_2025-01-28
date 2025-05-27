const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json()); 
    
app.post('/save-data', (req, res) => {
    console.log('Data received:', req.body.data);
    res.send('Data saved successfully!');
});
    
app.listen(3000, () => console.log('Server running on http://localhost:3000'));