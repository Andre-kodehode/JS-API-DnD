import { fetchSubclassesForClass } from "./index.js";

// Sets up subclass dropdown to update based on selected class
export const classSelectChange = () => {
  const classSelect = document.getElementById("class");
  const subclassSelect = document.getElementById("subclass");
  const subclassDisplay = document.getElementById("subclassDisplay");

  classSelect.addEventListener("change", async (e) => {
    const selectedClass = e.target.value;

    // Fetch valid subclasses for the selected class
    const validSubclasses = await fetchSubclassesForClass(selectedClass);

    subclassSelect.textContent = "";

    subclassSelect.disabled = false;

    // Add a placeholder prompting user to select a subclass
    const placeholderOption = document.createElement("option");
    placeholderOption.textContent = "-- Please choose a subclass --";
    placeholderOption.value = "";
    placeholderOption.hidden = true;
    placeholderOption.selected = true;
    subclassSelect.appendChild(placeholderOption);

    // Populate dropdown with new subclass options
    validSubclasses.forEach((subIndex) => {
      const option = document.createElement("option");
      option.value = subIndex;
      option.textContent =
        subIndex.charAt(0).toUpperCase() + subIndex.slice(1).replace(/-/g, " ");
      subclassSelect.appendChild(option);
    });

    // Reset display and selection
    subclassSelect.selectedIndex = 0;
    if (subclassDisplay) {
      subclassDisplay.textContent = "-";
    }
  });
};
