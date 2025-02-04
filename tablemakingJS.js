floorTable = document.getElementById('floorTable');

sixthFloor = document.getElementById('sixthFloor');
const makeTh = document.createElement('th');
const makeText = document.createTextNode(floorNames[0]);
sixthFloor.appendChild(makeTh).appendChild(makeText);

[...wingNames].reverse().forEach(element => {
    const makeTd = document.createElement('td');
    const makeTdText = document.createTextNode(sortedRooms[0][floorNames[0]][element].join(' '));
    makeTd.appendChild(makeTdText);
    sixthFloor.appendChild(makeTd);
});

fifthFloor = document.getElementById('fifthFloor');
const makeTh2 = document.createElement('th');
const makeText2 = document.createTextNode(floorNames[1]);
fifthFloor.appendChild(makeTh2).appendChild(makeText2);

[...wingNames].reverse().forEach(element => {
    const makeTd2 = document.createElement('td');
    const makeTdText2 = document.createTextNode(sortedRooms[0][floorNames[1]][element].join(' '));
    makeTd2.appendChild(makeTdText2);
    fifthFloor.appendChild(makeTd2);
});

fourthFloor = document.getElementById('fourthFloor');
const makeTh3 = document.createElement('th');
const makeText3 = document.createTextNode(floorNames[2]);
fourthFloor.appendChild(makeTh3).appendChild(makeText3);

[...wingNames].reverse().forEach(element => {
    const makeTd3 = document.createElement('td');
    const makeTdText3 = document.createTextNode(sortedRooms[0][floorNames[2]][element].join(' '));
    makeTd3.appendChild(makeTdText3);
    fourthFloor.appendChild(makeTd3);
});