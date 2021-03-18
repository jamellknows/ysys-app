import "./App.css";
import React, { useState,useEffect } from "react";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { SidebarComponent } from "./components/Sidebar/SidebarComponent";
import { FeedComponent } from "./components/Feed/FeedComponent";
import { FooterComponent } from "./components/Footer/FooterComponent.jsx";
import { getData } from "./api/api";

const api = {
  books: "https://www.anapioficeandfire.com/api/books",
  houses: "https://www.anapioficeandfire.com/api/houses",
  characters: "https://www.anapioficeandfire.com/api/characters",
};

const App = () => {
  // TODO - this is the "main" component for our app, and it will include all the global state that we care about
  //  This should include things like:
  //  * the sidebar expanded state
  //  * the selected category (books/characters/houses)
  //  * the feed results

  // TODO [STRETCH] - This could also include
  //  * the search term (if there is one)
  //  * whether the app is fetching data (loading)
  //  * any additional filters (number of results/filter terms in query string)

  //  Each part of the state will need to be passed down to its respective component(s) in order for it
  //  to be displayed/updated in the correct part of the UI
  //  * E.g. maybe you can expand/collapse the sidebar from the header and the feed, as well as the sidebar itself
  //  This means that the state will need to be accessed/updated from all of these components!

  // To get started:
  // TODO - add in an expanded state/setState
  // TODO - add in a feedResults state/setState - done
  // (See cheat sheet for useState example)

  // TODO - import getData() from api (you will need to write this function)
  //         and call it here (setting the results to the feedResults)
  // TODO [STRETCH] - implement loading state and pass to FeedComponent

  // TODO - pass in expanded sidebar state to components that need to know about it/update it.


  const [feed, setFeed] = useState([]);
  const [query, setQuery] = useState('');
  const [sidebarSelection, setSidebarSelection] = useState("characters");
  const [pageSize, setPageSize] = useState(10);


  // fetch function for entering a name
  //moved from header component 
   const search = (query) => {
    return fetch(`${api.characters}?name=${query}`)
      .then((resp) => {
      return resp.json()
      .then(console.log(resp))
      })
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData(sidebarSelection, pageSize)
      setFeed(data)
    }
    fetchData()
  },[sidebarSelection, pageSize]);


  return (
    <div className="app">
      <HeaderComponent query={query} setQuery={setQuery} />
       <input
        className="button"
        type="submit"
        value="SEARCH"
        onClick={() => { 
        search(query).then((response) => setFeed(response));
        }}
      ></input>  
      <SidebarComponent 
      sidebarSelection={sidebarSelection} setSidebarSelection={setSidebarSelection} pageSize={pageSize} setPageSize={setPageSize} />
      <FeedComponent feed={feed} sidebarSelection={sidebarSelection}/>
      <FooterComponent />
    </div>
  );
    };

export default App;