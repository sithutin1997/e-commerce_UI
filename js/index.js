// -------------------------- cart toggle function -----------------------------

function cartDropdown () {
  document.getElementById("dropDown").classList.toggle("show")
}

window.onclick = function(event) {
    if (!event.target.matches('.cart__icon')) {
      var dropdowns = document.getElementsByClassName("cart__detail");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
// ------------------ get thumbnail and main image elements --------------------
const mainImg = document.getElementById("mainImg");
const fullView = document.getElementById("fullView");
const thumbnailDiv = document.getElementsByClassName("product__thumbnail");
const thumbnailChildNodes = thumbnailDiv[0].childNodes;
const fullImg = document.getElementById("fullImg");
const imgAry = [1,2,3,4];
let imgIndex = 0;
const thumbnailImg = [];
thumbnailChildNodes.forEach(element => {
  if(element.localName == 'img') {
    thumbnailImg.push(element);
  }
});
const fullThumbnailDiv = document.getElementsByClassName("full-img-view__thumbnail");
const fullThumbnailChildNodes = fullThumbnailDiv[0].childNodes;
const fullThumbnail =[];
fullThumbnailChildNodes.forEach(element => {
  if(element.localName =='img') {
    fullThumbnail.push(element);
  }
})

// --------------------------- change img function -----------------------------
function changeImg(name) {
  for (let i = 0; i < 4; i++) {
    if(thumbnailImg[i].classList.contains("product__thumbnail--active")) {
      thumbnailImg[i].classList.remove("product__thumbnail--active")
    }
  }
    const idName = `img${name}`
    let thumbnail = document.getElementById(idName);
    mainImg.src = `./assets/images/image-product-${name}.jpg`
    thumbnail.classList.add("product__thumbnail--active");
}

function showFullImg() {
  for(let i = 0; i< 4; i++) {
    if(fullThumbnail[i].classList.contains("product__thumbnail--active")) {
      fullThumbnail[i].classList.remove("full-img-view__thumbnail--active")
    }
  }
  fullImg.src = mainImg.src
  fullView.classList.add("full-img-view--active")
}

function closeFullImg() {
  fullView.classList.remove("full-img-view--active");
}

function changeFullViewImg(name) {
  if(name == 'next') {
    imgIndex++;
    if(imgIndex < imgAry.length) {
      fullImg.src = `./assets/images/image-product-${imgAry[imgIndex]}.jpg`
    } else {
      imgIndex = 0;
      fullImg.src = `./assets/images/image-product-${imgAry[imgIndex]}.jpg`
    }
  }
  if(name == 'previous') {
    imgIndex--;
    if(imgIndex >= 0) {
      fullImg.src = `./assets/images/image-product-${imgAry[imgIndex]}.jpg`
    }else {
      imgIndex = 3
      fullImg.src = `./assets/images/image-product-${imgAry[imgIndex]}.jpg`
    }
  }
}