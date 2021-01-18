import React, { useEffect, useState } from 'react';

import TinderCard from 'react-tinder-card';

import axios from 'axios';

import '../styles/cards.css';

const Cards = () => {
    const [people, setPeople] = useState([]);

    const fetchCards = async () => {
        const res = await axios.get('/tinder/cards');
        setPeople(res.data.cards);
    };

    useEffect(() => {
        fetchCards();
    }, []);

    return (
        <div className='cards'>
            <div className='cards-container'>
                {
                    people.map(person => (
                        <TinderCard
                            className='swipe'>
                            <div style={{ backgroundImage: `url(${person.image})` }} className='card'>
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