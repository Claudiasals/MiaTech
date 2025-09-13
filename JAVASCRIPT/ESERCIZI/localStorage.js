const elementButton = document.getElementById("set-button");
const elemenntPizza = document.getElementById("pizza");

const pizzaName = localStorage.getItem("my_prefered_pizza") || "";
elemenntPizza.innerText = pizzaName;

elementButton.addEventListener("click", function() {
    const pizzaName = promtp("Qual'è la tua pizza orefe?", "Pizza")
        localStorage.setItem("my_preferred_pizza", pizzaName);
        elemenntPizza.innerText = pizzaName
})