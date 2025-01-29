const allRoomsAndTime = [[623, 6], [618,6], [608,6], [625, 6], [203, 6], [303, 6], [423, 7],[502, 7]];

const sortedRooms = [];
for (let i = 6; i >= 2; i--) {
    const storyFiltered = arr => 
        arr.filter(guestData => guestData[0] >= i * 100 && guestData[0] < (i + 1) * 100);
//     const wingFiltered = arr => [
//         arr.filter(guestData => guestData[0] >= i * 100 && guestData[0] < i * 100 + 10),
//         arr.filter(guestData => guestData[0] >= i * 100 + 10 && guestData[0] < i * 100 + 20),
//         arr.filter(guestData => guestData[0] >= i * 100 + 20 && guestData[0] < i * 100 + 30),
//     ];
//     sortedRooms.push(wingFiltered(storyFiltered(allRoomsAndTime)));
    console.log(storyFiltered(allRoomsAndTime).filter(guestData => guestData[0] >= i * 100 && guestData[0] < i * 100 + 10));
    console.log(storyFiltered(allRoomsAndTime).filter(guestData => guestData[0] >= i * 100 + 10 && guestData[0] < i * 100 + 20));
    console.log(storyFiltered(allRoomsAndTime).filter(guestData => guestData[0] >= i * 100 + 20 && guestData[0] < i * 100 + 30));

    sortedRooms.push(storyFiltered(allRoomsAndTime));
}
// console.log(sortedRooms);

// const floor = '6th floor';
// document.getElementById('floor').innerHTML = floor;

// const tableData = sixedFloorRooms.map(room => room[0]).join(' ');  // find every filter are useful instance methods of array
// document.getElementById('tableData1').innerHTML = tableData;

// const tableData2 = allRoomsAndTime[1][0];
// document.getElementById('tableData2').innerHTML = tableData2;

// const tableData3 = allRoomsAndTime[2][0];
// document.getElementById('tableData3').innerHTML = tableData3;

// const put5thFloor = '5th floor';
// document.getElementById('put5thFloor').innerHTML = put5thFloor;