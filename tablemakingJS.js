export const tableMake = (floorNames, wingNames, allRoomsAndTime, dinnerTime) => {
    const sortedRooms = dinnerTime.map(time => 
        Object.fromEntries(
            floorNames.map((floor, index) => [
                floor,
                Object.fromEntries(
                    wingNames.map((wing, wingIndex) => [
                        wing,
                        allRoomsAndTime.filter(([_, t]) => t === time).map(([room]) => room)
                            .filter(x => 
                                x >= (6 - index) * 100 + 10 * wingIndex &&
                                x < (6 - index) * 100 + 10 * (wingIndex + 1)
                            )
                            .sort((a, b) => b - a)
                    ])
                )
            ])
        )
    );
    console.log(sortedRooms);
    
    const tbody = document.getElementById('floorTable').appendChild(document.createElement('tBody'));
    floorNames.forEach(floorName => {
        const floor = tbody.insertRow();
        floor.appendChild(document.createElement('th'))
            .appendChild(document.createTextNode(floorName));

        [...wingNames].reverse().forEach(element => {
            floor.insertCell().textContent = sortedRooms[0][floorName][element].join(' ');
        });
    });
};

export const makeTableHead = thead => {
    const headerRow = document.getElementById('floorTable').createTHead().insertRow();
    thead.forEach(title => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(title));
        headerRow.appendChild(th);
    });
};