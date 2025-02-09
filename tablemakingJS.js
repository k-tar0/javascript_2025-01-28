export default function tableMaking(floorNames, wingNames, allRoomsAndTime) {
    const sortedRoomsbytime = [
        [...allRoomsAndTime].filter(room => room[1] === 6).map(room => room[0]),
        [...allRoomsAndTime].filter(room => room[1] === 7).map(room => room[0])
    ];
    
    const sortedRooms = sortedRoomsbytime.map(timeGroup => 
        Object.fromEntries(
            floorNames.map((floor, index) => [
                    floor,
                    Object.fromEntries(
                        wingNames.map((wing, wingIndex) => 
                            [wing, timeGroup.filter(x => x >= (6 - index) * 100 + 10 * wingIndex && x < (6 - index) * 100 + 10 * (wingIndex + 1))])
                    )])
        )
    );

    
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
