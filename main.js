import { addTitle, sortRooms, roomsToTable } from "./tablemaking.js";
import { drawLines } from "./routeMaking.js";
import { makeForm } from "./formMaking.js";

const allRoomsAndTime = [
    [307, "19:00"], [505, "18:00"], [623, "18:00"], [618, "18:00"], 
    [608, "18:00"], [625, "18:00"], [203, "18:00"], [303, "18:00"], 
    [423, "19:00"], [424, "18:00"], [502, "19:00"], [418, "18:00"], 
    [408, "18:00"], [621, "18:00"], [301, "18:00"], [302, "18:00"],
    [401, "18:30"], [402, "18:30"], [403, "18:30"], [404, "18:30"],
    [409, "18:30"], [420, "18:30"], [411, "18:30"], [612, "18:30"],
    [413, "18:30"], [514, "18:30"], [415, "18:30"], [416, "18:30"],
    [505, "19:30"], [506, "19:30"], [507, "19:30"], [508, "19:30"],
    [509, "19:30"], [310, "19:30"], [411, "19:30"], [612, "19:30"],
    [513, "19:30"], [524, "19:30"], [515, "19:30"], [516, "18:00"],
    [607, "19:00"]
];

const floorNames = ['6F', '5F', '4F', '3F', '2F'];
const wingNames = ['wing 1', 'wing 2', 'wing 3'];
const dinnerTimes = ['18:00','18:30','19:00','19:30'];

addTitle();
makeForm(dinnerTimes);

let shownTime = '18:30';
let sortedRooms = sortRooms(floorNames, wingNames, allRoomsAndTime, dinnerTimes);
roomsToTable(floorNames, wingNames, sortedRooms, shownTime);
document.getElementById(`table${shownTime}`).style.backgroundColor = "tomato";

dinnerTimes.forEach((dinnerTime) => {
    document.getElementById(`table${dinnerTime}`).addEventListener('click', () => {
        document.querySelectorAll("#floorTable tbody").forEach(tbody => tbody.remove());
        roomsToTable(floorNames, wingNames, sortedRooms, dinnerTime);
        dinnerTimes.forEach(time => document.getElementById(`table${time}`).style.backgroundColor = "");
        document.getElementById(`table${dinnerTime}`).style.backgroundColor = "tomato";
        shownTime = dinnerTime;
    });
});

document.getElementById("numInput").addEventListener("input", function() {
    let value = this.value;
    if (value.length === 3) {
        console.log(value);
        document.querySelectorAll("#floorTable tbody").forEach(tbody => tbody.remove());
        allRoomsAndTime.push([value, shownTime]);
        sortedRooms = sortRooms(floorNames, wingNames, allRoomsAndTime, dinnerTimes);
        roomsToTable(floorNames, wingNames, sortedRooms, shownTime);
        this.value = "";
    }
});

document.getElementById("calculate").addEventListener('click', () => {
    drawLines();
});
console.log(sortedRooms);