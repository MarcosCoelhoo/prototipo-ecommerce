fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    const productsList = document.querySelector(".products-list");

    json.forEach((product) => {
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
              <button>Add to cart</button>
            </div>
          </div>
        `;

      productsList.appendChild(li);
    });
  });
