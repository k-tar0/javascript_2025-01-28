import { makeTableHead, sortRooms, roomsToTable } from "./tablemaking.js";
import { drawLines } from "./routeMaking.js";
import { makeForm } from "./formMaking.js";

const allRoomsAndTime = [
    [307, "19:00"], [505, "18:00"], [623, "18:00"], [618, "18:00"], 
    [608, "18:00"], [625, "18:00"], [203, "18:00"], [303, "18:00"], 
    [423, "19:00"], [424, "18:00"], [502, "19:00"], [418, "18:00"], 
    [408, "18:00"], [621, "18:00"], [301, "18:00"], [302, "18:00"],
    [401, "18:30"], [402, "18:30"], [403, "18:30"], [404, "18:30"],
    [405, "18:30"], [406, "18:30"], [407, "18:30"], [408, "18:30"],
    [409, "18:30"], [420, "18:30"], [411, "18:30"], [612, "18:30"],
    [413, "18:30"], [514, "18:30"], [415, "18:30"], [416, "18:30"],
    [501, "19:30"], [502, "19:30"], [503, "19:30"], [504, "19:30"],
    [505, "19:30"], [506, "19:30"], [507, "19:30"], [508, "19:30"],
    [509, "19:30"], [310, "19:30"], [411, "19:30"], [612, "19:30"],
    [513, "19:30"], [524, "19:30"], [515, "19:30"], [516, "18:00"]
];
const floorNames = ['6F', '5F', '4F', '3F', '2F'];
const wingNames = ['wing 1', 'wing 2', 'wing 3'];
const dinnerTime = ['18:00','18:30','19:00','19:30'];
const thead = [' ' , "3号館", "2号館", "1号館"];

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
        dinnerTime.forEach(time => document.getElementById(`table${time}`).style.backgroundColor = "");
        document.getElementById(`table${time}`).style.backgroundColor = "tomato";
        document.getElementById("roomNumber").value = "";
    });
});
console.log(sortedRooms);

document.getElementById("calculate").addEventListener('click', () => {
    // getPositions();
    drawLines();
});