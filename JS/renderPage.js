import { populateSelectDefault, updateDisplay, classSelectChange } from "./index.js";

export const renderPage = async () => {
    await populateSelectDefault()
    updateDisplay()
    classSelectChange()

  };