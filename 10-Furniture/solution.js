function solve() {
  const [input, output] = document.getElementsByTagName('textarea');
  const [generateButton, buyButton] = document.getElementsByTagName('button');
  const tableBody = document.getElementsByTagName('tbody')[0];

  generateButton.addEventListener('click', generateRow);
  buyButton.addEventListener('click', buyItems);

  function generateRow() {
  let items = JSON.parse(input.value);

  for (let i = 0; i < items.length; i++) {
    const tableRow = document.createElement('tr');

    //Add table data for the image
    let imageTableData = document.createElement('td');
    let image = document.createElement('img');
    image.src = items[i].img;
    imageTableData.appendChild(image);
    tableRow.appendChild(imageTableData);

    //Add table data for the name
    let nameTableData = document.createElement('td');
    let nameParagraph = document.createElement('p');
    nameParagraph.textContent = items[i].name;
    nameTableData.appendChild(nameParagraph);
    tableRow.appendChild(nameTableData);

    //Add table data for the price
    let priceTableData = document.createElement('td');
    let priceParagraph = document.createElement('p');
    priceParagraph.textContent = items[i].price;
    priceTableData.appendChild(priceParagraph);
    tableRow.appendChild(priceTableData);

    //Add table data for the decFactor
    let decFactorTableData = document.createElement('td');
    let decFactorParagraph = document.createElement('p');
    decFactorParagraph.textContent = items[i].decFactor;
    decFactorTableData.appendChild(decFactorParagraph);
    tableRow.appendChild(decFactorTableData);

    //Add table data for the checkbox
    let checkboxTableData = document.createElement('td');
    let checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkboxTableData.appendChild(checkbox);
    tableRow.appendChild(checkboxTableData);

    tableBody.appendChild(tableRow);
    }
  }

  function buyItems() {
    let furniture = [];
    let price = 0;
    let decFactor = 0;
    let checkItemsCount = 0;
    let allRows = document.getElementsByTagName('tr');

    for (let i = 1; i < allRows.length; i++) {
      let isMarkChecked = allRows[i].children[4].children[0].checked;
     if (isMarkChecked) {
        checkItemsCount += 1;
        furniture.push(allRows[i].children[1].children[0].textContent);
        price += Number(allRows[i].children[2].children[0].textContent);
        decFactor += Number(allRows[i].children[3].children[0].textContent);
     }
    }

    const result = `Bought furniture: ${furniture.join(', ')}\nTotal price: ${price}\nAverage decoration factor: ${decFactor / checkItemsCount}`;
    output.textContent = result;
  }
}