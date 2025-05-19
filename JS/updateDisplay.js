export const updateDisplay = () => {
    const selects = document.querySelectorAll('select');
  
    selects.forEach(select => {
      select.addEventListener('change', e => {
        const id = e.target.id;
        const display = document.getElementById(`${id}Display`);
  
        if (display) {
          const selectedOption = e.target.options[e.target.selectedIndex];
  
          if (selectedOption && selectedOption.value !== '') {
            display.textContent = selectedOption.textContent;
          } else {
            display.textContent = '-';
          }
        }
      });
    });
  };
  