import { renderPage, fetchAbility, classSelectChange} from "./JS/index.js";

const abilityScore = ["cha", "con", "dex", "int", "str", "wis"]

fetchAbility(abilityScore[2]);

renderPage()
