"use strict";

document.addEventListener("DOMContentLoaded", function() {
    const indicatorLight = document.getElementById("indicatorLight");
    const liquidCoffe = document.getElementById("liquidCoffee");
    const liquidMilk = document.getElementById("liquidMilk");
    const mainCup = document.getElementById("mainCup");

    const coffeeChoice = document.querySelectorAll(".menu__item")

    coffeeChoice.forEach(coffeChoice => {
        coffeChoice.addEventListener('click', () => {
            const choice = coffeChoice.dataset.type;
            console.log(mainCup.dataset.choice);
            // check if a coffee is served and initialize
            if(mainCup.dataset.choice === "empty") {
                indicatorLight.dataset.light = true;
                liquidCoffe.dataset.flowing = true;

                if(choice === 'latte' || choice === 'cappuccino') {
                    liquidMilk.dataset.flowing = true;
                }

                mainCup.dataset.choice = choice;

                console.log(mainCup.dataset.choice);
                // check when animation 'fill' end
                mainCup.addEventListener('animationend', (e) => {
                indicatorLight.dataset.light = false;
            });
            } else {
                // reset css and animation
                indicatorLight.dataset.light = false;
                liquidCoffe.dataset.flowing = false;
                liquidMilk.dataset.flowing = false;
                mainCup.dataset.choice = "empty";
            }



            
        });
    });
});