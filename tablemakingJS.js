export const sortRooms = (floorNames, wingNames, allRoomsAndTime, dinnerTime) => {
    const arraysToObject = (array, result) => 
        Object.fromEntries(array.map((element, index) => [element, result(index)]));

    const sortedRooms = arraysToObject(dinnerTime, timeindex => 
        arraysToObject(floorNames, index => 
            arraysToObject(wingNames, wingIndex => 
                allRoomsAndTime.filter(([_, t]) => t === dinnerTime[timeindex])
                    .map(([room]) => room)
                    .filter(x => 
                        x >= (6 - index) * 100 + 10 * wingIndex &&
                        x < (6 - index) * 100 + 10 * (wingIndex + 1)
                    )
                    .sort((a, b) => b - a)
            )
        )
    );
    return sortedRooms;
};

export const roomsToTable = (floorNames, wingNames, sortedRooms, dinnerTime, timeIndex) => {
    const tbody = document.getElementById('floorTable').appendChild(document.createElement('tBody'));
    floorNames.forEach(floorName => {
        const floor = tbody.insertRow();
        floor.appendChild(document.createElement('th')).appendChild(document.createTextNode(floorName));
        [...wingNames].reverse().forEach(element => {
            floor.insertCell().textContent = sortedRooms[dinnerTime[timeIndex]][floorName][element].join(' ');
        });
    });
};

export const makeTableHead = thead => {
    const headerRow = document.getElementById('floorTable').createTHead().insertRow();
    thead.forEach(title => {
        const th = document.createElement('th');
        th.appendChild(document.createTextNode(title));
        headerRow.appendChild(th);
    });
};

export const makeForm = (dinnerTime) => {
    const form = document.createElement("form");
    form.id = "form";

    const createButton = (id, text) => 
        Object.assign(document.createElement("button"), 
    { type: "button", id, textContent: text });

    dinnerTime.forEach(time => form.appendChild(createButton(`table${time}`, time)));

    form.append(document.createElement("br"), document.createElement("br"));

    form.appendChild(Object.assign(document.createElement("label"), { textContent: "部屋番号を入力:" }));
    form.appendChild(Object.assign(document.createElement("input"), { id: "roomNumber", type: "number", placeholder: "例: 302", style: "width: 100px;" }));
    form.appendChild(Object.assign(document.createElement("input"), { type: "reset" }));

    form.append(document.createElement("br"), document.createElement("br"));

    form.appendChild(Object.assign(document.createElement("label"), { textContent: "夕食の時間を入力:" }));

    dinnerTime.forEach(time => form.appendChild(createButton(`book${time}`, time)));
    
    form.append(document.createElement("br"), document.createElement("br"));

    document.body.appendChild(form);
};