/**Script to configurate one's Pizza*/

// Each button passes it"s content (word) into a function call
// So there is only one function to actually pass the ingredients to the list (for each category)

/**********************************
 * Basic Setup of the ingredients
 *********************************/



//Sauce
const sauce = [["Tomato Sauce", 1], ["Créme Fresh", 1.50]];
let finalSauce = 0;

// Cheese
const cheese = [["Gauda", 1], ["Emmentaler", 1.50], ["Gorgonzola", 2]];
let finalSumCheese = 0;

// Toppings
const salami = ["Salami", 1];
const olives = ["Olives", 0.80];
const ruccola = ["Ruccola", 0.50];
const parmesan = ["Parmesan", 0.50];
let finalSumToppings = 0;

// Extras
const oregano = ["Oregano", 0.30];
const garlicOil = ["Garlic Oil", 0.50];
const chilliOil = ["Chilli Oil", 0.40];
const rosemaryOil = ["Rosemary Oil", 0.70];
let finalSumExtras = 0;

//Dough
const dough = ["Dough", 2];
//
/**********************************
 * Calculating and showing the sum
 *********************************/
const addIngredient = () => {
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

    //add sauce in DOM
    const addSauce = (i) => {
        const newLiItem = document.createElement("li");
        const newItem = document.createTextNode(sauce[i][0]);
        newLiItem.appendChild(newItem);
        const newLiPrize = document.createElement("li");
        const newPrize = document.createTextNode(sauce[i][1]);
        newLiPrize.appendChild(newPrize);

        const ul = document.querySelector("#target-sauce");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        ul.insertAdjacentElement("beforeend", newLiItem);
        ul.insertAdjacentElement("beforeend", newLiPrize);
    }
    //evaluate sauce
    for (let i = 0; i < checkBoxSauce.length; i++) {
        if (checkBoxSauce[i].checked) {
            chosenSauce += sauce[i][1];
            addSauce(i);
        }
    }


    //calculate cheese
    for (let i = 0; i < checkBoxCheese.length; i++) {
        if (checkBoxCheese[i].checked) {
            sumCheese += cheese[i][1];
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
    sumOnPage.textContent = dough[1] + finalSauce + finalSumCheese + finalSumToppings + finalSumExtras + " €";
}
//initial call for showing bas ingredients on loading page
addIngredient();