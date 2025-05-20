// Generic arrow func to populate a <select> element
// with data from a API endpoint

export const populateSelect = async (endpoint, selectId) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/${endpoint}`);
  const data = await response.json();

  const select = document.getElementById(selectId);

  // Create and append <option> elements from API result
  data.results.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.index;
    option.textContent = item.name;
    select.appendChild(option);
  });
};

// Populates all relevant dropdowns with their default options from the API
export const populateSelectDefault = async () => {
  populateSelect("races", "race");
  populateSelect("classes", "class");
  populateSelect("subclasses", "subclass");
  populateSelect("subraces", "subrace");
};
