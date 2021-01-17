import React, { useState } from 'react';

import TinderCard from 'react-tinder-card';

import '../styles/cards.css';

const Cards = () => {
    const [people, setPeople] = useState([
        {
            name: 'Elon Musk',
            url: 'https://st1.uvnimg.com/7c/bc/abbaa1dc40cfae65da5906706103/elon-musk-royal-society.jpg'
        },
        {
            name: 'Jeff Bezos',
            url: 'https://assets.entrepreneur.com/content/3x2/2000/20190415150935-jeff-bezos.jpeg'
        }
    ]);

    const swiped = (nameToDelete) => {
        console.log('removing ' + nameToDelete);
    };

    const outOfFrame = (name) => {
        console.log(name + 'left the screen');
    };

    return (
        <div className='cards'>
            <div className='cards-container'>
                {
                    people.map(person => (
                        <TinderCard
                            className='swipe'
                            key={person.name}
                            preventSwipe={['up', 'down']}
                            onSwipe={dir => swiped(dir, person.name)}
                            onCardLeftScreen={() => outOfFrame(person.name)}>
                            <div style={{ backgroundImage: `url(${person.url})` }} className='card'>
                                <h3>{person.name}</h3>
                            </div>
                        </TinderCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Cards;