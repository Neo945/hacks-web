import { useState } from 'react';
import './chat.css';

function RightBubble(params) {
    return (
        <div className="msg left-msg">
        <div
            className="msg-img"
            style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/327/327779.svg)"}}
        ></div>

        <div className="msg-bubble">
            <div className="msg-info">
            <div className="msg-info-name">{params.user.name}</div>
            <div className="msg-info-time">{params.user.time}</div>
            </div>

            <div className="msg-text">
            {params.user.text}
            </div>
        </div>
        </div>
    );
}
function LeftBubble(params) {
    return (
        <div className="msg right-msg">
        <div
        className="msg-img"
        style={{backgroundImage: "url(https://image.flaticon.com/icons/svg/145/145867.svg)"}}
        ></div>

        <div className="msg-bubble">
            <div className="msg-info">
            <div className="msg-info-name">{params.user.name}</div>
            <div className="msg-info-time">{params.user.time}</div>
            </div>

            <div className="msg-text">
            {params.user.text}
            </div>
        </div>
        </div>
    );
}

export default function Chat(props) {
    const [messages, setMessages] = useState([
        {
            name: "Sajad",
            time: "12:45",
            text: "Hi, welcome to SimpleChat! Go ahead and send me a message. 😄",
        },
        {
            name: "BOT",
            time: "12:45",
            text: "Hi, welcome to SimpleChat! Go ahead and send me a message. 😄",
        },
        {
            name: "Sajad",
            time: "12:45",
            text: "Hi, welcome to SimpleChat! Go ahead and send me a message. 😄",
        },
        {
            name: "BOT",
            time: "12:45",
            text: "Hi, welcome to SimpleChat! Go ahead and send me a message. 😄",
        },
        {
            name: "BOT",
            time: "12:45",
            text: "Hi, welcome to SimpleChat! Go ahead and send me a message. 😄",
        },
    ]);
    const [message, setMessage] = useState();
    return (
        <section className="msger">
        <header className="msger-header">
            <div className="msger-header-title">
            <i className="fas fa-comment-alt"></i> SimpleChat
            </div>
            <div className="msger-header-options">
            <span><i className="fas fa-cog"></i></span>
            </div>
        </header>

        <main className="msger-chat">
            {messages.map(i => i.name === 'BOT' ? <RightBubble user={i}/>: <LeftBubble user={i}/>)}
        </main>

        <form className="msger-inputarea" onSubmit={(event) => {
            event.preventDefault();
        }}>
            <input type="text" className="msger-input" placeholder="Enter your message..." value={message} onChange={(event) => setMessage(event.target.value)} />
            <button type="submit" className="msger-send-btn">Send</button>
        </form>
        </section>
    );
}