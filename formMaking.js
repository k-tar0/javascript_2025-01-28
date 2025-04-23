export const makeForm = (dinnerTime) => {
    const form = Object.assign(document.createElement("form"), { id: "form" });

    const createButton = (id, text) => 
        Object.assign(document.createElement("button"), 
    { type: "button", id, textContent: text });

    const div = Object.assign(document.createElement("div"), { className: "buttonGroup" });
    dinnerTime.forEach(time => div.appendChild(createButton(`table${time}`, time)));
    form.appendChild(div);

    form.append(document.createElement("br"), document.createElement("br"));

    form.appendChild(Object.assign(document.createElement("label"), { textContent: "部屋番号を入力:" }));
    form.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "numInput", maxLength: 3, placeholder: "Enter 3 digits" }));

    form.append(document.createElement("br"))
    

    form.append(document.createElement("br"), document.createElement("br"));

    form.appendChild(createButton("calculate", "ルートの計算"));

    document.body.appendChild(form);
};