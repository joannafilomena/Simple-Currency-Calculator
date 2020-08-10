let pln = document.getElementsByClassName("js-pln");
let usd = document.getElementsByClassName("js-usd");
let eur = document.getElementsByClassName("js-eur");
let money = document.querySelector(".js-money");
let sum = document.querySelector(".js-sum");
let val = document.getElementsByClassName("js-val");
let button = document.querySelector("button");
let select1 = document.querySelector(".js-select1");
let select2 = document.querySelector(".js-select2");


button.addEventListener("click", (event) => {
    event.preventDefault();
    if (select1.children.hasClass("js-pln") && select2.children.hasClass("js-usd")) {
        suma = 0;
        suma = money.value * 4;
        sum.innerText = parseFloat(suma).toFixed(2);
    };  
});