import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import './tindercards.css'





function TinderCards() {
  
    const [people, setPeople] = useState([
        {
            name: 'victor',
            url: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'nwatu',
            url: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
        {
            name: 'nwatu',
            url: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
        },
    ])

    useEffect(() => {

    }, [people])

    return (
        <div>
            <h2>Cards</h2>
            <div className="tinderCards__cardContainer">
                {people.map((person) => (
                    <TinderCard className="swipe"
                        key={person.name}
                        preventSwipe={['up', 'down']}
                    >

                        <div className="card" style={{ backgroundImage: `url(${person.url})` }}>
                            <h3> {person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>

        </div>
    )
}

export default TinderCards
