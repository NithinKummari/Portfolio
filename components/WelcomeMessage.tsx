import React from 'react';
import Typewriter from './Typewriter';

const asciiArt = `
            _   _   _   _   _   _   _   _   _  
 / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ 
( N | I | T | H | I | N |   |   |   )
 \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ 
            _   _   _   _   _   _   _   _   _   _   _  
 / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ / \\ 
( K | U | M | M | A | R | I | ' | S |   |   )
 \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ \\_/ 
                                              
`;

export const WelcomeMessage: React.FC = () => {
    return (
        <div className="mb-4">
            <pre className="text-terminal-green text-xs md:text-sm leading-tight glow-text">{asciiArt}</pre>
            <div className="mt-4">
                <Typewriter text="Welcome to my interactive portfolio." />
            </div>
            <div className="mt-1">
                <Typewriter text="Type 'help' to see the list of available commands." speed={30} />
            </div>
        </div>
    );
};
