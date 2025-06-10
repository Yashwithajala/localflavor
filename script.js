const data = {
  "Andhra Pradesh": [
    {
      name: "Andhra Chicken Curry",
      image: "https://i.pinimg.com/736x/8c/23/f3/8c23f3cabfaf3aaf1e18ee27edfde5ab.jpg",
      recipe: "https://www.indianhealthyrecipes.com/andhra-chicken-curry/"
    },
    {
      name: "Gongura Pachadi",
      image: "https://i.pinimg.com/736x/44/70/ab/4470abb750a7c534e8f895df44678039.jpg",
      recipe: "https://www.indianhealthyrecipes.com/gongura-pachadi-recipe/"
    }
  ],
  "Telangana": [
    {
      name: "Sakinalu",
      image: "https://i.pinimg.com/736x/e4/c5/43/e4c54310fdaf987a6a1946b9df2bc3e0.jpg",
      recipe: "https://www.blendwithspices.com/telangana-sakinalu-recipe/"
    },
    {
      name: "Hyderabadi Biryani",
      image: "https://i.pinimg.com/736x/6a/cc/f3/6accf3cefbe7f9779d151e3696018990.jpg",
      recipe: "https://www.indianhealthyrecipes.com/hyderabadi-biryani-recipe/"
    }
  ],
  "Tamil Nadu": [
    {
      name: "Sambar Idly",
      image: "https://i.pinimg.com/736x/cd/b5/86/cdb586501301fbc609ebcfda412e074a.jpg",
      recipe: "https://www.indianhealthyrecipes.com/idli-sambar-recipe-tiffin-sambar/"
    },
    {
      name: "Idiyappam",
      image: "https://i.pinimg.com/736x/cc/cd/9b/cccd9b7be85563ba1d5c4e57e215fcab.jpg",
      recipe: "https://www.indianhealthyrecipes.com/idiyappam-recipe/"
    }
  ],
  "Kerala": [
    {
      name: "Kerala Sadya",
      image: "https://i.pinimg.com/736x/4a/81/5e/4a815ebd8dcce609e2ffbff089570e5f.jpg",
      recipe: "https://www.vegrecipesofindia.com/onam-sadya-recipes/"
    },
    {
      name: "Appam with Stew",
      image: "https://i.pinimg.com/736x/cc/85/38/cc853841501d70f13d4e9ece7a204226.jpg",
      recipe: "https://www.indianhealthyrecipes.com/appam-recipe/"
    }
  ],
  "Karnataka": [
    {
      name: "Bisi Bele Bath",
      image: "https://i.pinimg.com/736x/e2/7a/90/e27a90d1282c1091dbf86a93adf7492c.jpg",
      recipe: "https://www.vegrecipesofindia.com/bisi-bele-bath-recipe/"
    },
    {
      name: "Ragi Mudde",
      image: "https://i.pinimg.com/736x/2d/2d/64/2d2d6411704add30d9de4e688debd000.jpg",
      recipe: "https://www.indianhealthyrecipes.com/ragi-mudde-recipe/"
    }
  ]
};

function createCard(dish) {
  return `
    <div class="card">
      <h3>${dish.name}</h3>
      <img src="${dish.image}" alt="${dish.name}" width="100%" style="border-radius:8px; margin:10px 0;">
      <a href="${dish.recipe}" target="_blank">
        <button>View Recipe</button>
      </a>
    </div>
  `;
}

function renderContent(filteredData = data) {
  const main = document.getElementById("mainContent");
  main.innerHTML = "";

  for (const [state, dishes] of Object.entries(filteredData)) {
    const section = document.createElement("section");
    section.classList.add("place-section");
    section.id = state.toLowerCase().replace(/\s/g, "");
    section.innerHTML = `
      <h2 class="section-title">${state}</h2>
      <div class="cards">${dishes.map(createCard).join("")}</div>
    `;
    main.appendChild(section);
  }
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

document.getElementById("searchInput").addEventListener("input", function () {
  const query = this.value.toLowerCase();

  const filteredData = {};
  for (const [state, dishes] of Object.entries(data)) {
    const matchedDishes = dishes.filter(d => d.name.toLowerCase().includes(query));
    if (matchedDishes.length) {
      filteredData[state] = matchedDishes;
    }
  }

  renderContent(filteredData);
});

document.addEventListener("DOMContentLoaded", () => {
  renderContent();
});
