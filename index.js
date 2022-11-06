const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItems");

const product = [
  {
    id: 1,
    title: "Air Force",
    price: 119,
    colors: [
      {
        code: "black",
        img: "/img/air.png",
      },
      {
        code: "darkblue",
        img: "/img/air2.png",
      },
    ],
  },

  {
    id: 2,
    title: "AIR Jordan",
    price: 149,
    colors: [
      {
        code: "lighgray",
        img: "/img/jordan.png",
      },
      {
        code: "green",
        img: "/img/jordan2.png",
      },
    ],
  },

  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "/img/blazer.png",
      },
      {
        code: "green",
        img: "/img/blazer2.png",
      },
    ],
  },

  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "/img/crater.png",
      },
      {
        code: "lightgray",
        img: "/img/crater2.png",
      },
    ],
  },

  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "/img/hippie2.png",
      },
    ],
  },
];

let chooseProduct = product[0];
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach(function (item, index) {
  item.addEventListener("click", function () {
    // ----------------current Slider----------------------------------------------------
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //   ----------------------choose Slider----------------------------------------------------
    chooseProduct = product[index];

    currentProductTitle.textContent = chooseProduct.title;
    currentProductImg.src = chooseProduct.colors[0].img;
    currentProductPrice.textContent = "$" + chooseProduct.price;

    currentProductColor.forEach(function (color, index) {
      color.style.background = chooseProduct.colors[index].code;
    });
  });
});

currentProductColor.forEach(function (color, index) {
  color.addEventListener("click", function () {
    currentProductImg.src = chooseProduct.colors[index].img;
  });
});

currentProductSizes.forEach(function (size, index) {
  size.addEventListener("click", function () {
    currentProductSizes.forEach(function (size) {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});
const close = document.querySelector(".close");
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");

productButton.addEventListener("click", function () {
  payment.style.display = "flex";
});
close.addEventListener("click", function () {
  payment.style.display = "none";
});
