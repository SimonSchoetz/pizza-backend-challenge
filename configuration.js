/**Script to configurate one's Pizza*/

// Each button passes it"s content (word) into a function call
// So there is only one function to actually pass the ingredients to the list (for each category)

/**********************************
 * Basic Setup of the ingredients
 *********************************/


//Dough
const dough = ["Our classic dough", 2];

//Sauce
const sauce = [
    ["Tomato Sauce", 1],
    ["Créme Fresh", 1.50]
];
let finalSauce = 0;

// Cheese
const cheese = [
    ["Gauda", 1],
    ["Emmentaler", 1.50],
    ["Gorgonzola", 2]
];
let finalSumCheese = 0;

// Toppings
const toppings = [["Salami", 1],
["Olives", 0.80],
["Ruccola", 0.50],
["Parmesan", 0.50]
];
let finalSumToppings = 0;

// Extras
const extras = [
    ["Oregano", 0.30],
    ["Garlic Oil", 0.50],
    ["Chilli Oil", 0.40],
    ["Rosemary Oil", 0.70]
];
let finalSumExtras = 0;


//
/**********************************
 * Calculating and showing the sum
 *********************************/
const fillList = () => {
    /**
     * on call, check which boxes are checked
     * add all checked to sumX
     * AFTER LOOP:
     * FinalSumX = sumX
     * call summing calculation
     */
    const checkBoxSauce = document.getElementsByName("sauce");
    const checkBoxCheese = document.getElementsByName("cheese");
    const checkBoxToppings = document.getElementsByName("toppings");
    const checkBoxExtras = document.getElementsByName("extras");
    let chosenSauce = 0
    let sumCheese = 0;
    let sumToppings = 0;
    let sumExtras = 0;

    //Wipe for #final-list ul
    const wipeList = id => {
        const ul = document.querySelector(id);
        //Delete all li so they can be replaced with new ones
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
    //add ingredients to its dedicated ul
    const addIngredient = (i, id, name) => {

        const ul = document.querySelector(id);
        //Adds new li with content and displays it to DOM
        for (let j = 0; j < name[i].length; j++) {
            const newLiItem = document.createElement("li");
            const newItem = document.createTextNode(name[i][j]);
            //Somewhere here could be a loop to show number.toFixed(2) + " €"
            newLiItem.appendChild(newItem);
            ul.insertAdjacentElement("beforeend", newLiItem);
        }
    }
    //evaluate sauce
    for (let i = 0; i < checkBoxSauce.length; i++) {
        if (i === 0) {
            wipeList("#target-sauce");
        }
        if (checkBoxSauce[i].checked) {
            chosenSauce += sauce[i][1];
            addIngredient(i, "#target-sauce", sauce);
        }
    }
    //calculate cheese
    for (let i = 0; i < checkBoxCheese.length; i++) {
        if (i === 0) {
            wipeList("#target-cheese");
        }
        if (checkBoxCheese[i].checked) {
            sumCheese += cheese[i][1];
            addIngredient(i, "#target-cheese", cheese)
        }
    }

    //calculate toppings
    for (let i = 0; i < checkBoxToppings.length; i++) {
        if (checkBoxToppings[i].checked) {
            sumToppings += toppings[i][1];
        }
    }

    //calculate extras
    for (let i = 0; i < checkBoxExtras.length; i++) {
        if (checkBoxExtras[i].checked) {
            sumExtras += extras[i][1];
        }
    }

    //passing chosen ingredients to outer variables
    finalSauce = chosenSauce;
    finalSumCheese = sumCheese;
    finalSumToppings = sumToppings;
    finalSumExtras = sumExtras;

    finalSum();
}
//Calculate and display final prize in DOM
const finalSum = () => {
    const sumOnPage = document.querySelector("#target-sum");
    sumOnPage.textContent = (dough[1] + finalSauce + finalSumCheese + finalSumToppings + finalSumExtras).toFixed(2) + " €";
}
//initial call for showing bas ingredients on loading page
fillList();