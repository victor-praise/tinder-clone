import React from 'react'
import Chat from './Chat'


function Chats() {
    return (
        <div>
            <Chat 
                name="Sarah"
                message="YO whats up!"
                timestamp="40 seconds ago"
                profilePic="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <Chat 
                name="Hannah"
                message="Hey! how are you"
                timestamp="35 minutes ago"
                profilePic="https://images.pexels.com/photos/8447409/pexels-photo-8447409.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <Chat 
                name="James"
                message="Ola"
                timestamp="2 days ago"
                profilePic="https://images.pexels.com/photos/6810797/pexels-photo-6810797.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
            <Chat 
                name="Jennifer"
                message="Here he is"
                timestamp="40 minutes ago"
                profilePic="https://images.pexels.com/photos/6652243/pexels-photo-6652243.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
        </div>
    )
}

export default Chats
