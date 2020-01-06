/**Script to configurate one's Pizza*/

// Each button passes it"s content (word) into a function call
// So there is only one function to actually pass the ingredients to the list (for each category)

/**********************************
 * Basic Setup of the ingredients
 *********************************/


//Dough
const dough = [["Our Classic Dough", 2]];
let finalDough = 0;

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
    let chosenDough = 0;
    let chosenSauce = 0;
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
            const newLi = document.createElement("li");

            if (typeof name[i][j] === "number") {
                newLi.innerHTML = `${(name[i][j]).toFixed(2)} €`;
            } else {
                newLi.innerHTML = name[i][j];
            }
            ul.insertAdjacentElement("beforeend", newLi);
        }
    }


    wipeList("#target-dough");
    wipeList("#target-sauce");
    wipeList("#target-cheese");
    wipeList("#target-toppings");
    wipeList("#target-extras");
    //
    //add dough to dom and sum
    //kept code kinda similar to the others to keep it consistent and open possibility for future options of different dough 
    for (let i = 0; i < dough.length; i++) {
        chosenDough = dough[i][1]; //for calculation of the finalSum
        addIngredient(i, "#target-dough", dough);//for showing up on the final-list
    }


    //evaluate sauce
    for (let i = 0; i < checkBoxSauce.length; i++) {
        if (checkBoxSauce[i].checked) {
            chosenSauce += sauce[i][1];
            addIngredient(i, "#target-sauce", sauce);
        }
    }
    //calculate cheese
    for (let i = 0; i < checkBoxCheese.length; i++) {
        if (checkBoxCheese[i].checked) {
            sumCheese += cheese[i][1];
            addIngredient(i, "#target-cheese", cheese);
        }
    }

    //calculate toppings
    for (let i = 0; i < checkBoxToppings.length; i++) {
        if (checkBoxToppings[i].checked) {
            sumToppings += toppings[i][1];
            addIngredient(i, "#target-toppings", toppings);
        }
    }

    //calculate extras
    for (let i = 0; i < checkBoxExtras.length; i++) {
        if (checkBoxExtras[i].checked) {
            sumExtras += extras[i][1];
            addIngredient(i, "#target-extras", extras);
        }
    }

    //passing chosen ingredients to outer variables
    finalDough = chosenDough;
    finalSauce = chosenSauce;
    finalSumCheese = sumCheese;
    finalSumToppings = sumToppings;
    finalSumExtras = sumExtras;

    finalSum();
}
//Calculate and display final prize in DOM
const finalSum = () => {
    const sumOnPage = document.querySelector("#target-sum");
    sumOnPage.textContent = `${(finalDough + finalSauce + finalSumCheese + finalSumToppings + finalSumExtras).toFixed(2)} €`;
}
//initial call for showing bas ingredients on loading page
fillList();