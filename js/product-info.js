var product = {};
let comentarios = {};
let relProducts = [];
function showImagesGallery(array){

    let htmlContentToAppend = "";

    for(let i = 0; i < array.length; i++){
        let imageSrc = array[i];

        htmlContentToAppend += `
        <div class="col-lg-3 col-md-4 col-6">
            <div class="d-block mb-4 h-100">
                <img class="img-fluid img-thumbnail" src="` + imageSrc + `" alt="">
            </div>
        </div>
        `

        document.getElementById("prodImagesGallery").innerHTML = htmlContentToAppend;
    }
};

document.addEventListener("DOMContentLoaded", function(e){
    getJSONData(PRODUCT_INFO_URL).then(function(resultObj){
        if (resultObj.status === "ok")
        {
            product = resultObj.data;

            let productNameHTML  = document.getElementById("productName");
            let productDescriptionHTML = document.getElementById("productDescription");
            let productCostHTML = document.getElementById("productCost");
        
            productNameHTML.innerHTML = product.name;
            productDescriptionHTML.innerHTML = product.description;
            productCostHTML.innerHTML = product.currency + ' ' + product.cost;

            //Muestro las imagenes en forma de galería
            showImagesGallery(product.images);
        }
    });
});

getJSONData(PRODUCT_INFO_COMMENTS_URL).then(function(resultObj){
    if (resultObj.status === "ok")
    {
        comentarios = resultObj.data;
        }
        showComments();
    });

document.addEventListener("DOMContentLoaded", function(){
    let userLogged = localStorage.getItem("User-Logged");
    if (userLogged){
        document.getElementById("newComCont").style = "display: inline block";
    }
})

function showComments (){
    let html = ""
    for(let i = comentarios.length - 1; i >=0; i--){
        let comment = comentarios [i];
        html += `<div class="text-lg-left">
        <dl>
        <dt>${comment.user} - `+`${comment.dateTime} `+` - ${rating(comment.score)} </dt>
        <dd>${comment.description}</dd>
        </dl>
        </div>`
    }
    document.getElementById("sComs").innerHTML = html;
};

function saveComment(){
    let date = new Date();
    let post = "";
    let structure = date.getDate().toString().padStart(2, `0`) + "/" + (date.getMonth() + 1).toString().padStart(2, `0`) + "/" + date.getFullYear().toString()+ " " + date.getHours() + ":" + date.getMinutes();
    post = { description: document.getElementById("newCom").value,
    dateTime: structure,
    score: document.getElementById("rating").value,
    user: JSON.parse(localStorage.getItem("User-Logged")).email,
    
    }
    comentarios.push(post);
    showComments();
}

function rating (stars){
    let num = parseInt(stars);
    let addHtml = "";
    for(let i = 1; i <=num; i++){
        addHtml += `<span class="fa fa-star checked" > </span>`
    }
    for(let s= num+1; s<=5; s++){
        addHtml += `<span class="fa fa-star " > </span>`
    }
    return addHtml;
}
