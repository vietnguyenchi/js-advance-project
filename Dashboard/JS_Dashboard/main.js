var home = document.querySelector("#dashboard_home");
var product_list = document.querySelector("#product_list");
var add_button = document.querySelector("#add_button");
var content_dashboard = document.querySelector(".content_dashboard");
var content_product = document.querySelector(".content_product");
var add_product = document.querySelector(".add_product");

home.addEventListener('click', () => {
    content_dashboard.style.display = "grid";
    content_product.style.display = "none";
    add_product.style.display = "none";
});

product_list.addEventListener('click', () => {
    content_dashboard.style.display = "none";
    content_product.style.display = "block";
    add_product.style.display = "none";
});

add_button.addEventListener('click', () => {
    content_dashboard.style.display = "none";
    content_product.style.display = "none";
    add_product.style.display = "block";
});