import { useState } from "react";

function Events() {
    const [name, setName] = useState("");
    const [venue, setVenue] = useState("");
    const [message, setMessage] = useState("");

    const addEvent = async () => {
        const response = await fetch("http://localhost:5000/api/events", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: name,
                venue: venue,
            }),
        });

        const data = await response.json();

        setMessage(data.message);

        console.log("Backend response:", data);
    };

    return (
        <div>
            <h1>📅 Campus Events</h1>

            <input
                type="text"
                placeholder="Event name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Venue"
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
            />

            <button onClick={addEvent}>
                Add Event
            </button>

            <p>{message}</p>
        </div>
    );
}

export default Events;