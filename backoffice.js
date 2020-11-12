const url = "https://striveschool-api.herokuapp.com/api/product/"

window.onload = async () => {
    let urlParams = new URLSearchParams(window.location.search);
    id = urlParams.get("id");
    if (id) {
        let response = await fetch(url + id, {
            "headers": {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmFiZTc1NDRiY2RlMTAwMTc2MTZhYmQiLCJpYXQiOjE2MDUxMDEzOTYsImV4cCI6MTYwNjMxMDk5Nn0.4L61-jzRzehBUMfWi2WMJ8HBnpYAZyKtTPtM7wrzvyk"
            }
        });
        let product = await response.json();
        document.getElementById("name").value = product.name;
        document.getElementById("description").value = product.description;
        document.getElementById("brand").value = product.brand;
        document.getElementById("imageUrl").value = product.imageUrl;
        document.getElementById("price").value = product.price;
    }
};

function handleSubmit(event) {
    console.log("here")
    event.preventDefault()
    submitProduct();
};

const submitProduct = async () => {
    let productAdded = {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        brand: document.querySelector("#brand").value,
        imageUrl: document.querySelector("#imageUrl").value,
        price: document.querySelector("#price").value,
    };

    try {
        let response;
        if (id) {
            response = await fetch(url + id, {
                method: "PUT",
                body: JSON.stringify(productAdded),
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
            });
        } else {
            response = await fetch(url, {
                method: "POST",
                body: JSON.stringify(productAdded),
                headers: new Headers({
                    "Content-Type": "application/json",
                }),
            });
        }

        if (response.ok) {
            alert(`Product ${id ? "updated" : "added"} successfully`);
            location.assign("index.html");
        } else {
            alert("Something went wrong!");
        }
    } catch (error) {
        console.log(error);
    }
}