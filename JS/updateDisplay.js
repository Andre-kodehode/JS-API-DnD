// Function to sync display elements with current selections and name input
export const updateDisplay = () => {
  const selects = document.querySelectorAll("select");
  const nameInput = document.querySelector("input[type='text']");

  // Add event listener to each select element
  selects.forEach((select) => {
    select.addEventListener("change", (e) => {
      const id = e.target.id;
      const display = document.getElementById(`${id}Display`);

      if (display) {
        const selectedOption = e.target.options[e.target.selectedIndex];

        // Update display with selected option's text or a dash if none selected
        if (selectedOption && selectedOption.value !== "") {
          display.textContent = selectedOption.textContent;
        } else {
          display.textContent = "-";
        }
      }
    });
  });

  // Update name display in real-time as user types
  nameInput.addEventListener("input", (e) => {
    const display = document.getElementById("nameDisplay");
    display.textContent = e.target.value.trim() || "-";
  });
};
