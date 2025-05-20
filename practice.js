const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname))); // 静的ファイルを提供
app.use(express.json()); 
    
app.post('/save-data', (req, res) => {
    console.log('Data received:', req.body.data);
    res.send('Data saved successfully!');
});

console.log(module);
    
app.listen(4000, () => console.log('Server running on http://localhost:4000'));