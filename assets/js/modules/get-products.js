export default function initGetProducts() {
  function getProducts() {
    fetch("https://fakestoreapi.com/products")
      .then((r) => r.json())
      .then((jsonProduct) => {
        const productsList = document.querySelector(".products-list");

        jsonProduct.forEach((product) => {
          const li = document.createElement("li");
          li.innerHTML = `
               <div class="product-image">
                     <img
                    src="${product.image}"
                    alt="">
                   <span class="product-rate">${product.rating.rate}<i class="fi fi-rr-star"></i></span>
                </div>
                <div class="product-content">
                  <div class="product-info">
                    <h3>${product.title}</h3>
                    <p>$ ${product.price}</p>
                    <p>In stock ${product.rating.count}</p>
                  </div>
                  <div class="product-button">
                    <button >Add to cart</button>
                  </div>
                </div>
              `;

          productsList.appendChild(li);
        });

        const btns = document.querySelectorAll(".product-button button");

        btns.forEach((item) => {
          item.addEventListener("click", () => {
            if (item.classList.contains("added")) {
              item.classList.remove("added");
              item.innerText = "Add to cart";
            } else {
              item.classList.add("added");
              item.innerText = "Remove to cart";
            }
          });
        });
      });
  }
  getProducts();
}
