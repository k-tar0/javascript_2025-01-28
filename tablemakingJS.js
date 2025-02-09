floorTable = document.getElementById('floorTable').appendChild(document.createElement('tBody'));

floorNames.forEach((floorName) => {
    const floor = floorTable.insertRow();
    floor.appendChild(document.createElement('th'))
        .appendChild(document.createTextNode(floorName));

    [...wingNames].reverse().forEach(element => {
        floor.insertCell().textContent = sortedRooms[0][floorName][element].join(' ');
    });
});