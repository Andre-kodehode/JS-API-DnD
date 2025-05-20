// Fetches detailed information about specific ability score
export const fetchAbility = async (stat) => {
  const response = await fetch(
    `https://www.dnd5eapi.co/api/ability-scores/${stat}`
  );
  const data = await response.json();
  console.log(data);
};
