const menu = [
  {
    id: 1,
    title: "Egusi Soup",
    category: "African",
    price: 4500,
    img: "./menu-images/Egusi-Soup-IG-1.jpg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "Fried rice",
    category: "Intercontinental",
    price: 4999,
    img: "./menu-images/fried-rice.jpg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 1800,
    img: "./menu-images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "Efo-Riro",
    category: "African",
    price: 5900,
    img: "./menu-images/Efo-riro.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "Jollof rice",
    category: "Intercontinental",
    price: 2999,
    img: "./menu-images/jollof-rice.jpg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 2590,
    img: "./menu-images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "Banga Soup",
    category: "African",
    price: 4999,
    img: "./menu-images/Banga-Soup.jpg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "Jollof Spaghetti",
    category: "Intercontinental",
    price: 2990,
    img: "./menu-images/jollof-spaghetti.jpg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 1290,
    img: "./menu-images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "bison steak",
    category: "Intercontinental",
    price: 8990,
    img: "./menu-images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Fries & Burger",
    category: "Italian",
    price: 4999,
    img: "./menu-images/item-2.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Pancake",
    category: "Italian",
    price: 6700,
    img: "./menu-images/item-1.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Beef Burger",
    category: "Italian",
    price: 2800,
    img: "./menu-images/item-5.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(".section-center");

const btnContainer = document.querySelector(".btn-container");

// let arrayBtn = [...filterButtons];
// arrayBtn = arrayBtn.join("");
// console.log(arrayBtn);

window.addEventListener("DOMContentLoaded", () => {
  showMenuInUi(menu);

  const categories = menu.reduce(
    function (initial, accumulator) {
      if (!initial.includes(accumulator.category)) {
        initial.push(accumulator.category);
      }
      return initial;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map((category) => {
      return `<button type="button" class="filter-btn" data-clickCategory=${category}>
      ${category}
      </button>`;
    })
    .join("");
  btnContainer.innerHTML = categoryBtns;
  const filterButtons = document.querySelectorAll(".filter-btn");
  filterForBtn(filterButtons);
});

function filterForBtn(filterBtn) {
  filterBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.clickcategory;
      const menuCategory = menu.filter((menuItems) => {
        if (menuItems.category === category) {
          return menuItems;
        }
      });
      if (category === "all") {
        showMenuInUi(menu);
      } else {
        showMenuInUi(menuCategory);
      }
    });
  });
}

const showMenuInUi = function (menuItems) {
  let displayMenu = menuItems.map((item) => {
    return `<article class="menu-item">
        <img src="${item.img}" alt="menu item" class="photo" />
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
            ${item.desc}
          </p>
        </div>
      </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
};

const student = {
  nameOfStudent: "Alex",
  class: "Jss3",
  height: "5ft",
};
