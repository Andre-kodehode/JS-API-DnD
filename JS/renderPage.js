import {
  populateSelectDefault,
  updateDisplay,
  classSelectChange,
  raceSelectChange,
} from "./index.js";

export const renderPage = async () => {
  await populateSelectDefault();
  updateDisplay();
  classSelectChange();
  raceSelectChange();
};
