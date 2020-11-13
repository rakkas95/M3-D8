let id;
const url = "https://striveschool-api.herokuapp.com/api/product/";

window.onload = async () => {
    let urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get("id");

    try {
        let response = await fetch(url + id, {
            "headers": {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTc1NDRiY2RlMTAwMTc2MTZhYmQiLCJpYXQiOjE2MDUxMDEzOTYsImV4cCI6MTYwNjMxMDk5Nn0.4L61-jzRzehBUMfWi2WMJ8HBnpYAZyKtTPtM7wrzvyk"
            }
        });
        let product = await response.json();
        console.log(product)
        let element = document.createElement('div');
        element.classList.add("col-xs-12", "col-md-4", "align-items-center");
        element.innerHTML = `
        <div class="card" style="width: 18rem;">
            <img src=${product.imageUrl} class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</span></p>
                    <span>${product.brand}</span> <span>${product.price}
                </div>
        </div>` ;
        document.querySelector("#details").appendChild(element);
    } catch (error) {
        alert("something went wrong");
        console.log(error);
    }
};

const handleDelete = async () => {
    try {
        const response = await fetch(url + id, {
            method: "DELETE",
            "headers": {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTc1NDRiY2RlMTAwMTc2MTZhYmQiLCJpYXQiOjE2MDUxMDEzOTYsImV4cCI6MTYwNjMxMDk5Nn0.4L61-jzRzehBUMfWi2WMJ8HBnpYAZyKtTPtM7wrzvyk"
            }
        });
      if (response.ok) {
        // checking the ok property which stores the successful result of the operation
        alert("Event deleted successfully");
        location.assign("index.html");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.log(error);
    }
};
  
const handleEdit = () => {
    location.href = "backoffice.html?id=" + id;
  };