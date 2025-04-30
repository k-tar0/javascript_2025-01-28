    const express = require('express');
    const path = require('path');
    const app = express();
    
    app.get('/', (req, res) => 
        res.sendFile(path.join(__dirname, 'practice.html')        ));
    app.listen(3000, () => console.log('Server running on port 3000'));

    app.use(express.json());

    let savedData = "";
    app.post('/save-data', (req, res) => {
        savedData = req.body.data;
        console.log('Data saved:', savedData);

        res.status(200).send('Data saved successfully!');
    });

    document.getElementById('dataForm').addEventListener('submit', function (e) {
        e.preventDefault(); 
        const data = document.getElementById('sharedData').value;