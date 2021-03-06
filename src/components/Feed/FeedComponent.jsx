import React from 'react'
import './FeedComponent.css';
import {CharacterCard} from '../STRETCH_Cards/CharacterCard.jsx';




// TODO - make sure FeedComponent is expecting the right props!
export const FeedComponent = ({ feed }) => {

    // feed here should be an array of characters/houses/books
    return (<div className={'feed'}>
        {/* TODO - add a placeholder for an empty feed */}
        {/* TODO - build up a list of results */}
        {
            feed.length === 0 ? <div>Empty feed!</div> : feed.map(character => {
                return <CharacterCard character={character} />
            })
        }
        {/* TODO [STRETCH] - update this list to be a list/grid of STRETCH_Cards */}
   </div> )
};