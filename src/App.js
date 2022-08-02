import React from 'react'
import { ChatEngine } from "react-chat-engine";

// Importer le chat des composant
import  ChatFeed  from './components/ChatFeed';

import './App.css' 

// Dans renderChatFeed on va retourner les props de chatApp et appeler le component ChatFeed que l'on a créer, ensuite dans les props(attributs) on appelle les élements données de chatApp grace au spread operator
const App = () => {
    return (
        <ChatEngine 
            height="100vh"
            projectID="dc4eb474-8851-4594-a900-d67ecef89f72
"
            userName="kennybaga"
            userSecret="123123"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    );
};

export default App;