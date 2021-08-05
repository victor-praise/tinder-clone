import React, { useState } from 'react';
import './chatScreen.css'
import { Avatar } from '@material-ui/core';
import { useParams } from 'react-router-dom';

function ChatScreen() {
    let { person, picture } = useParams();
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {   name: person,
            image: picture,
            message: 'Whats up!'
        },
        {   name: person,
            image: picture,
            message: "Hows's everything"
        },
        {
            name: person,
            image: picture,
            message: 'Hellooooo'
        },

    ]);
    let date = new Date();
    let today = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
  
    const handleSend = (e) => {
        e.preventDefault();
        setMessages([...messages, { message: input }]);
        setInput("");
    }
   
    return (
        <div className="chatScreen">
            <p className="chatScreen__timestamp"> YOU MATCHED WITH {person} ON {today}</p>
            {messages.map((message) => (
                message.name ? (
                    <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image} />
                        <p className="chatScreen__text">{message.message}</p>
                    </div>
                ) : <div className="chatScreen__message">
                    <p className="chatScreen__textUser">{message.message}</p>
                </div>

            ))}

            <form className="chatScreen__input">
                <input value={input}
                    type="text"
                    className="chatScreen__inputField"
                    onChange={e => {
                        setInput(e.target.value)
                    }} />
                <button className="chatScreen__button" onClick={handleSend}>SEND</button>
            </form>

        </div>
    )
}

export default ChatScreen
