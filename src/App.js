import "./App.css";
import React, { useState } from "react";
import { HeaderComponent } from "./components/Header/HeaderComponent";
import { SidebarComponent } from "./components/Sidebar/SidebarComponent";
import { FeedComponent } from "./components/Feed/FeedComponent";
import Main from "./audioClips/Main.mp3";
// import { Howl, Howler } from "howler";
import {FooterComponent} from "./components/Footer/FooterComponent.jsx"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// const audioClips = [{ sound: Main }];

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
  // TODO - add in a feedResults state/setState
  // (See cheat sheet for useState example)

  // TODO - import getData() from api (you will need to write this function)
  //         and call it here (setting the results to the feedResults)
  // TODO [STRETCH] - implement loading state and pass to FeedComponent

  // TODO - pass in expanded sidebar state to components that need to know about it/update it.
  // const fetchCharacter = async (event) => {
  //   if (event.key === "Enter") {
  //     fetch(`${api.characters}?name=${query}`)
  //       .then((resp) => resp.json())
  //       .catch((error) => {
  //         console.error("you spelt the name wrong! try again :)");
  //         throw error;
  //       })
  //       .then((data) => {
  //         setQuery("");
  //         console.log(data);
  //       });
    // }
  // };


  // SoundPlay = (src) => {
  //   const sound = new Howl({
  //     src
  //   });
  //   sound.play();
  // };

  // RenderButtonSound = () => {
  //   return audioClips.map((soundObj, index) => {

  //     return (
  //         <div className = "soundButton"  >
  //       <button type="button"class="btn btn-default btn-lg" key={index} onClick={() => this.SoundPlay(soundObj.sound)}>
  //       <span class="glyphicon glyphicon-star" ></span> 
  //         {/* {soundObj.label} where icon will be */}Click for a Surprise

  //       </button></div>
  //     );
  //   });
  // };

  // togglePlay=(sound)=>{
  //   return sound.playing() ? sound.pause() : sound.play();
  //   };

 
  //   Howler.volume(0.7);

  const getData = () => {
    return fetch("https://www.anapioficeandfire.com/api/characters?page=1&pageSize=10").then(
      (response) => {
        return response.json();
      }
    );
  };
  
  const [feed, setFeed] = useState([]);
  const [query, setQuery] = useState("");

    return (
      <div className="app">
        <HeaderComponent query={query} setQuery={setQuery}/>
        <SidebarComponent query={query} setQuery={setQuery}/>
        <button
          onClick={() => {
            getData().then((response) => setFeed(response));
          }}
        >
          fetch
        </button>
        <FeedComponent feed={feed}/>
        <FooterComponent/>
        {/* {this.RenderButtonSound()} */}
      </div>
    );
  }

export default App;
