export const fetchSubracesbyRace = async (race) => {
  const response = await fetch(
    `https://www.dnd5eapi.co/api/2014/races/${race}/subraces`
  );
  const data = await response.json();

  // Return an array of subrace indexes (e.g., ["high-elf", "wood-elf"])
  return data.results.map((sub) => sub.index);
};
