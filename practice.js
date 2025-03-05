
// const input = document.querySelector('input');
//       h2 = document.querySelector('h2');
// h2.innerHTML = localStorage.getItem('value');
// input.addEventListener("keyup", display);
// function display() {
//     localStorage.setItem('value', input.value);
//     h2.innerHTML = localStorage.getItem('value');
// }

    const express = require('express');
    const app = express();
    app.use(cors({
        origin: '*'
    }))
    app.use(express.json());
    
    let data = [];
    
    app.get('/data', (req, res) => res.json(data));
    app.post('/data', (req, res) => {
        data.push(req.body.data);
        res.json({ message: "Data added!", data });
    });
    app.listen(3000, () => console.log('Server running on port 3000'));
    
// let num = localStorage.getItem("num") || 0; // Get saved num or default to 0
// num++; 
// localStorage.setItem("num", num); // Save it
// document.body.innerHTML = `<h1>Num: ${num}</h1>`;
// console.log(num);

// document.getElementById("numInput").addEventListener("input", function () {
//     let value = this.value;
//     if (value.length === 3) {
//         myFunction(value);
//     }
// });

// function myFunction(val) {
//     alert("You entered: " + val);
//     localStorage.setItem("numInput", val);
// }
