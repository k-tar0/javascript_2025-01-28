const allRoomsAndTime = [[307,7], [505,6],[623, 6], [618,6], [608,6], [625, 6], [203, 6], [303, 6], [423, 7],[502, 7]];

const sortedRooms = [];
for (let i = 6; i >= 2; i--) {
    const storyFilter = arr => 
        arr.filter(guestData => guestData[0] >= i * 100 && guestData[0] < (i + 1) * 100);
    const storyFilteredRooms = [
        storyFilter(allRoomsAndTime)
        .filter(guestData => guestData[0] >= i * 100 && guestData[0] < i * 100 + 10),
        storyFilter(allRoomsAndTime)
        .filter(guestData => guestData[0] >= i * 100 + 10 && guestData[0] < i * 100 + 20),
        storyFilter(allRoomsAndTime)
        .filter(guestData => guestData[0] >= i * 100 + 20 && guestData[0] < i * 100 + 30)
    ];
    sortedRooms.push(storyFilteredRooms);
}

const floor = '6th floor';
document.getElementById('floor').innerHTML = floor;

const tableData = sortedRooms[0][2].map(room => room[0]).join(', '); // Extract room numbers and join them with a comma
document.getElementById('tableData1').innerHTML = tableData;

const tableData2 = sortedRooms[0][1];
document.getElementById('tableData2').innerHTML = tableData2;

const tableData3 = sortedRooms[0][0];
document.getElementById('tableData3').innerHTML = tableData3;

const put5thFloor = '5th floor';
document.getElementById('put5thFloor').innerHTML = put5thFloor;