var artComprados = {};
let costInput = 0;
// let unitCost = 0;
let currency = "$"

function showCarrito (selectedProd){
    artComprados = selectedProd; //variable que trae la data del producto vendido del json
    let content = "";
    for (let i = 0; i < artComprados.articles.length; i++){ //recorre el array del producto comprado
        let carrito = artComprados.articles[i];
        let sub = currency+(carrito.unitCost * carrito.count); //variable para mostrar el subtotal
        content += `
        <td> <img class="img-fluid img-thumbnail" src="` + carrito.src + `" alt=""></td>
        <td> ` + carrito.name + ` </td>
        <td> ` + ` <input onchange="calcularSubTotal(${carrito.unitCost}, ${i})" type="number" value="${carrito.count}" class="form-control" id="productCostInput" placeholder="" required=""  min="0"> ` + `</td>
        <td id="unitCost${i}" style="font-size: 150%" class="text-left">`+ currency+`${carrito.unitCost}` + `</td>
        <td></td>
        <td><span style="font-size: 150%" class="subtotal" id="prodSubTotal${i}">${sub}</span></td>
        `;   
    }
    document.getElementById("carritoNuevo").innerHTML = content;
};

function calcularSubTotal (pUnitario, i){
    let costInput = parseInt(document.getElementById("productCostInput").value) //traigo value de la cantidad comprada
    subTotal = currency+pUnitario * costInput; //agrego moneda y multiplico cantidad comprada por precio
    document.getElementById(`prodSubTotal${i}`).innerHTML = subTotal //commit donde se muestra el subtotal
    calcularTotal(); //una vez tengo los subtotales, los suma
};

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(CART_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
        selectedProd = resultObj.data;
    }
    showCarrito(selectedProd);
    });
}); 

function calcularTotal(){
    let total = 0;
    let subs = document.getElementsByClassName("subtotal") 
    for (let i = 0; i < subs.length; i++){ //recorre array de subtotales
        total += (subs[i].innerHTML); //agrega a la variable total el subtotal de cada producto que agregue
    }
    document.getElementById("totales").innerHTML = total;
};


document.getElementById("finalizarCompra").addEventListener("click", function(){ //muestro mensaje de compra exitosa.
        getJSONData(CART_BUY_URL).then(function(resultObj){
            if (resultObj.status === "ok"){
            success = resultObj.data.msg
        }
        alert (success);
        });
    });