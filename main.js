import { makeTableHead, sortRooms, roomsToTable, makeForm } from "./tablemakingJS.js";

const allRoomsAndTime = [[307,"19:00"], [505,"18:00"],[623, "18:00"], [618,"18:00"], [608,"18:00"], [625, "18:00"], [203, "18:00"], [303, "18:00"], [423, "19:00"], [424, "18:00"],[502, "19:00"],[418, "18:00"], [408, "18:00"],[621,"18:00"]];
const floorNames = ['6th floor', '5th floor', '4th floor', '3rd floor', '2nd floor'];
const wingNames = ['wing 1', 'wing 2', 'wing 3'];
const dinnerTime = ['18:00', '19:00'];
const thead = [' ' , "wing 3", "wing 2", "wing 1"];

makeTableHead(thead);
makeForm(dinnerTime);
let sortedRooms = sortRooms(floorNames, wingNames, allRoomsAndTime, dinnerTime);
roomsToTable(floorNames, wingNames, sortedRooms, dinnerTime, 0);
document.getElementById(`table${dinnerTime[0]}`).style.backgroundColor = "tomato";

dinnerTime.forEach((time, index) => {
    document.getElementById(`table${time}`).addEventListener('click', () => {
        document.querySelectorAll("#floorTable tbody").forEach(tbody => tbody.remove());
        roomsToTable(floorNames, wingNames, sortedRooms, dinnerTime, index);
        dinnerTime.forEach(time => document.getElementById(`table${time}`).style.backgroundColor = "");
        document.getElementById(`table${time}`).style.backgroundColor = "tomato";
    });
});

dinnerTime.forEach((time, index) => {
    document.getElementById(`book${time}`).addEventListener('click', () => {
        document.querySelectorAll("#floorTable tbody").forEach(tbody => tbody.remove());
        allRoomsAndTime.push([parseInt(document.getElementById("roomNumber").value), time]);
        sortedRooms = sortRooms(floorNames, wingNames, allRoomsAndTime, dinnerTime);
        roomsToTable(floorNames, wingNames, sortedRooms, dinnerTime, index);
    });
});