const data = [
  { name: "Sambousik", category: "Starters", unit: "Dozen", price: 1 },
  {
    name: "Sambousik Djej",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  { name: "Kabkoub", category: "Starters", unit: "Dozen", price: 1 },
  {
    name: "Kabkoub Labniyeh",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Kabkoub bel jeben",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  { name: "Re2a2at", category: "Starters", unit: "Dozen", price: 1 },
  {
    name: "Re2a2at Sojo2",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Re2a2at Fahita",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  { name: "Pizza", category: "Starters", unit: "Dozen", price: 1 },
  { name: "Hot Dog", category: "Starters", unit: "Dozen", price: 1 },
  {
    name: "Lahem 3ajin",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  { name: "Hamburger", category: "Starters", unit: "Dozen", price: 1 },
  {
    name: "Shawarma Djej",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Spring Rolls",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Ftayer Keshek",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Ftayer Sbenegh",
    category: "Starters",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Kebbe mamdoude",
    category: "Kebbe",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Kebbe Ma3 Basal w Loz",
    category: "Kebbe",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Eres kebbe Shahem",
    category: "Kebbe",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Eres kebbe lahem",
    category: "Kebbe",
    unit: "Dozen",
    price: 1,
  },
  { name: "Salsa Harra", category: "Kebbe", unit: "Dozen", price: 1 },
  { name: "Wara2 3enab zet", category: "Main", unit: "kg", price: 1 },
  { name: "Wara2 3enab lahme", category: "Main", unit: "kg", price: 1 },
  { name: "Kroket", category: "Main", unit: "kg", price: 1 },
  { name: "Bajaxy", category: "Main", unit: "kg", price: 1 },
  { name: "Crispy", category: "Main", unit: "kg", price: 1 },
  { name: "Escaloppe", category: "Main", unit: "kg", price: 1 },
  { name: "Fahita", category: "Main", unit: "kg", price: 1 },
  { name: "Mahshe Sale2", category: "Main", unit: "kg", price: 1 },
  { name: "Mahshe Malfouf", category: "Main", unit: "kg", price: 1 },
  { name: "Shishbarak", category: "Main", unit: "100 pc", price: 1 },
  {
    name: "Shishbarak Kbir",
    category: "Main",
    unit: "100 pc",
    price: 1,
  },
  { name: "Ma3moul Joz", category: "Dessert", unit: "Dozen", price: 1 },
  {
    name: "Ma3moul Tamer",
    category: "Dessert",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Ma3moul Festok",
    category: "Dessert",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Ma3kroun Sekar",
    category: "Dessert",
    unit: "Dozen",
    price: 1,
  },
  {
    name: "Ma3kroun Joz",
    category: "Dessert",
    unit: "Dozen",
    price: 1,
  },
  { name: "3waymet", category: "Dessert", unit: "Dozen", price: 1 },
  { name: "Petit Four", category: "Dessert", unit: "Dozen", price: 1 },
  { name: "Gateaux", category: "Dessert", unit: "Dozen", price: 1 },
  {
    name: "Ka3k l 3arous",
    category: "Dessert",
    unit: "Dozen",
    price: 1,
  },
  { name: "Kebbe Hemmos", category: "Lent", unit: "Dozen", price: 1 },
  { name: "Tuna Pizza", category: "Lent", unit: "Dozen", price: 1 },
  { name: "Fish Fingers", category: "Lent", unit: "Dozen", price: 1 },
  {
    name: "Wara2 3enab zet",
    category: "Lent",
    unit: "Dozen",
    price: 1,
  },
  { name: "Spring Rolls", category: "Lent", unit: "Dozen", price: 1 },
  { name: "Ftayer Sbenegh", category: "Lent", unit: "Dozen", price: 1 },
  { name: "Samke Harra", category: "Lent", unit: "Dozen", price: 1 },
  { name: "Fish Escalope", category: "Lent", unit: "Dozen", price: 1 },
  { name: "Kebbet Rahib", category: "Lent", unit: "Dozen", price: 1 },
  { name: "Gateaux syeme", category: "Lent", unit: "Dozen", price: 1 },
  { name: "Salade Crabe", category: "Salade", unit: "Dozen", price: 1 },
  { name: "Greek Salade", category: "Salade", unit: "Dozen", price: 1 },
  { name: "Pasta Salade", category: "Salade", unit: "Dozen", price: 1 },
  { name: "Tabbouleh", category: "Salade", unit: "Dozen", price: 1 },
  { name: "Fattoush", category: "Salade", unit: "Dozen", price: 1 },
];

const mainDOM = document.getElementById("main");
const categories = [];
const units = [];

data.forEach((item) => {
  if (!categories.includes(item.category)) {
    categories.push(item.category);
    units.push(item.unit);
  }
});

categories.forEach((category) => {
  const section = document.createElement("section");
  section.innerHTML += `
      <div class="title">  
        <div class="title-name">
          <img src="img/logo.jpeg" />
          ${category}
          <span  class="inv">_</span> 
        </div>
        <div class="title-op">
          /${units[categories.indexOf(category)]} 
          <img src="img/logo.jpeg" />
        </div>
      </div>
  `;
  const newItems = data.filter((item) => item.category === category);
  newItems.forEach((item) => {
    section.innerHTML += `
      <div class="item">
        <div class="item-name">${item.name}</div>
        <div class="item-name">/${item.unit}</div>
        <div class="item-price">${item.price}$</div>
      </div>
  `;
  });
  mainDOM.appendChild(section);
});

const bgDOM = document.getElementById("bg");
const headerDOM = document.getElementById("header");

window.addEventListener("scroll", function () {
  var topPosition = headerDOM.getBoundingClientRect().top;

  if (topPosition <= 0 + window.innerHeight / 4) {
    bgDOM.style.display = "flex";
  } else {
    bgDOM.style.display = "none";
  }
});
