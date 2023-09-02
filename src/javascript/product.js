let mainImage = document.getElementById("images-item__main");
let imagesList = document.getElementsByClassName("images__item");

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
