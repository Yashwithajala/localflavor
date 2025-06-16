const data = {
  "Andhra Pradesh": [
    {
      name: "Andhra Chicken Curry",
      image: "https://i.pinimg.com/736x/8c/23/f3/8c23f3cabfaf3aaf1e18ee27edfde5ab.jpg",
      recipe: "https://www.indianhealthyrecipes.com/andhra-chicken-curry/"

    },
    {
      name: "Pulihora",
      image: "https://i.pinimg.com/736x/2d/ed/a1/2deda192034fa2fc07a98ffbcbb19a0f.jpg",
      recipe: "https://www.indianhealthyrecipes.com/pulihora-recipe-andhra-pulihora/"
    },
  {
      name: "Pootharekulu",
      image: "https://i.pinimg.com/736x/42/36/db/4236db7c3a6c617f0d0784490cbaf53f.jpg",
      recipe: "https://recipes.timesofindia.com/recipes/putharekulu/rs80173979.cms"
    },
  ],
  "Telangana": [
    {
      name: "Hyderabadi Biryani",
      image: "https://i.pinimg.com/736x/6a/cc/f3/6accf3cefbe7f9779d151e3696018990.jpg",
      recipe: "https://www.indianhealthyrecipes.com/hyderabadi-biryani-recipe/",
      location:"https://traveltriangle.com/blog/famous-biryani-in-hyderabad/"
    },
    {
      name: "Sakinalu",
      image: "https://i.pinimg.com/736x/e4/c5/43/e4c54310fdaf987a6a1946b9df2bc3e0.jpg",
      recipe: "https://www.blendwithspices.com/telangana-sakinalu-recipe/"
    },
    
       {
      name: "Qubani ka meetha",
      image: "https://i.pinimg.com/736x/09/06/3d/09063dadb704f14a2470d080dae67b56.jpg",
      recipe: "https://www.vegrecipesofindia.com/hyderabadi-khubani-ka-meetha/"
    },
  ],
  "Tamil Nadu": [
   
    {
      name: "Chettinad Chicken Curry",
      image: "https://i.pinimg.com/736x/d8/da/e9/d8dae9a312fb7d2b762b5bd5e8accda6.jpg",
      recipe: "https://www.indianhealthyrecipes.com/chicken-chettinad/"
    },
     {
      name: "Medu Vada",
      image: "https://i.pinimg.com/736x/57/db/de/57dbde553222271fcf1175bd82c91195.jpg",
      recipe: "https://www.indianhealthyrecipes.com/garelu-medhu-vadai-recipe/"
    },
    {
      name: "Rava Kesari",
      image: "https://i.pinimg.com/736x/ce/04/2c/ce042c1c3839b73870b33a635ac9d71d.jpg",
      recipe: "https://www.indianhealthyrecipes.com/rava-kesari/"
    },
  ],
  "Kerala": [
    {
      name: "avial(mixed veg in coconut)",
      image: "https://i.pinimg.com/736x/c5/2c/f5/c52cf5120e95d021e73a0e884a7e7cd0.jpg",
      recipe: "https://www.vegrecipesofindia.com/avial-recipe-kerala-avial-recipe/"
    },
    {
      name: "Appam with Stew",
      image: "https://i.pinimg.com/736x/cc/85/38/cc853841501d70f13d4e9ece7a204226.jpg",
      recipe: "https://hebbarskitchen.com/appam-recipe-yeast-appam-batter-recipe/"
    },
    {
      name: "palada payasam",
      image: "https://i.pinimg.com/736x/07/7c/7f/077c7fc01556cf77d5cd0a336e49c78d.jpg",
      recipe: "https://foodviva.com/kerala-recipes/palada-payasam-recipe/"
    },
  ],
  "Karnataka": [
     {
      name: "Ragi Mudde",
      image: "https://i.pinimg.com/736x/2d/2d/64/2d2d6411704add30d9de4e688debd000.jpg",
      recipe: "https://www.indianhealthyrecipes.com/ragi-mudde-ragi-sankati/",
      location: "https://www.google.com/maps/place/Ragi+Mudde+Spot",
    },
    {
      name: "Bisi Bele Bath",
      image: "https://i.pinimg.com/736x/e2/7a/90/e27a90d1282c1091dbf86a93adf7492c.jpg",
      recipe: "https://www.indianhealthyrecipes.com/bisi-bele-bath/"
      
    },
    {
      name: "Mysore Pak",
      image: "https://i.pinimg.com/736x/c3/b0/7b/c3b07b0c8c474585795f7c77a8e0fe9a.jpg",
      recipe: "https://www.indianhealthyrecipes.com/mysore-pak-recipe/"
    },
  ]
};

function createRatingStars(rating) {
      return '★'.repeat(rating) + '☆'.repeat(5 - rating);
    }




function createCard(dish) {
  return `
    <div class="card" onclick='showModal(${JSON.stringify(dish)})'>
      <h3>${dish.name}</h3>
      <img src="${dish.image}" alt="${dish.name}" width="100%" style="border-radius:8px; margin:10px 0;">
      <div class="rating">${createRatingStars(dish.rating || 4)}</div>
     
      <div style="margin-top: 10px; display: flex; gap: 10px; flex-wrap: wrap;">
        <a href="${dish.location}" target="_blank">
          <button style="background:#e0d2c7;">Know the location</button>
        </a>
        <a href="${dish.recipe}" target="_blank">
          <button style="background:#e0d2c7;">view recipe</button></a>
      </div>
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

function showModal(dish) {
  document.getElementById("modalTitle").textContent = dish.name;
 
  document.getElementById("modalRecipeLink").href = dish.recipe;
  document.getElementById("recipeModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("recipeModal").style.display = "none";
}

