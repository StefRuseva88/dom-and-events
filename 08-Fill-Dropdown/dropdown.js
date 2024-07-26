function addItem() {
    let textItem = document.getElementById("newItemText");
    let valueItem = document.getElementById("newItemValue");
    let selectItem = document.getElementById("menu");

    let optionElement = document.createElement("option");

    optionElement.textContent = textItem.value;
    optionElement.value = valueItem.value;

    selectItem.appendChild(optionElement);

    textItem.value = '';
    valueItem.value = '';
}