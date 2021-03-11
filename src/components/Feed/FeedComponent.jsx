import React from 'react'
import './FeedComponent.css';
import {CharacterCard} from '../STRETCH_Cards/CharacterCard.jsx';
import {BookCard} from '../STRETCH_Cards/BookCard.jsx';
import {HouseCard} from '../STRETCH_Cards/HouseCard.jsx';


 //  TODO - build up a list of results 
 //TODO - add a placeholder for an empty feed 
   
    // feed here should be an array of characters/houses/books
// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = ({ feed }) => {

    const makeKey = (url) => url.slice(url.lastIndexOf("/", url.lastIndexOf("/") - 1) + 1);
 
    return (<div className={'feed'}>
        <div className="card-list" >
      
         {feed.length === 0 ? <div >Nothing to see</div> : feed.map(character => {
                return <CharacterCard className="card" character={character} key={makeKey(character.url)} />})} 
           {/* {
            feed.length === 0 ? <div></div>:feed.map(book => {
                return <BookCard book={book} />
                        
            })
        } */}
         {/* {
            feed.length === 0 ? <div></div> : feed.map(house => {
                return <HouseCard house={house} />
                        
            })
        }  */}
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
        </div>
   </div> )
   
};
