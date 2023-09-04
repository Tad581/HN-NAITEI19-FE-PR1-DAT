const productsId = document.getElementById("products-list__products");

const currentPage = 1;

const renderProducts = async () => {
  while (productsId.lastElementChild) {
    productsId.removeChild(productsId.lastElementChild);
  }

  const category = localStorage.getItem("filterKeyword");

  const fetchUrl =
    category !== "all"
      ? `http://localhost:3000/products?category=${category}&_page${currentPage}&_limit=9`
      : `http://localhost:3000/products?_page${currentPage}&_limit=9`;
  const response = await fetch(fetchUrl);
  const products = await response.json();
  console.log(
    "🚀 ~ file: product.js:17 ~ renderProducts ~ fetchUrl:",
    fetchUrl
  );

  products.forEach((product) => {
    const productNode = document.createElement("div");
    productNode.id = `productID-${product.id}`;
    productNode.classList.add("product-thumbnail");
    productNode.classList.add("col-12");
    productNode.classList.add("col-md-4");

    productNode.innerHTML = `<img src="${product.images[0]}" alt="product"class="d-block w-100"/><div class="product-info product-info--center"><a class="product-title product-title--new-size" href="#">${product.name}</a><p class="product-price">${product.prices[0]} <span>đ</span></p><div class="drink-btn"><a href="#">Add to cart</a></div></div>`;
    productsId.appendChild(productNode);
  });

  localStorage.setItem("filterKeyword", "all");
};

renderProducts();

const categoryList = document.getElementsByClassName("category-items__name");

for (let i = 0; i < categoryList.length; i++) {
  const filterKeyword = categoryList[i].getAttribute("data-custom-value");

  categoryList[i].onclick = () => {
    for (let i = 0; i < categoryList.length; i++) {
      if (categoryList[i].classList.contains("active")) {
        categoryList[i].classList.remove("active");
      }
    }
    categoryList[i].classList.add("active");
    localStorage.setItem("filterKeyword", filterKeyword);
    renderProducts();
  };
}
