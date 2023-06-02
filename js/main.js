// Nguyễn Duy
// Menu Navbar Respontive
let menubar = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav-bar');
menubar.addEventListener('click', toggleBar);

function toggleBar() {
  navbar.classList.toggle('active');
}

// Header scroll and move on header
window.onscroll = () => {
  let header = document.querySelector(".header");
  let activeMovePage = document.querySelector(".active-move-page");

  let sticky = header.offsetTop;
  const divElement = document.createElement('div');

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    activeMovePage.classList.add("MovePage");
  } else {
    header.classList.remove("sticky");
    activeMovePage.classList.remove("MovePage");
  }
}

// Header user
let userNav = document.querySelector(".nav-bar-account");
document.querySelectorAll(".user-active").forEach(function (element) {
  element.addEventListener("click", user);
});

function user() {
  userNav.style.opacity = "1";
  userNav.style.display = "block";
}

document.getElementById("button-user").onclick = () => {
  userNav.style.opacity = "0";
  userNav.style.display = "none";
};

// Choose car vehicles
let sizeC = 2, localC = 0;
const images = document.querySelectorAll(".st3-car img");
document.querySelector("#choose-carR").onclick = () => {
  if (sizeC < 5) {
    localC += 49;
    sizeC += 1;
    if (sizeC != 5) {
      images.forEach((img) => {
        img.style.transform = `translateX(-${localC}rem)`;
      });
    }
    changeSAO(sizeC, '-');
  }
};

document.querySelector("#choose-carL").onclick = () => {
  if (sizeC >= 2) {
    localC -= 49;
    sizeC -= 1;
    images.forEach((img) => {
      img.style.transform = `translateX(-${localC}rem)`;
    });
    changeSAO(sizeC, '+');
  }
};

function changeSAO(value, operator) {
  document.getElementById(`imgcar${value}`).style.opacity = "1";
  document.getElementById(`imgcar${value}`).style.width = "40rem";
  document.getElementById(`imgcar${eval(value + operator + 1)}`).style.opacity = "0.5";
  document.getElementById(`imgcar${eval(value + operator + 1)}`).style.width = "36rem";
}

// Trường Sơn
// Blog 
function imgBlog(i) {
  document.getElementById("blog").style.backgroundImage = `url('./imagesBlog/xe${i}.jpeg')`;
}

// Car
function pickColor(i) {
  document.getElementById("Color").src = `./color_xe/${i}.png`;
}

// Xuân Trường
// Shop car 
document.getElementById('searchInput').addEventListener('input', function () {
  var searchValue = this.value.toLowerCase();
  var productItems = document.getElementsByClassName('Card');

  for (var i = 0; i < productItems.length; i++) {
    var productItem = productItems[i];
    var productName = productItem.querySelector('.Card_model-name').innerText.toLowerCase();
    var productPrice = productItem.querySelector('.Card_Number').innerText.toLowerCase();

    if (productName.indexOf(searchValue) > -1 || productPrice.indexOf(searchValue) > -1) {
      productItem.style.display = 'block';
    } else {
      productItem.style.display = 'none';
    }
  }
});

