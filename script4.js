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

data.forEach((item) => {
  if (!categories.includes(item.category)) {
    categories.push(item.category);
  }
});

categories.forEach((category) => {
  const section = document.createElement("section");
  section.innerHTML += `
      <div class="title">  
        <div class="title-name">${category}</div>
        <img src="img/background.jpeg" />
        <img src="img/background.jpeg" />
      </div>
  `;
  const newItems = data.filter((item) => item.category === category);
  newItems.forEach((item) => {
    section.innerHTML += `
      <div class="item">
        <div class="item-name">${item.name}</div>
        <div class="item-price">${item.price}$ /${item.unit}</div>
      </div>
  `;
  });
  mainDOM.appendChild(section);
});

// footer
let date = new Date().getFullYear();
let copy = document.getElementById("copy");
copy.innerHTML = `&copy; ${date}`;

//wp btn
const wpBtn = document.getElementById("wp-btn");
const appearPoint = window.innerHeight * 0.1;
window.addEventListener("scroll", () => {
  const scrollPosition = window.pageYOffset;
  if (scrollPosition >= appearPoint) {
    wpBtn.style.display = "flex";
  } else {
    wpBtn.style.display = "none";
  }
});

//dark light mode btn
const toggleBtn = document.getElementById("toggle-btn");
const sectionTitleImg1 = document.querySelectorAll(".header-img");
toggleBtn.addEventListener("click", handleClick);
function handleClick() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    toggleBtn.innerHTML = `<i class="fas fa-sun"></i>`;
    sectionTitleImg1.forEach((e) => (e.style.display = "none"));
  } else {
    toggleBtn.innerHTML = `<i class="fas fa-moon"></i>`;
    sectionTitleImg1.forEach((e) => (e.style.display = "flex"));
  }
}
