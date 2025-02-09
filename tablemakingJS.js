floorTable = document.getElementById('floorTable');

floorNames.forEach((floorName) => {
    const floor = floorTable.insertRow();
    floor.appendChild(document.createElement('th'))
        .appendChild(document.createTextNode(floorName));

    [...wingNames].reverse().forEach(element => {
        floor.insertCell().textContent = sortedRooms[0][floorName][element].join(' ');
    });
});