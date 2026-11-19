const pricesContainer = document.getElementById("prices-container");
const lastUpdated = document.getElementById("last-updated");

export function displayPrices(data) {
  const metals = transformMetals(data);

  metals.forEach((metal) => {
    const card = document.createElement("div");
    card.textContent = `${metal.name} : ${metal.price} ${metal.currency}`;
    pricesContainer.appendChild(card);
  });

  const date = new Date(data.updated_at);
  lastUpdated.textContent = date.toLocaleString("fr-MA");
}

function transformMetals(data) {
  const metal = [];

  metal.push({
    name: "Gold",
    price: data.xau.price,
    currency: data.xau.currency,
  });
  metal.push({
    name: "Silver",
    price: data.silver_usd_oz,
    currency: "USD",
  });

  return metal;
} 
