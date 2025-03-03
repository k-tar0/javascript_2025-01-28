export const addTitle = () => {
    const h5 = document.createElement('h5');
    h5.textContent = "布団敷きの部屋一覧";
    document.getElementById('floorTable').parentNode.insertBefore(h5, document.getElementById('floorTable'));
};

export const sortRooms = (floorNames, wingNames, allRoomsAndTime, dinnerTime) => {
    const arraysToObject = (array, result) => 
        Object.fromEntries(array.map((element, index) => [element, result(index)]));

    const sortedRooms = arraysToObject(dinnerTime, timeindex => 
        arraysToObject(floorNames, index => 
            arraysToObject(wingNames, wingIndex => 
                allRoomsAndTime.filter(([_, t]) => t === dinnerTime[timeindex])
                    .map(([room]) => room)
                    .filter(x => 
                        x >= (6 - index) * 100 + 10 * wingIndex &&
                        x < (6 - index) * 100 + 10 * (wingIndex + 1)
                    )
                    .sort((a, b) => b - a)
            )
        )
    );
    
    return sortedRooms;
};

export const roomsToTable = (floorNames, wingNames, sortedRooms, dinnerTime, timeIndex) => {
    const tbody = document.getElementById('floorTable').appendChild(document.createElement('tBody'));
    floorNames.forEach(floorName => {
        const floor = tbody.insertRow();
        // floor.appendChild(document.createElement('th')).appendChild(document.createTextNode(floorName));
        [...wingNames].reverse().forEach(element => {
            const cell = floor.insertCell();
            cell.textContent = sortedRooms[dinnerTime[timeIndex]][floorName][element].join(' ');
            cell.className = 'room-cell';
            cell.addEventListener('click', () => {
                const rect = cell.getBoundingClientRect();
                const canvasRect = canvas.getBoundingClientRect();
                const x = rect.left + rect.width / 2 - canvasRect.left;
                const y = rect.top + rect.height / 2 - canvasRect.top;
                console.log(`Cell center: (${x}, ${y})`);
            });
        });
    });
};

