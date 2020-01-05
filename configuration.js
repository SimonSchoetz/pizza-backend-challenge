/**Script to configurate one"s Pizza*/

// Each button passes it"s content (word) into a function call
// So there is only one function to actually pass the ingredients to the list (for each category)

/**********************************
 * Basic Setup of the ingredients
 *********************************/
//Sauce
const tomatoSauce = ["Tomato Sauce", 1];
const cremeFresh = ["Créme Fresh", 1.50];

// Cheese
const gauda = ["Gauda", 1];
const emmentaler = ["Emmentaler", 1.50];
const gorgonzola = ["Gorgonzola", 2];
let sumCheese = 0;

// Toppings
const salami = ["Salami", 1];
const olives = ["Olives", 0.80];
const ruccola = ["Ruccola", 0.50];
const parmesan = ["Parmesan", 0.50];

// Extras
const oregano = ["Oregano", 0.30];
const garlicOil = ["Garlic Oil", 0.50];
const chilliOil = ["Chilli Oil", 0.40];
const rosemaryOil = ["Rosemary Oil", 0.70];

//Dough
const dough = ["Dough", 2];

//
/**********************************
 * Calculating and showing the sum
 *********************************/

//Initialize sum on first load
let sumPizza = dough[1];
const sumOnPage = document.querySelector("#target-sum");
sumOnPage.textContent = sumPizza + " €";

// document.getElementsByName("cheese").onchange = () => {
//     addCheese()
// };

const addCheese = () => {
    /**
     * on call, check which boxes are checked
     * add all checked to sum
     * AFTER LOOP:
     * sumCheese = sum
     * call summing calculation
     */
    const checkBox = document.getElementsByName("cheese");
    let sumOfPart = 0

    for (let i = 0; i < checkBox.length; i++) {
        if (checkBox[i].checked) {
            sumOfPart += 2;
        }
    }

    sumCheese = sumOfPart;

    finalSum();
}

const finalSum = () => {
    sumOnPage.textContent = sumPizza + sumCheese + " €";
}
