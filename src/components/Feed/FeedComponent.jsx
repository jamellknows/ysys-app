import React from 'react'
import './FeedComponent.css';
import {CharacterCard} from '../STRETCH_Cards/CharacterCard.jsx';
import {BookCard} from '../STRETCH_Cards/BookCard.jsx';
import {HouseCard} from '../STRETCH_Cards/HouseCard.jsx';


 //  TODO - build up a list of results 
 //TODO - add a placeholder for an empty feed 
   
    // feed here should be an array of characters/houses/books
// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = ({ feed, sidebarSelection }) => {

    // a key which collects the 'inbetween' of the '/'
    const makeKey = (url) => url.slice(url.lastIndexOf("/", url.lastIndexOf("/") - 1) + 1);
 
    return (<div className={'feed'}>
        <div className="card-list" >
      
         {feed.length === 0 ? <div >Nothing to see</div> : feed.map(item => {
             if(sidebarSelection==="characters"){
                 return <CharacterCard className="card" character={item} key={makeKey(item.url)} />
             } else if (sidebarSelection==="houses")
             {
                return <HouseCard className="card" house={item} key={makeKey(item.url)} />
             }   else if(sidebarSelection==="books")
             {
                return <BookCard className="card" book={item} key={makeKey(item.url)} />
             }  else 
             {
                return <div>Unsupported Selection</div>
             }              
         })}
         </div>
   </div> )
};
