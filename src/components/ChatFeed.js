import React from "react";
import MessageForm from "./MessageForm";
import MyMessage from "./MyMessage";
import TheirMessage from "./TheirMessage";


const ChatFeed = (props) => {
   const { chats, activeChat, userName, messages} = props;

// Dans la constante chats, on mets une condition que SI chats existe alors rechercher dans le tableau de chats l'élement activeChat
    const chat = chats && chats[activeChat];

   /* 
   
   // Pour render les messages
    //On va chopper les clés de chaque élements, Objects.key
    //les clés me serve me servent à retrouver les messages 
    //ensuite avec message on va chopper ces messages
    //avec lastMessageKey on dit que s'il n'y a aucun message on 
    n'affiche rien, parcontre si il y un message on prend la dernière
     clé qui correspond au dernier message index -1

    */

    const renderMessages = () => {
        const keys = Object.keys(messages);

        return keys.map((key, index) => {
            const message = messages[key]
            const lastMessageKey = index === 0 ? null : keys[index -1];
            const isMyMessage = userName === message.sender.username;

    return (
        <div key={`msg_${index}`} style={{width: '100%'}}>
            <div className="message-block">
                {
                    isMyMessage ? <MyMessage /> : <TheirMessage />
                }
            </div>
            <div className="read-receipts" style={{ marginRight: isMyMessage ? '18px' : '0px', marginLeft: isMyMessage ? '0px' : '68px'}}>
                    read-receipts
            </div>
        </div>
    );
})
}

renderMessages()

/* 
On assigne les classes à chacune des divs
et on y appelle la fonction renderMesages

*/
return (
    <div className="chat-feed">
        <div className="chat-title-container">
            <div className="chat-title">
            {chat.title}
            </div>
            <div className="chat-subtitle">
                {chat.people.map((person) => ` ${person.person.userName}`)}
            </div>
        </div>
    </div>
)
}

export default ChatFeed;