window.onload = async () => {
const url = "https://striveschool-api.herokuapp.com/api/product/";
let productItems = document.getElementById('productItems');

try {
    let response = await fetch("https://striveschool-api.herokuapp.com/api/product/", {
        "headers": {
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTc1NDRiY2RlMTAwMTc2MTZhYmQiLCJpYXQiOjE2MDUxMDEzOTYsImV4cCI6MTYwNjMxMDk5Nn0.4L61-jzRzehBUMfWi2WMJ8HBnpYAZyKtTPtM7wrzvyk"
        }
    });
    let productData = await response.json();
    console.log(productData);

    if(productData.length > 0) {
        productData.forEach( (pD) => {
            let columnItem = document.createElement('div');
        columnItem.classList.add("col-xs-12", "col-md-3", 'd-flex', 'justify-content-between');
        columnItem.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src=${pD.imageUrl} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${pD.name}</h5>
                    <p class="card-text">${pD.description}</span></p>
                    <span>${pD.brand}</span> <span>${pD.price}
                    <a  class="btn btn-primary" href="product.html?id=${pD._id}">view product</a>
                </div>
        </div>` ;
        productItems.appendChild(columnItem) ; 
        });
    } else {
        productItems.innerHTML = "<h1>No products found"
    }

    } catch (error) {
    alert (error);
    }
};




