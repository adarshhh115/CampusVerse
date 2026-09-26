import { useState, useRef, useEffect } from 'react';

function Assistant() {
    const [messages, setMessages] = useState([
        { id: 1, text: "Hi! I'm CampusVerse AI. How can I help you today?", isBot: true }
    ]);
    const [inputValue, setInputValue] = useState("");
    const messagesEndRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = (text) => {
        if (!text.trim()) return;

        const newMsg = { id: Date.now(), text, isBot: false };
        setMessages(prev => [...prev, newMsg]);
        setInputValue("");

        // Simple hardcoded replies
        setTimeout(() => {
            let reply = "I'm not sure about that. Try asking about the Library, Canteen, or Events!";
            const lowerText = text.toLowerCase();
            
            if (lowerText.includes("library")) {
                reply = "The main library is open from 8 AM to 10 PM. It has quiet study zones on the 2nd and 3rd floors.";
            } else if (lowerText.includes("canteen")) {
                reply = "The campus canteen serves meals from 7 AM to 8 PM. Today's special is pasta!";
            } else if (lowerText.includes("event")) {
                reply = "There is a tech symposium happening in the main auditorium this Friday at 10 AM.";
            }

            setMessages(prev => [...prev, { id: Date.now(), text: reply, isBot: true }]);
        }, 1000);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 80px)', maxWidth: '800px', margin: '0 auto', padding: '20px', boxSizing: 'border-box' }}>
            <h1 style={{ textAlign: 'center', color: '#333' }}>🤖 CampusVerse AI</h1>
            
            {/* Chat Container */}
            <div style={{ flex: 1, overflowY: 'auto', backgroundColor: '#f9f9f9', borderRadius: '10px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '15px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
                {messages.map(msg => (
                    <div key={msg.id} style={{ alignSelf: msg.isBot ? 'flex-start' : 'flex-end', backgroundColor: msg.isBot ? '#e0e0e0' : '#007bff', color: msg.isBot ? '#333' : '#fff', padding: '10px 15px', borderRadius: '15px', maxWidth: '75%', lineHeight: '1.4' }}>
                        {msg.text}
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Quick Buttons */}
            <div style={{ display: 'flex', gap: '10px', marginTop: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <button onClick={() => handleSend("Tell me about the Library")} style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid #007bff', backgroundColor: 'transparent', color: '#007bff', cursor: 'pointer' }}>Library</button>
                <button onClick={() => handleSend("What's in the Canteen?")} style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid #007bff', backgroundColor: 'transparent', color: '#007bff', cursor: 'pointer' }}>Canteen</button>
                <button onClick={() => handleSend("Any upcoming Events?")} style={{ padding: '8px 15px', borderRadius: '20px', border: '1px solid #007bff', backgroundColor: 'transparent', color: '#007bff', cursor: 'pointer' }}>Events</button>
            </div>

            {/* Input Area */}
            <div style={{ display: 'flex', marginTop: '15px', gap: '10px' }}>
                <input 
                    type="text" 
                    value={inputValue} 
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSend(inputValue)}
                    placeholder="Ask me anything..." 
                    style={{ flex: 1, padding: '12px 15px', borderRadius: '25px', border: '1px solid #ccc', outline: 'none', fontSize: '16px' }}
                />
                <button onClick={() => handleSend(inputValue)} style={{ padding: '10px 20px', borderRadius: '25px', border: 'none', backgroundColor: '#007bff', color: 'white', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>Send</button>
            </div>
        </div>
    );
}

export default Assistant;