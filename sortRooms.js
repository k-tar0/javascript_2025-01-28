import tableMake from "./tablemakingJS.js";

const allRoomsAndTime = [[307,7], [505,6],[623, 6], [618,6], [608,6], [625, 6], [203, 6], [303, 6], [423, 7], [424, 6],[502, 7],[418, 6], [408, 6],[621,6]];
const floorNames = ['6th floor', '5th floor', '4th floor', '3rd floor', '2nd floor'];
const wingNames = ['wing 1', 'wing 2', 'wing 3'];

tableMake(floorNames, wingNames, allRoomsAndTime);

const button = document.getElementById("mySubmit");
button.addEventListener('click', () => {
    allRoomsAndTime.push([parseInt(document.getElementById("roomNumber").value), parseInt(document.getElementById("dinnerTime").value)]);
    document.querySelector("#floorTable tbody")?.remove();
    tableMake(floorNames, wingNames, allRoomsAndTime);
});