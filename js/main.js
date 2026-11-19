import { fetchSpotPrices } from "./api.js";
import { displayPrices } from "./ui.js";

const pricesStatus = document.getElementById("prices-status");

async function startApp() {
  try {
    const data = await fetchSpotPrices();
    displayPrices(data);
    pricesStatus.textContent = "Les cours sont à jour.";
  } catch (error) {
    pricesStatus.textContent = `Erreur : ${error.message}`;
  }
}
startApp();
