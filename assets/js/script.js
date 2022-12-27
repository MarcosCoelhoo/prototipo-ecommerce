import initGetProducts from "./modules/get-products.js";
import initProductsCart from "./modules/products-cart.js";

// initGetProducts();
initProductsCart();

const btnsHeader = document.querySelectorAll("header nav a");

btnsHeader.forEach((btn) => {
  if (window.location.pathname.includes(btn.innerText.toLowerCase())) {
    btn.dataset.page = true;
  }
});
