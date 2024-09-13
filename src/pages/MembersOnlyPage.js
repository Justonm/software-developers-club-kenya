<<<<<<< HEAD
import React, { useState } from 'react';
import '../styles.css'; // Import existing styles

const MembersOnlyPage = () => {
    const [message, setMessage] = useState(null);

    // Example event data
    const events = [
        {
            id: 1,
            name: "Tech Conference 2024",
            date: "October 15, 2024",
            location: "Convention Center, Downtown",
            registrationLink: "http://example.com/register-tech-conference"
        },
        {
            id: 2,
            name: "React Workshop",
            date: "November 5, 2024",
            location: "Tech Hub, Room 203",
            registrationLink: "http://example.com/register-react-workshop"
        },
        {
            id: 3,
            name: "Networking Mixer",
            date: "December 1, 2024",
            location: "City Hall Lounge",
            registrationLink: "http://example.com/register-networking-mixer"
        }
    ];

    // Function to handle link clicks
    const handleRegisterClick = (url) => {
        // Optionally open the URL in a new tab (comment this line if you don't want to open the URL)
        // window.open(url, '_blank');
        setMessage('Thank you for registering! Please check your email for more details.');
    };

    return (
        <div className="container page">
            <h1>Members-Only Events</h1>
            <p>Exclusive events for our members. Check out the details below and register to attend!</p>

            {message && <p className="message">{message}</p>} {/* Display message if any */}

            <div className="events-list">
                {events.map((event) => (
                    <div key={event.id} className="event-card">
                        <h2>{event.name}</h2>
                        <p>Date: {event.date}</p>
                        <p>Location: {event.location}</p>
                        <button
                            onClick={() => handleRegisterClick(event.registrationLink)}
                            className="register-button"
                        >
                            Register Now
                        </button>
                    </div>
                ))}
            </div>
=======
import React from 'react';
import '../styles.css'; // Import existing styles

const MembersOnlyPage = () => {
    return (
        <div className="container page">
            <h1>Members-Only Content</h1>
            <p>Exclusive content accessible only to logged-in members.</p>
>>>>>>> e0a8400bbf40556771c40fdf703feb79703e8835
        </div>
    );
};

export default MembersOnlyPage;
