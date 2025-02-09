//make an input section
//sort in wing as well
//create an optimized route
//make maps for 7 pm
//2nd floors no wings
//get used to github (later)

const allRoomsAndTime = [[307,7], [505,6],[623, 6], [618,6], [608,6], [625, 6], [203, 6], [303, 6], [423, 7], [424, 6],[502, 7],[418, 6], [408, 6]];

const sortedRoomsbytime = [
    [...allRoomsAndTime].filter(room => room[1] === 6).map(room => room[0]),
    [...allRoomsAndTime].filter(room => room[1] === 7).map(room => room[0])
];

const floorNames = ['6th floor', '5th floor', '4th floor', '3rd floor', '2nd floor'];
const wingNames = ['wing 1', 'wing 2', 'wing 3'];
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
console.log(sortedRooms);