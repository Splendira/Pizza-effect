const container = document.querySelector(".container");

async function getApi(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) throw Error(`Error : ${response.status}`);

    const data = await response.json();
    console.log(data);

    createCardData(data);
  } catch (error) {
    console.log(error);
  }
}
// Fonction pour créer une seule carte
function createCard(info) {
  const card = document.createElement("div");

  card.className = "card";
  card.innerHTML = `
        <div class="img-container">
          <img src="${info.img}" alt="${info.name} pizza" />
        </div>
    
        <div class="info-name-and-price-container">
          <h2>${info.name}</h2>
          <h3>$${info.price}0</h3>
        </div>
    
        <div class="info-hover">
          <p class="text-hover">${info.description}</p>
          <button class="btn-order" type="button">Order Now</button>
        </div>
      `;

  return card;
}

// Fonction principale qui boucle sur les données et crée les cartes
function createCardData(data) {
  data.forEach((info) => {
    const card = createCard(info);
    container.appendChild(card);
  });
}

getApi("model/data-pizza.json");
