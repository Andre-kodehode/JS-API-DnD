import { fetchSubracesbyRace } from "./index.js";

export const raceSelectChange = () => {
  // Sets up the subrace select menu based on the selected race
  const raceSelect = document.getElementById("race");
  const subraceSelect = document.getElementById("subrace");
  const subraceDisplay = document.getElementById("subraceDisplay");

  raceSelect.addEventListener("change", async (e) => {
    const selectedRace = e.target.value;

    // Fetch valid subraces for the chosen race
    const validSubraces = await fetchSubracesbyRace(selectedRace);

    subraceSelect.textContent = "";

    subraceSelect.disabled = false;

    // Add a placeholder option to prompt user selection
    const placeholderOption = document.createElement("option");
    placeholderOption.textContent = "-- Please choose a subclass --";
    placeholderOption.value = "";
    placeholderOption.hidden = true;
    placeholderOption.selected = true;
    subraceSelect.appendChild(placeholderOption);

    // Populate dropdown with subrace options
    validSubraces.forEach((subIndex) => {
      const option = document.createElement("option");
      option.value = subIndex;
      option.textContent =
        subIndex.charAt(0).toUpperCase() + subIndex.slice(1).replace(/-/g, " ");
      subraceSelect.appendChild(option);
    });

    // Reset selection index and display value
    subraceSelect.selectedIndex = 0;
    if (subraceDisplay) {
      subraceDisplay.textContent = "-";
    }
  });
};
