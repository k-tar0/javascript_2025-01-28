  //No need to edit the code below.

// export const drawLines = () => {
//     const cellPositions = {};

//     const canvas = document.getElementById("canvas");
//     const context = canvas.getContext("2d");

//     const devicePixelRatio = window.devicePixelRatio || 1;

//     function resizeCanvas() {
//         canvas.width = canvas.clientWidth * devicePixelRatio;
//         canvas.height = canvas.clientHeight * devicePixelRatio;
//         context.scale(devicePixelRatio, devicePixelRatio);
//     }

//     resizeCanvas();

//     context.lineWidth = 2 / devicePixelRatio;
//     document.querySelectorAll("td").forEach((cell, index) => {
//         const rect = cell.getBoundingClientRect();
//         const canvasRect = canvas.getBoundingClientRect();

//         const floor = Math.floor(index / 3);
//         const wing = index % 3;

//         if (!cellPositions[floor]) {
//             cellPositions[floor] = {};
//         }

//         cellPositions[floor][wing] = 
//         { X: (rect.left + rect.right) / 2 - canvasRect.left,
//         Y: (rect.top + rect.bottom) / 2 - canvasRect.top };
//     });

//     context.beginPath();
//     context.moveTo(cellPositions[0][0].X, cellPositions[0][0].Y);
//     context.lineTo(cellPositions[0][2].X, cellPositions[0][2].Y);
//     context.strokeStyle = "rgba(255, 0, 0, 0.5)";
//     context.lineWidth = 3; 
//     context.stroke();
//     context.closePath();
// }

// function classifyLiftStop(sortedRooms) {
//     sortedRooms
// }