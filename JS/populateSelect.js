export const populateSelect = async (endpoint, selectId) => {
    const response = await fetch(`https://www.dnd5eapi.co/api/${endpoint}`);
    const data = await response.json();
  
    const select = document.getElementById(selectId);
    data.results.forEach(item => {
      const option = document.createElement('option');
      option.value = item.index;
      option.textContent = item.name;
      select.appendChild(option);
    });
  };

  export const populateSelectDefault = async () => {
    populateSelect("races", "race");
    populateSelect("classes", "class");
    populateSelect("subclasses", "subclass");
  };