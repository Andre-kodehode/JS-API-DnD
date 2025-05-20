export const fetchSubclassesForClass = async (classIndex) => {
  const response = await fetch(
    `https://www.dnd5eapi.co/api/classes/${classIndex}/subclasses`
  );
  const data = await response.json();

  // Extract and return an array of subclass indexes (e.g., ["champion", "berserker"])
  return data.results.map((sub) => sub.index);
};
