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
let FinalSumCheese = 0;

// Toppings
const salami = ["Salami", 1];
const olives = ["Olives", 0.80];
const ruccola = ["Ruccola", 0.50];
const parmesan = ["Parmesan", 0.50];
let FinalSumToppings = 0;

// Extras
const oregano = ["Oregano", 0.30];
const garlicOil = ["Garlic Oil", 0.50];
const chilliOil = ["Chilli Oil", 0.40];
const rosemaryOil = ["Rosemary Oil", 0.70];
let FinalSumExtras = 0;

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

const addIngredient = () => {
    /**
     * on call, check which boxes are checked
     * add all checked to sumX
     * AFTER LOOP:
     * FinalSumX = sumX
     * call summing calculation
     */
    const checkBoxCheese = document.getElementsByName("cheese");
    const checkBoxToppings = document.getElementsByName("toppings");
    const checkBoxExtras = document.getElementsByName("extras");
    let sumCheese = 0;
    let sumToppings = 0;
    let sumExtras = 0;
    //
    for (let i = 0; i < checkBoxCheese.length; i++) {
        if (checkBoxCheese[i].checked) {
            sumCheese += 2;
        }
    }

    FinalSumCheese = sumCheese;
    FinalSumToppings = sumToppings;
    FinalSumExtras = sumExtras;

    finalSum();
}

const finalSum = () => {
    sumOnPage.textContent = sumPizza + sumCheese + sumToppings + sumExtras " €";
}
