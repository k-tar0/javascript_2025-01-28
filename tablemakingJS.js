export const tableMake = (floorNames, wingNames, allRoomsAndTime, dinnerTime) => {
    const sortedRooms = dinnerTime.map(time => 
        Object.fromEntries(
            floorNames.map((floor, index) => [
                floor,
                Object.fromEntries(
                    wingNames.map((wing, wingIndex) => [
                        wing,
                        allRoomsAndTime.filter(([_, t]) => t === time).map(([room]) => room)
                            .filter(x => 
                                x >= (6 - index) * 100 + 10 * wingIndex &&
                                x < (6 - index) * 100 + 10 * (wingIndex + 1)
                            )
                            .sort((a, b) => b - a)
                    ])
                )
            ])
        )
    );
    console.log(sortedRooms);
    
    const tbody = document.getElementById('floorTable').appendChild(document.createElement('tBody'));
    floorNames.forEach(floorName => {
        const floor = tbody.insertRow();
        floor.appendChild(document.createElement('th'))
            .appendChild(document.createTextNode(floorName));

        [...wingNames].reverse().forEach(element => {
            floor.insertCell().textContent = sortedRooms[0][floorName][element].join(' ');
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
    
    // Create table buttons
    dinnerTime.forEach(time => {
        const button = document.createElement("button");
        button.type = "button";
        button.id = `table${time}`;
        button.textContent = time;
        form.appendChild(button);
    });
    
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    
    // Room number label & input
    const roomLabel = document.createElement("label");
    roomLabel.textContent = "Room number:";
    form.appendChild(roomLabel);
    
    const roomInput = document.createElement("input");
    roomInput.id = "roomNumber";
    roomInput.type = "number";
    roomInput.placeholder = "Enter room number";
    form.appendChild(roomInput);
    
    const resetButton = document.createElement("input");
    resetButton.type = "reset";
    form.appendChild(resetButton);
    
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    
    // Dinner time label
    const dinnerLabel = document.createElement("label");
    dinnerLabel.textContent = "Dinner time:";
    form.appendChild(dinnerLabel);
    
    // Dinner time buttons
    dinnerTime.forEach(time => {
        const button = document.createElement("button");
        button.type = "button";
        button.id = `book${time}`;
        button.textContent = time;
        form.appendChild(button);
    });
    
    form.appendChild(document.createElement("br"));
    form.appendChild(document.createElement("br"));
    
    document.body.appendChild(form);
    
}