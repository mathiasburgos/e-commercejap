//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function (e) {
    const URL = "https://japdevdep.github.io/ecommerce-api/product/all.json";
        document.getElementById("autos").innerHTML = ""
        fetch (URL)
        .then(response1 => response1.json())
        .then ((datos) => {
            for (let i= 0; i < datos.length; i++) {
                autos.innerHTML += `
                <tr>
                    <td>`+ datos[i].name + ` </td>;
                    <td>`+ datos[i].description + ` </td>;
                    <td>`+ datos[i].cost +` </td>;
                    </tr>`
            }
        })
        .catch(error => alert("Hubo un error: " + error));
});