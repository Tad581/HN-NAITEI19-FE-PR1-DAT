const renderProduct = async () => {
  const productId = localStorage.getItem("productId");

  const fetchUrl = `http://localhost:3000/products/${productId}`;
  const response = await fetch(fetchUrl);
  const product = await response.json();

  const nameNode = document.getElementById("product-name");
  nameNode.innerHTML = `${product.name} <img src="./img/thumbs/titleleft-dark.png" alt="title left dark"/>`;

  const priceNode = document.getElementById("product-price");
  priceNode.innerHTML = `${product.prices[0]}<span>đ</span>`;

  const imageListNode = document.getElementById("product-images-list");

  imageListNode.innerHTML = `<img src="${product.images[0]}" alt="wine" class="images__item" />
  <img src="${product.images[1]}" alt="wine" class="images__item" />
  <img src="${product.images[2]}" alt="wine" class="images__item" />
  <img src="${product.images[3]}" alt="wine" class="images__item" />
  <img src="${product.images[4]}" alt="wine" class="images__item" />`;

  const imageNode = document.getElementById("product-image");
  imageNode.innerHTML = `<img src="${product.images[0]}" alt="wine" id="images-item-main"  />`;
};

renderProduct();

setTimeout(() => {
  const mainImage = document.getElementById("images-item-main");
  const imagesList = document.getElementsByClassName("images__item");

  imagesList[0].onclick = () => {
    mainImage.src = imagesList[0].src;
  };

  imagesList[1].onclick = () => {
    mainImage.src = imagesList[1].src;
  };

  imagesList[2].onclick = () => {
    mainImage.src = imagesList[2].src;
  };

  imagesList[3].onclick = () => {
    mainImage.src = imagesList[3].src;
  };

  imagesList[4].onclick = () => {
    mainImage.src = imagesList[4].src;
  };
}, 1000);
