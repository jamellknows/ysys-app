
// TODO create a function that takes a "field" argument that fetches one of:
//  - books
//  - characters
//  - houses

const api = {
    books:"https://www.anapioficeandfire.com/api/books",
    houses:"https://www.anapioficeandfire.com/api/houses",
    characters:"https://www.anapioficeandfire.com/api/characters"
}
function getBooks() {
    fetch (`${api.books}`)
    .then(resp => resp.json())
    .then(data =>{
        console.log(data);
    })
}
function getHouses(){
    fetch (`${api.houses}`)
    .then(resp => resp.json())
    .then(data =>{
         console.log(data)
    })
}
function getCharacters(){
    fetch(`${api.characters}`)
    .then(resp => resp.json())
    .then(data =>{
        console.log(data)
    })
}

// TODO [STRETCH]
//  customise function (or create another function) to retrieve extra data based on configuration (number of results/pages/search

// see cheat sheet for fetch example.
export const getData = () => {
   getBooks();
   getHouses();
   getCharacters();
 };
 
 