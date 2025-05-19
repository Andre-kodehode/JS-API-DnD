export const updateDisplay = () => {
  const selects = document.querySelectorAll("select");
  const nameInput = document.querySelector("input[type='text']");

  selects.forEach((select) => {
    select.addEventListener("change", (e) => {
      const id = e.target.id;
      const display = document.getElementById(`${id}Display`);

      if (display) {
        const selectedOption = e.target.options[e.target.selectedIndex];

        if (selectedOption && selectedOption.value !== "") {
          display.textContent = selectedOption.textContent;
        } else {
          display.textContent = "-";
        }
      }
    });
  });

  nameInput.addEventListener("input", (e) => {
    const display = document.getElementById("nameDisplay");
    display.textContent = e.target.value.trim() || "-";
  });
};
