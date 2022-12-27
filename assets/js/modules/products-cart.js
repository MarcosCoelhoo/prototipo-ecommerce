export default function initProductsCart() {}

const listCart = document.querySelector(".products-cart");
let totalPrice = 0;

async function productsCart() {
  const jsonCart = await (await fetch("https://fakestoreapi.com/carts")).json();
  const productsTotalPrice = document.querySelector(".products-footer h3");

  await new Promise((resolve) => {
    jsonCart[1].products.forEach((item) => {
      console.log(item.productId);
      fetch(`https://fakestoreapi.com/products/${item.productId}`)
        .then((r) => r.json())
        .then((product) => {
          console.log(product);
          const li = document.createElement("li");
          totalPrice += product.price;
          productsTotalPrice.innerText = `Total: $ ${totalPrice}`;

          li.innerHTML = `
          <div class="product-image">
          <img src="${product.image}" alt="${product.title}" width="300px">
        </div>
        <div class="product-content">
          <div class="content-info">
            <h2 class="info-name">${product.title}</h2>
            <p>In stock ${product.rating.count}</p>
            <p>Category: ${product.category}</p>
          </div>
          <div class="content-price">
            <h3>$ ${product.price}</h3>
          </div>
        </div>
          `;

          listCart.appendChild(li);
        });
    });
  });
}
productsCart();
