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
    let productList = products.map((product) => product.name + " - " + product.price + "$");
    alert(productList.join("\n"))
} else if (shopProducts == "no") {
    alert("Gracias, vuelva pronto!")
}
while (shopProducts != "no") {
    let product = prompt("Seleccione un producto que desee.")
    let price = 0
    if (product == "Mate Imperial" || product == "Yerba Playadito" || product == "Termo Stanley" || product == "Matera" || product == "Bombilla Pico de Loro") {
        switch (product) {
            case "Mate Imperial":
                price = 6500;
                break;
            case "Yerba Playadito":
                price = 600;
                break;
            case "Termo Stanley":
                price = 20000;
                break;
            case "Matera":
                price = 3500;
                break;
            case "Bombilla Pico de Loro":
                price = 1500;
                break;
            default:
                break;
        }
        let amount = parseInt(prompt("Cuantas unidades desea?"))
        cart.push({ products, amount, price })
    } else {
        alert("Ese producto no existe. Vuelva a seleccionar!")
    }
    shopProducts = prompt("Necesita algo mas?")
    while (shopProducts === "no") {
        alert("Gracias por su compra. Vuelva pronto!")
        break
    }
}
const finalTotal = cart.reduce((acc, el) => acc + el.price * el.amount, 0)
alert(`Su total a pagar es de $${finalTotal}.`)