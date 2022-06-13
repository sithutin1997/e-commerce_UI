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
const thumbnailDiv = document.getElementsByClassName("product__thumbnail");
const thumbnailChildNodes = thumbnailDiv[0].childNodes;
const thumbnailImg = [];
thumbnailChildNodes.forEach(element => {
  if(element.localName == 'img') {
    thumbnailImg.push(element);
  }
});

// --------------------------- change img function -----------------------------
function changeImg(name) {
  for (let i = 0; i < 4; i++) {
    if(thumbnailImg[i].classList.contains("product__thumbnail--active")) {
      thumbnailImg[i].classList.remove("product__thumbnail--active")
    }
  }
    const idName = `img${name}`
    const thumbnail = document.getElementById(idName);
    thumbnail.classList.add("product__thumbnail--active")
    mainImg.src = `./assets/images/image-product-${name}.jpg`
}

function showFullImg() {
  console.log(mainImg)
}