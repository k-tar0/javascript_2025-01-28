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

    const createButton = (id, text) => {
        const button = document.createElement("button");
        button.type = "button";
        button.id = id;
        button.textContent = text;
        return button;
    };

    dinnerTime.forEach(time => form.appendChild(createButton(`table${time}`, time)));

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    form.appendChild(Object.assign(document.createElement("label"), { textContent: "Room number:" }));
    form.appendChild(Object.assign(document.createElement("input"), { id: "roomNumber", type: "number", placeholder: "Enter room number" }));
    form.appendChild(Object.assign(document.createElement("input"), { type: "reset" }));

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    form.appendChild(Object.assign(document.createElement("label"), { textContent: "Dinner time:" }));

    dinnerTime.forEach(time => form.appendChild(createButton(`book${time}`, time)));

    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));

    document.body.appendChild(form);
};