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
 
    return (<div className={'feed'}>
      
         {feed.length === 0 ? <div>Nothing to see</div> : feed.map(character => {
                return <CharacterCard character={character} />})} 
          {/* {
            feed.length === 0 ? <div></div>:feed.map(book => {
                return <BookCard book={book} />
                        
            })
        }
         {
            feed.length === 0 ? <div></div> : feed.map(house => {
                return <HouseCard house={house} />
                        
            })
        } */}
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
   </div> )
   
};
