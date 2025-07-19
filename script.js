
const dishes = [
    {
        id: 1,
        name: "Sadya",
        state: "Kerala",
        location: "Thrissur",
        description: "Traditional vegetarian feast served on banana leaf with over 20 dishes during festivals.",
        image: "https://i.pinimg.com/736x/ea/f5/75/eaf575a6365bb170f964689f305531c8.jpg",
        ingredients: [
            "Rice",
            "Sambar",
            "Avial (mixed vegetables in coconut gravy)",
            "Thoran (stir-fried vegetables with coconut)",
            "Pachadi (yogurt based side dish)",
            "Kichadi (cucumber in yogurt)",
            "Olan (ash gourd and beans in coconut milk)",
            "Parippu (dal with ghee)",
            "Pappadam",
            "Banana chips",
            "Pickles",
            "Ghee",
            "Payasam (dessert)"
        ],
        instructions: [
            "Prepare all the side dishes in advance.",
            "Clean and lay out fresh banana leaves for serving.",
            "Start by serving rice at the center of the leaf.",
            "Add a dollop of ghee on the rice.",
            "Serve parippu (dal) next to the rice.",
            "Arrange all other dishes in specific order around the rice.",
            "Traditionally start with parippu and ghee mixed with rice.",
            "Proceed to eat with sambar and other curries.",
            "Finish with payasam as dessert."
        ]
    },
    {
        id: 2,
        name: "Hyderabadi Biryani",
        state: "Telangana",
        location: "Hyderabad",
        description: "Aromatic basmati rice cooked with tender meat and special spices in dum style.",
        image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80",
        ingredients: [
            "Basmati rice - 500g",
            "Chicken/Mutton - 1kg",
            "Yogurt - 250g",
            "Onions - 4 large (sliced)",
            "Tomatoes - 3 (chopped)",
            "Ginger-garlic paste - 2 tbsp",
            "Green chilies - 4-5",
            "Mint leaves - 1 cup",
            "Coriander leaves - 1 cup",
            "Biryani masala - 3 tbsp",
            "Red chili powder - 1 tbsp",
            "Turmeric powder - 1/2 tsp",
            "Garam masala - 1 tsp",
            "Saffron - a pinch (soaked in milk)",
            "Ghee - 1/2 cup",
            "Oil - 1/2 cup",
            "Lemon - 2",
            "Salt to taste"
        ],
        instructions: [
            "Marinate meat with yogurt, half of ginger-garlic paste, half of biryani masala, chili powder, turmeric, and salt for 2 hours.",
            "Soak rice for 30 minutes, then parboil with whole spices (bay leaf, cardamom, cinnamon, cloves).",
            "Fry onions till golden brown and set aside.",
            "In same oil, add remaining ginger-garlic paste, green chilies, and sauté.",
            "Add tomatoes and cook till soft. Add marinated meat and cook till half done.",
            "Layer half of rice in heavy bottom vessel, then meat mixture, then remaining rice.",
            "Sprinkle saffron milk, fried onions, mint, coriander leaves, ghee and lemon juice.",
            "Seal with lid and cook on low heat (dum) for 30-40 minutes.",
            "Mix gently before serving with raita and mirchi ka salan."
        ]
    },
    {
        id: 3,
        name: "Chettinad Chicken",
        state: "Tamil Nadu",
        location: "Karaikudi",
        description: "Spicy and aromatic chicken curry with freshly ground Chettinad masala.",
        image: "https://i.pinimg.com/1200x/8c/23/f3/8c23f3cabfaf3aaf1e18ee27edfde5ab.jpg",
        ingredients: [
            "Chicken - 1kg (cut into pieces)",
            "Onions - 3 (finely chopped)",
            "Tomatoes - 2 (pureed)",
            "Ginger-garlic paste - 2 tbsp",
            "Curry leaves - 2 sprigs",
            "Coconut - 1/2 cup (grated)",
            "Fennel seeds - 1 tsp",
            "Cumin seeds - 1 tsp",
            "Peppercorns - 1 tsp",
            "Coriander seeds - 1 tbsp",
            "Dry red chilies - 6-8",
            "Cinnamon - 1 inch stick",
            "Cloves - 4",
            "Cardamom - 3 pods",
            "Star anise - 1",
            "Turmeric powder - 1/2 tsp",
            "Oil - 3 tbsp",
            "Salt to taste"
        ],
        instructions: [
            "Dry roast coriander seeds, cumin, fennel, peppercorns, red chilies, cinnamon, cloves, cardamom and star anise. Grind to powder.",
            "Heat oil in pan, add curry leaves and chopped onions. Sauté till golden.",
            "Add ginger-garlic paste and sauté till raw smell disappears.",
            "Add tomato puree and cook till oil separates.",
            "Add chicken pieces, turmeric, salt and mix well. Cook for 5 minutes.",
            "Add ground masala and mix well. Add 1 cup water, cover and cook till chicken is done.",
            "In separate pan, roast grated coconut till golden brown. Grind to paste with little water.",
            "Add coconut paste to curry and simmer for 5 minutes.",
            "Garnish with coriander leaves and serve hot with dosa, idli or rice."
        ]
    },
    {
        id: 4,
        name: "Pesarattu",
        state: "Andhra Pradesh",
        location: "Guntur",
        description: "Healthy green crepes made with green gram (moong dal) served with ginger chutney.",
        image: "https://i.pinimg.com/736x/99/3c/23/993c231f8f58df9241e8e766beded79d.jpg",
        ingredients: [
            "Whole green gram (moong dal) - 2 cups",
            "Rice - 1/4 cup",
            "Green chilies - 3-4",
            "Ginger - 1 inch piece",
            "Cumin seeds - 1 tsp",
            "Asafoetida - a pinch",
            "Onions - 1 (finely chopped, optional)",
            "Oil for cooking",
            "Salt to taste"
        ],
        instructions: [
            "Wash and soak green gram and rice together for 4-5 hours.",
            "Drain water and grind with green chilies, ginger, cumin seeds and salt to smooth batter.",
            "Add water as needed to get dosa batter consistency.",
            "Heat dosa tawa, pour ladleful of batter and spread like thin crepe.",
            "Sprinkle chopped onions and press gently.",
            "Drizzle oil around edges and cook on medium flame till crisp.",
            "Flip and cook other side for a minute.",
            "Serve hot with allam (ginger) chutney or coconut chutney.",
            "For special Andhra style, serve with upma inside (called pesarattu upma)."
        ]
    },
    {
        id: 5,
        name: "Karimeen Pollichathu",
        state: "Kerala",
        location: "Alappuzha",
        description: "Pearl spot fish marinated in spices, wrapped in banana leaf and grilled to perfection.",
        image: "https://i.pinimg.com/1200x/1a/31/a1/1a31a156cbb55a2314a6de26927a0af6.jpg",
        ingredients: [
            "Pearl spot fish (Karimeen) - 2 (cleaned)",
            "Shallots - 10-12 (sliced)",
            "Garlic - 6 cloves (chopped)",
            "Ginger - 1 inch piece (chopped)",
            "Green chilies - 3-4 (slit)",
            "Tomato - 1 (chopped)",
            "Turmeric powder - 1/2 tsp",
            "Red chili powder - 1 tsp",
            "Pepper powder - 1 tsp",
            "Garam masala - 1/2 tsp",
            "Curry leaves - 2 sprigs",
            "Coconut oil - 2 tbsp",
            "Banana leaves - for wrapping",
            "Salt to taste"
        ],
        instructions: [
            "Make 2-3 slits on both sides of fish. Marinate with turmeric, chili powder, pepper and salt.",
            "Heat oil in pan, sauté shallots, ginger, garlic and green chilies till soft.",
            "Add tomatoes and cook till mushy. Add garam masala and curry leaves. Cool.",
            "Stuff this mixture into fish cavities and over the slits.",
            "Heat banana leaf over flame to make pliable. Place fish on leaf and wrap tightly.",
            "Heat tawa/griddle, place wrapped fish and cook 5-7 minutes each side on medium heat.",
            "Alternatively, bake in preheated oven at 180°C for 15-20 minutes.",
            "Serve hot in banana leaf with rice or appam."
        ]
    },
    {
        id: 6,
        name: "Gongura Mutton",
        state: "Andhra Pradesh",
        location: "Vijayawada",
        description: "Tangy and spicy mutton curry made with sorrel leaves, a specialty of Andhra cuisine.",
        image: "https://i.pinimg.com/1200x/8d/2f/1d/8d2f1d9be99c37f03bc091be0de70789.jpg",
        ingredients: [
            "Mutton - 1kg (with bones)",
            "Gongura (sorrel leaves) - 3 cups",
            "Onions - 3 (sliced)",
            "Tomatoes - 2 (chopped)",
            "Ginger-garlic paste - 2 tbsp",
            "Green chilies - 4-5 (slit)",
            "Red chili powder - 1 tbsp",
            "Turmeric powder - 1/2 tsp",
            "Coriander powder - 1 tbsp",
            "Cumin powder - 1 tsp",
            "Mustard seeds - 1 tsp",
            "Cumin seeds - 1 tsp",
            "Fenugreek seeds - 1/4 tsp",
            "Curry leaves - 2 sprigs",
            "Oil - 3 tbsp",
            "Salt to taste"
        ],
        instructions: [
            "Clean and wash gongura leaves. Pluck leaves from stems and chop roughly.",
            "Heat 1 tbsp oil, sauté gongura leaves till wilted and moisture evaporates. Cool and grind to paste.",
            "Heat remaining oil, add mustard, cumin, fenugreek seeds and curry leaves.",
            "Add onions and sauté till golden. Add ginger-garlic paste and green chilies. Sauté 2 minutes.",
            "Add mutton pieces and cook on high heat for 5 minutes till color changes.",
            "Add turmeric, red chili powder, coriander powder, cumin powder and salt. Mix well.",
            "Add tomatoes and cook till soft. Add 2 cups water, cover and cook till mutton is tender.",
            "Add gongura paste and simmer for 10 minutes till oil separates.",
            "Adjust consistency and serve hot with rice or roti."
        ]
    },
    {
        id: 7,
        name: "Filter Coffee",
        state: "Tamil Nadu",
        location: "Chennai",
        description: "Strong, aromatic coffee made with chicory blend, traditionally served in stainless steel tumbler and davara.",
        image: "https://i.pinimg.com/736x/31/c5/e7/31c5e7c9097f3a3e3527eb488f7d9439.jpg",
        ingredients: [
            "Coffee powder (70% coffee, 30% chicory blend) - 2 tbsp per cup",
            "Milk - 3/4 cup per cup",
            "Sugar - to taste",
            "Water - for brewing"
        ],
        instructions: [
            "Boil water in coffee filter bottom vessel.",
            "Add coffee powder to filter cup, press gently with presser (don't pack too tight).",
            "Pour hot water over coffee powder and close with lid. Let it drip completely (takes 10-15 minutes).",
            "Meanwhile, boil milk in saucepan till frothy.",
            "In serving tumbler, add 1/4 cup decoction (strong coffee liquid) and sugar.",
            "Pour hot milk from height of about 1 foot into tumbler to mix well and create froth.",
            "Serve immediately in stainless steel tumbler and davara (wide bowl).",
            "Pour back and forth between tumbler and davara 3-4 times to mix well and cool slightly before drinking."
        ]
    },
    {
        id: 8,
        name: "Pulihora",
        state: "Telangana",
        location: "Warangal",
        description: "Tangy tamarind rice tempered with spices, peanuts and curry leaves, a popular festival dish.",
        image: "https://i.pinimg.com/1200x/ca/a7/21/caa721bffae488433cc691e92da93f09.jpg",
        ingredients: [
            "Cooked rice - 3 cups (preferably slightly old)",
            "Tamarind - lemon sized ball",
            "Dry red chilies - 4-5",
            "Peanuts - 2 tbsp",
            "Chana dal - 1 tbsp",
            "Urad dal - 1 tbsp",
            "Mustard seeds - 1 tsp",
            "Cumin seeds - 1/2 tsp",
            "Turmeric powder - 1/2 tsp",
            "Asafoetida - a pinch",
            "Curry leaves - 2 sprigs",
            "Oil - 3 tbsp",
            "Salt to taste"
        ],
        instructions: [
            "Soak tamarind in 1/2 cup warm water for 15 minutes. Extract thick pulp and discard solids.",
            "Heat oil in pan, add peanuts and fry till golden. Remove and set aside.",
            "In same oil, add mustard seeds. When they splutter, add cumin, chana dal, urad dal and red chilies.",
            "When dals turn golden, add curry leaves, asafoetida and turmeric. Sauté for few seconds.",
            "Add tamarind pulp and salt. Cook on medium heat till raw smell disappears and mixture thickens.",
            "Add cooked rice and mix gently to coat all grains with tamarind mixture.",
            "Add fried peanuts and mix well. Adjust salt if needed.",
            "Cover and let it sit for 15 minutes before serving for flavors to blend.",
            "Garnish with more curry leaves and serve with papad or potato chips."
        ]
    }
];

// DOM elements
const dishesContainer = document.getElementById('dishesContainer');
const stateButtons = document.querySelectorAll('.state-btn');
const searchInput = document.querySelector('.search-bar input');
const recipeModal = document.getElementById('recipeModal');
const closeModal = document.querySelector('.close-modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalLocation = document.getElementById('modalLocation');
const ingredientsList = document.getElementById('ingredientsList');
const instructionsList = document.getElementById('instructionsList');

// Display all dishes initially
displayDishes(dishes);

// Filter dishes by state
stateButtons.forEach(button => {
    button.addEventListener('click', () => {
        stateButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const state = button.dataset.state;
        if (state === 'all') {
            displayDishes(dishes);
        } else {
            const filteredDishes = dishes.filter(dish => dish.state.toLowerCase().replace(/\s+/g, '') === state);
            displayDishes(filteredDishes);
        }
    });
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredDishes = dishes.filter(dish => 
        dish.name.toLowerCase().includes(searchTerm) || 
        dish.state.toLowerCase().includes(searchTerm) ||
        dish.location.toLowerCase().includes(searchTerm) ||
        dish.description.toLowerCase().includes(searchTerm)
    );
    displayDishes(filteredDishes);
});

// Modal close
closeModal.addEventListener('click', () => {
    recipeModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === recipeModal) {
        recipeModal.style.display = 'none';
    }
});

// Function to display dishes
function displayDishes(dishesToDisplay) {
    dishesContainer.innerHTML = '';
    
    if (dishesToDisplay.length === 0) {
        dishesContainer.innerHTML = '<p style="grid-column:1/-1; text-align:center;">No dishes found matching your criteria.</p>';
        return;
    }
    
    dishesToDisplay.forEach(dish => {
        const dishCard = document.createElement('div');
        dishCard.className = 'dish-card';
        dishCard.innerHTML = `
            <img src="${dish.image}" alt="${dish.name}" class="dish-image">
            <div class="dish-info">
                <div class="dish-header">
                    <h3 class="dish-name">${dish.name}</h3>
                    <span class="dish-state">${dish.state}</span>
                </div>
                <p class="dish-location"><i class="fas fa-map-marker-alt"></i> ${dish.location}</p>
                <p class="dish-desc">${dish.description}</p>
                <button class="view-recipe" data-id="${dish.id}">View Recipe</button>
            </div>
        `;
        dishesContainer.appendChild(dishCard);
    });
    
    // Add event listeners to recipe buttons
    document.querySelectorAll('.view-recipe').forEach(button => {
        button.addEventListener('click', (e) => {
            const dishId = parseInt(e.target.dataset.id);
            const dish = dishes.find(d => d.id === dishId);
            showRecipeModal(dish);
        });
    });
}

// Function to show recipe modal
function showRecipeModal(dish) {
    modalImage.src = dish.image;
    modalImage.alt = dish.name;
    modalTitle.textContent = dish.name;
    modalLocation.textContent = `${dish.location}, ${dish.state}`;
    
    ingredientsList.innerHTML = '';
    dish.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });
    
    instructionsList.innerHTML = '';
    dish.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });
    
    recipeModal.style.display = 'flex';
}
// ====== LEAFLET MAP INTEGRATION ======
function initMap() {
    // Initialize map centered on India
    const map = L.map('map').setView([20.5937, 78.9629], 5);
    
    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    // Add markers for each dish
    dishes.forEach(dish => {
        const location = getCoordinatesForLocation(dish.location);
        
        if (location) {
            const marker = L.marker([location.lat, location.lng])
                .addTo(map)
                .bindPopup(`
                    <b>${dish.name}</b><br>
                    <img src="${dish.image}" width="100"><br>
                    <em>${dish.location}, ${dish.state}</em>
                `);
            
            // Optional: Click to show recipe
            marker.on('click', () => showRecipeModal(dish));
        }
    });
}

// Same coordinate lookup function
function getCoordinatesForLocation(location) {
    const locations = {
        "Thrissur": { lat: 10.5276, lng: 76.2144 },
        "Hyderabad": { lat: 17.3850, lng: 78.4867 },
        "Karaikudi": { lat: 10.0667, lng: 78.7833 },
        "Guntur": { lat: 16.3067, lng: 80.4365 },
        "Alappuzha": { lat: 9.4981, lng: 76.3388 },
        "Vijayawada": { lat: 16.5062, lng: 80.6480 },
        "Chennai": { lat: 13.0827, lng: 80.2707 },
        "Warangal": { lat: 17.9689, lng: 79.5941 },
    };
    return locations[location];
}

// Initialize map when page loads
document.addEventListener('DOMContentLoaded', initMap);
