const ORDER_ASC_BY_COST = "Asc";
const ORDER_DESC_BY_COST = "Des";
const ORDER_BY_SOLD_PROD = "Cant.";
var currentProductsArray = [];
var currentSortCriteria = undefined;
var minCount = undefined;
var maxCount = undefined;

function sortProducts(criteria, array){
    let result = [];
    if (criteria === ORDER_ASC_BY_COST){ //orden ascendente por costo
        result = array.sort(function(a, b) {
            if ( a.cost < b.cost ){ return -1; }
            if ( a.cost > b.cost ){ return 1; }
            return 0;
        });
    }else if (criteria === ORDER_DESC_BY_COST){ //orden descendente por costo
        result = array.sort(function(a, b) {
            if ( a.cost > b.cost ){ return -1; };
            if ( a.cost < b.cost ){ return 1; };
            return 0;
        });
    }else if (criteria === ORDER_BY_SOLD_PROD){ //orden por prod vendidos
        result = array.sort(function(a, b) {
            let aCount = parseInt(a.soldCount);
            let bCount = parseInt(b.soldCount);

            if ( aCount > bCount ){ return -1; };
            if ( aCount < bCount ){ return 1; };
            return 0;
        });
    };

    return result;
};

function showProductsList(){ //carga los productos, si se cumple con condicion de precios

    let htmlContentToAppend = "";
    for(let i = 0; i < currentProductsArray.length; i++){
        let product = currentProductsArray[i];

        if (((minCount == undefined) || (minCount != undefined && parseInt(product.cost) >= minCount)) &&
            ((maxCount == undefined) || (maxCount != undefined && parseInt(product.cost) <= maxCount))) {

                htmlContentToAppend += `
                    <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
                        <a href="product-info.html" class="card mb-4 shadow-sm custom-card border-0">
                            <img class="bd-placeholder-img card-img-top" src="` + product.imgSrc + `">
                            <h3 class="card-title">`+ product.name +`</h3>
                        <div class="card-body">
                            <p class="card-subtitle">` + product.currency + " " + product.cost + `</p>
                            <p class="card-text">` + product.description + `</p>
                        </div>
                    </div>
                `
            }

        document.getElementById("prod-list-container").innerHTML = htmlContentToAppend; //agrega al id del product.html
    }
}



function sortAndShowProducts(sortCriteria, productsArray){
        currentSortCriteria = sortCriteria;
    
        if(productsArray != undefined){
            currentProductsArray = productsArray;
        }
    
        currentProductsArray = sortProducts(currentSortCriteria, currentProductsArray);
    
        
        showProductsList();
    };
    
document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCTS_URL).then(function(resultObj){
        if (resultObj.status === "ok"){
            sortAndShowProducts(ORDER_ASC_BY_COST, resultObj.data);
        }
    });

    document.getElementById("sortAsc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_ASC_BY_COST);
    });

    document.getElementById("sortDesc").addEventListener("click", function(){
        sortAndShowProducts(ORDER_DESC_BY_COST);
    });

    document.getElementById("sortByCount").addEventListener("click", function(){
        sortAndShowProducts(ORDER_BY_SOLD_PROD);
    });

    document.getElementById("clearRangeFilter").addEventListener("click", function(){
        document.getElementById("rangeFilterCountMin").value = "";
        document.getElementById("rangeFilterCountMax").value = "";

        minCount = undefined;
        maxCount = undefined;

        showProductsList();
    });
    document.getElementById("rangeFilterCount").addEventListener("click", function(){
        //Obtengo el mínimo y máximo de los intervalos para filtrar por cantidad
        //de productos por categoría.
        minCount = document.getElementById("rangeFilterCountMin").value;
        maxCount = document.getElementById("rangeFilterCountMax").value;
    
        if ((minCount != undefined) && (minCount != "") && (parseInt(minCount)) >= 0){
            minCount = parseInt(minCount);
        }
        else{
            minCount = undefined;
        }
    
        if ((maxCount != undefined) && (maxCount != "") && (parseInt(maxCount)) >= 0){
            maxCount = parseInt(maxCount);
        }
        else{
            maxCount = undefined;
        }
    
        showProductsList();
    });
});
