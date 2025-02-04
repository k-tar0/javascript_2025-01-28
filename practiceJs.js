const numbers = [1, -1, 2, 3];
const items = numbers
.filter(n => n >= 0)
.map(n => ({ value: n }))
.filter(obj => obj.value > 1);

console.log(items); // Output: [ { value: 1 }, { value: 2 }, { value: 3 } ]