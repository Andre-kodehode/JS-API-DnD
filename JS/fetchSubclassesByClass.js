export const fetchSubclassesForClass = async (classIndex) => {
  const response = await fetch(`https://www.dnd5eapi.co/api/classes/${classIndex}/subclasses`);
  const data = await response.json();
  return data.results.map(sub => sub.index);
};
