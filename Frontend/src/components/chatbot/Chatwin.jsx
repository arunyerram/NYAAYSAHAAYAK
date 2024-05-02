import React from 'react';

const ChatWindow = () => {
    const chatWindowStyle = {
        backgroundColor: 'lightblue', 
        padding: '10px', 
        border: '1px solid #ccc',
        borderRadius: '8px',
        height: '300px',
        width:'400px', 
        overflowY: 'relative', 
    };

    return (
        <div style={chatWindowStyle}>
        {/* Other chat components go here */}
        </div>
    );
};

export default ChatWindow;
