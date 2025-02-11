const dinnerTime = ['18:00', '19:00'];

export function tableMake(floorNames, wingNames, allRoomsAndTime) {
    const sortedRooms = dinnerTime.map(time =>
        [...allRoomsAndTime].filter(room => room[1] === time).map(room => room[0])
    ).map(timeGroup => 
        Object.fromEntries(
            floorNames.map((floor, index) => [
                    floor,
                    Object.fromEntries(
                        wingNames.map((wing, wingIndex) => 
                            [wing, timeGroup.filter(x => x >= (6 - index) * 100 + 10 * wingIndex && x < (6 - index) * 100 + 10 * (wingIndex + 1)).sort((a, b) => b - a)]
                        )
                    )])
        )
    );
    console.log(sortedRooms)
    
    const floorTable = document.getElementById('floorTable').appendChild(document.createElement('tBody'));
    floorNames.forEach((floorName) => {
        const floor = floorTable.insertRow();
        floor.appendChild(document.createElement('th'))
            .appendChild(document.createTextNode(floorName));

        [...wingNames].reverse().forEach(element => {
            floor.insertCell().textContent = sortedRooms[0][floorName][element].join(' ');
        });
    });

}

export function tableMake19(floorNames, wingNames, allRoomsAndTime) {
    const dinnerTime = ['18:00', '19:00'];

    const sortedRooms = dinnerTime.map(time =>
        [...allRoomsAndTime].filter(room => room[1] === time).map(room => room[0])
    ).map(timeGroup => 
        Object.fromEntries(
            floorNames.map((floor, index) => [
                    floor,
                    Object.fromEntries(
                        wingNames.map((wing, wingIndex) => 
                            [wing, timeGroup.filter(x => x >= (6 - index) * 100 + 10 * wingIndex && x < (6 - index) * 100 + 10 * (wingIndex + 1)).sort((a, b) => b - a)]
                        )
                    )])
        )
    );
    console.log(sortedRooms)
    
    const floorTable = document.getElementById('floorTable').appendChild(document.createElement('tBody'));
    floorNames.forEach((floorName) => {
        const floor = floorTable.insertRow();
        floor.appendChild(document.createElement('th'))
            .appendChild(document.createTextNode(floorName));

        [...wingNames].reverse().forEach(element => {
            floor.insertCell().textContent = sortedRooms[1][floorName][element].join(' ');
        });
    });
}