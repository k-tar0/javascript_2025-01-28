floorTable = document.getElementById('floorTable');
const makeTh = document.createElement('th');
const makeTd = document.createElement('td');

sixthFloor = document.getElementById('sixthFloor');
const makeText = document.createTextNode(floorNames[0]);
sixthFloor.appendChild(makeTh).appendChild(makeText);

wingNames.reverse().forEach(element => {
    const makeTd = document.createElement('td');
    const makeTdText = document.createTextNode(sortedRooms[0][floorNames[0]][element].join(' '));
    makeTd.appendChild(makeTdText);
    sixthFloor.appendChild(makeTd);
});

document.getElementById('put5thFloor').innerHTML = floorNames[1];

const tableData5 = sortedRooms[0][floorNames[1]][wingNames[2]].join(' '); // Extract room numbers and join them with a comma
document.getElementById('tableData51').innerHTML = tableData5;

const tableData52 = sortedRooms[0][floorNames[1]][wingNames[1]].join(' ');
document.getElementById('tableData52').innerHTML = tableData52;

const tableData53 = sortedRooms[0][floorNames[1]][wingNames[0]].join(' ');
document.getElementById('tableData53').innerHTML = tableData53;



// practice

let nums = [43, 45, 47, 49].reverse();
nums.forEach((n,i,nums) => {
    console.log(n,i,nums)
});

