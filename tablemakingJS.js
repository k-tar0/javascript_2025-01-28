export default function tableMake(floorNames, wingNames, allRoomsAndTime) {
    const dinnerTime = ['18:00', '19:00'];
    const sortedRoomsbytime = [
        [...allRoomsAndTime].filter(room => room[1] === dinnerTime[0]).map(room => room[0]),
        [...allRoomsAndTime].filter(room => room[1] === dinnerTime[1]).map(room => room[0])
    ];
    
    const sortedRooms = sortedRoomsbytime.map(timeGroup => 
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