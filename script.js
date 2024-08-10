
const table = document.getElementById("recipe");
const amount = document.getElementById("amount");

const ingredients = [
    { amount: 2, unit: "", ingredient: "<b>Eier</b>" },
    { amount: 175, unit: "g", ingredient: "<b>Zucker</b>" },
    { amount: 1, unit: "Pk.", ingredient: "<b>Vanillezucker</b>" },
    { amount: 1, unit: "Msp.", ingredient: "<b>Salz</b>" },
    { amount: 160, unit: "g", ingredient: "<b>Butter</b>, flüssig ausgekühlt" },
    { amount: 150, unit: "g", ingredient: "<b>griechischer Jogurt nature,</b> Raumtemperatur" },
    { amount: 0.4, unit: "dl", ingredient: "<b>Amaretto oder einige Tropfen Bittermandelaroma</b>" },
    { amount: 200, unit: "g", ingredient: "<b>Mehl</b>" },
    { amount: 0.75, unit: "TL", ingredient: "<b>Backpulver</b>" },
    { amount: 400, unit: "g", ingredient: "<b>Aprikosen,</b> ensteint" },
    { amount: 2, unit: "EL", ingredient: "<b>Mandelblättchen,</b> leicht zerkrümelt" },
    { amount: 3, unit: "EL", ingredient: "<b>(Hagel)zucker</b>" },
];

ingredients.forEach((ingredient) => {
    const tr = document.createElement("tr");
    const checkboxNode = document.createElement("td");
    checkboxNode.innerHTML = "<input type='checkbox' />";

    const amountNode = document.createElement("td");
    amountNode.innerHTML = `<b>${ingredient.amount} ${ingredient.unit}</b>`;

    const ingredientNode = document.createElement("td");
    ingredientNode.innerHTML = ingredient.ingredient;

    tr.appendChild(checkboxNode);
    tr.appendChild(amountNode);
    tr.appendChild(ingredientNode);
    table.appendChild(tr);
});

amount.addEventListener('change', (e) => {
    const amount = e.target.valueAsNumber;
    for (let i = 1; i < table.children.length; i++) {
        const row = table.children[i];
        const ingredient = ingredients[i - 1];
        const newAmount = Math.round(ingredient.amount / 12 * amount * 100) / 100;
        row.children[1].innerHTML = `${newAmount} ${ingredient.unit}`;
    }
})
