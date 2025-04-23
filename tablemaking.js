export const addTitle = () => {
    const table = document.getElementById('floorTable');
    const title = document.createElement('h5');
    title.textContent = "布団敷きの部屋";
    table.insertAdjacentElement('beforebegin', title);
};

export const sortRooms = (floorNames, wingNames, allRoomsAndTime, dinnerTimes) => {
    const arraysToObject = (array, result) => 
        Object.fromEntries(array.map((element, index) =>
             [element, result(index)]));

    const sortedRooms = arraysToObject(
        dinnerTimes, timeindex => arraysToObject(
            floorNames, floorIndex => arraysToObject(
                wingNames, wingIndex => 
                    allRoomsAndTime
                        .filter(([_, t]) => t === dinnerTimes[timeindex])
                        .map(([room]) => room)
                        .filter(x => 
                            x >= (6 - floorIndex) * 100 + 10 * wingIndex &&
                            x < (6 - floorIndex) * 100 + 10 * (wingIndex + 1)
                        )
                        .sort((a, b) => b - a)
            )
        )
    );
    
    return sortedRooms;
};

export const roomsToTable = (floorNames, wingNames, sortedRooms, dinnerTime) => {
    const tbody = document.getElementById('floorTable').appendChild(document.createElement('tBody'));
    floorNames.forEach(floorName => {
        const floor = tbody.insertRow();
        const roomsToCell = () => {
            const cell = floor.insertCell();
            const floorRooms = sortedRooms[dinnerTime][floorName];
            cell.className = 'room-cell';
            cell.addEventListener('click', () => {
                const rect = cell.getBoundingClientRect();
                const canvasRect = canvas.getBoundingClientRect();
                const x = rect.left + rect.width / 2 - canvasRect.left;
                const y = rect.top + rect.height / 2 - canvasRect.top;
                console.log(`Cell center: (${x}, ${y})`);
            });
            return {cell, floorRooms};
        };
        if (floorName === '2F') {
            const { cell, floorRooms } = roomsToCell();
            cell.colSpan = 2 ;
            cell.textContent = Object.values(floorRooms).flat().join(" ");//なぜsecondFloorRooms じゃだめ?
        } else {
            [...wingNames].reverse().forEach(element => {
                const { cell, floorRooms } = roomsToCell();
                cell.textContent = floorRooms[element].join(' ');
            });
        }

    });
};