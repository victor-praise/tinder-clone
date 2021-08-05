import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import database from './firebase';
import './tindercards.css'





function TinderCards() {

    const [people, setPeople] = useState([])

    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
            setPeople(snapshot.docs.map(doc => doc.data()))
        ))
      
    }, [])

    return (
        //         <iframe src="https://prezi.com/embed/fealtalllmdb/" id="iframe_container" frameborder="0" webkitallowfullscreen=""
        //   mozallowfullscreen="" allowfullscreen="" allow="autoplay; fullscreen" height="315" width="560"></iframe>
        <div>
            {/* <h2>Cards</h2> */}
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
