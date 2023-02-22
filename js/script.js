const products = [
    { name: "Mate Imperial", price: 6500 },
    { name: "Yerba Playadito", price: 600 },
    { name: "Termo Stanley", price: 20000 },
    { name: "Matera", price: 3500 },
    { name: "Bombilla Pico de Loro", price: 1500 },
];
let cart = []

let shopProducts = prompt("Bienvenido/a a BriMates, desea comprar algún producto? Por favor, responda si o no.")

if (shopProducts == "si") {
    let productList = products.map((products) => products.name + " - " + products.price + "$");
    alert(productList.join("\n"))
}