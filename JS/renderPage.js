import {
  populateSelectDefault,
  updateDisplay,
  classSelectChange,
  raceSelectChange,
} from "./index.js";

// Renders the page content and event listeners
export const renderPage = async () => {
  await populateSelectDefault();
  updateDisplay();
  classSelectChange();
  raceSelectChange();
};
