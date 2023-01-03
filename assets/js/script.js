import initProducts from "./modules/products.js";
import initProductsCart from "./modules/products-cart.js";
import initAccountInfo from "./modules/account.js";

initProducts();
initProductsCart();
initAccountInfo();

const btnsHeader = document.querySelectorAll("header nav a");

btnsHeader.forEach((btn) => {
  if (window.location.pathname.includes(btn.innerText.toLowerCase())) {
    btn.dataset.page = true;
  }
});
