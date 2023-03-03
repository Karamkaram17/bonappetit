const data = [
  { name: "Sambousik", category: "Starters", price: 1 },
  { name: "Sambousik Djej", category: "Starters", price: 1 },
  { name: "Kabkoub", category: "Starters", price: 1 },
  { name: "Kabkoub Labniyeh", category: "Starters", price: 1 },
  { name: "Kabkoub bel jeben", category: "Starters", price: 1 },
  { name: "Re2a2at", category: "Starters", price: 1 },
  { name: "Re2a2at Sojo2", category: "Starters", price: 1 },
  { name: "Re2a2at Fahita", category: "Starters", price: 1 },
  { name: "Pizza", category: "Starters", price: 1 },
  { name: "Hot Dog", category: "Starters", price: 1 },
  { name: "Lahem 3ajin", category: "Starters", price: 1 },
  { name: "Hamburger", category: "Starters", price: 1 },
  { name: "Shawarma Djej", category: "Starters", price: 1 },
  { name: "Spring Rolls", category: "Starters", price: 1 },
  { name: "Ftayer Keshek", category: "Starters", price: 1 },
  { name: "Ftayer Sbenegh", category: "Starters", price: 1 },
  { name: "Kebbe mamdoude", category: "Kebbe", price: 1 },
  { name: "Kebbe Ma3 Basal w Loz", category: "Kebbe", price: 1 },
  { name: "Eres Kebbe Shahem", category: "Kebbe", price: 1 },
  { name: "Eres Kebbe lahem", category: "Kebbe", price: 1 },
  { name: "Salsa Harra", category: "Kebbe", price: 1 },
  { name: "Wara2 3enab zet", category: "Main", price: 1 },
  { name: "Wara2 3enab lahme", category: "Main", price: 1 },
  { name: "Kroket", category: "Main", price: 1 },
  { name: "Bajaxy", category: "Main", price: 1 },
  { name: "Crispy", category: "Main", price: 1 },
  { name: "Escaloppe", category: "Main", price: 1 },
  { name: "Fahita", category: "Main", price: 1 },
  { name: "Mahshe Sale2", category: "Main", price: 1 },
  { name: "Mahshe Malfouf", category: "Main", price: 1 },
  { name: "Shishbarak", category: "Main", price: 1 },
  { name: "Shishbarak Kbir", category: "Main", price: 1 },
  { name: "Ma3moul Joz", category: "Dessert", price: 1 },
  { name: "Ma3moul Tamer", category: "Dessert", price: 1 },
  { name: "Ma3moul Festok", category: "Dessert", price: 1 },
  { name: "Ma3kroun Sekar", category: "Dessert", price: 1 },
  { name: "Ma3kroun Joz", category: "Dessert", price: 1 },
  { name: "3waymet", category: "Dessert", price: 1 },
  { name: "Petit Four", category: "Dessert", price: 1 },
  { name: "Gateaux", category: "Dessert", price: 1 },
  { name: "Ka3k l 3arous", category: "Dessert", price: 1 },
  { name: "Kebbe Hemmos", category: "Lent", price: 1 },
  { name: "Tuna Pizza", category: "Lent", price: 1 },
  { name: "Fish Fingers", category: "Lent", price: 1 },
  { name: "Wara2 3enab zet", category: "Lent", price: 1 },
  { name: "Spring Rolls", category: "Lent", price: 1 },
  { name: "Ftayer Sbenegh", category: "Lent", price: 1 },
  { name: "Samke Harra", category: "Lent", price: 1 },
  { name: "Fish Escalope", category: "Lent", price: 1 },
  { name: "Kebbet Rahib", category: "Lent", price: 1 },
  { name: "Gateaux syeme", category: "Lent", price: 1 },
  { name: "Salade Crabe", category: "Salade", price: 1 },
  { name: "Greek Salade", category: "Salade", price: 1 },
  { name: "Pasta Salade", category: "Salade", price: 1 },
  { name: "Tabbouleh", category: "Salade", price: 1 },
  { name: "Fattoush", category: "Salade", price: 1 },
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
      
        <div class="title-name"> <img src="img/logo.jpeg" />${category}</div>
        <div class="title-op">/dozen <img src="img/logo.jpeg" /></div>
        
      </div>
  `;
  const newItems = data.filter((item) => item.category === category);
  newItems.forEach((item) => {
    section.innerHTML += `
      <div class="item">
        <div class="item-name">${item.name}</div>
        <div class="item-price">${item.price}$</div>
      </div>
  `;
  });
  mainDOM.appendChild(section);
});
