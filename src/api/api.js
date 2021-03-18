// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.
export const getData = async (selection, pageSize) => {
  let url = `https://www.anapioficeandfire.com/api/${selection}?page=1&pageSize=${pageSize}`;
  let res = await fetch(url);
  let data = res.json();
  return data;
};
