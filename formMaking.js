export const makeForm = (dinnerTime) => {
    const form = Object.assign(document.createElement("form"), { id: "form" });

    const createButton = (id, text) => 
        Object.assign(document.createElement("button"), 
    { type: "button", id, textContent: text });

    const div = Object.assign(document.createElement("div"), { className: "buttonGroup" });
    dinnerTime.forEach(time => div.appendChild(createButton(`table${time}`, time)));
    form.appendChild(div);

    form.append(document.createElement("br"), document.createElement("br")); //空白

    form.appendChild(Object.assign(document.createElement("label"), { textContent: "部屋番号を入力:" }));
    form.appendChild(Object.assign(document.createElement("input"), { type: "text", id: "numInput", maxLength: 3, placeholder: "Enter 3 digits" }));

    for (let i = 0; i < 3; i++) {
        form.append(document.createElement("br"));//空白
    }

    form.appendChild(createButton("calculate", "ルートの計算"));
    form.appendChild(createButton("reset", "リセット"));

    document.body.appendChild(form);
};

console.log("Your friend is here! help me!");