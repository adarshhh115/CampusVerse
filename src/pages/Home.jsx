import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="home">

            <section className="hero">
                <div className="hero-content">
                    <p className="tag">🚀 SMART DIGITAL CAMPUS</p>

                    <h1>
                        Welcome to <span>CampusVerse</span>
                    </h1>

                    <p className="hero-text">
                        Explore your campus through interactive maps, 3D environments,
                        events and an AI-powered assistant.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/map" className="primary-button">
                            Explore Campus 🗺️
                        </Link>

                        <Link to="/3d" className="secondary-button">
                            Enter 3D World 🧊
                        </Link>
                    </div>
                </div>
            </section>

            <section className="features">
                <div className="feature">
                    <div className="feature-icon">🗺️</div>
                    <h3>Interactive Map</h3>
                    <p>Find buildings, classrooms and important campus locations.</p>
                </div>

                <div className="feature">
                    <div className="feature-icon">🧊</div>
                    <h3>3D Campus</h3>
                    <p>Explore campus buildings through an interactive 3D environment.</p>
                </div>

                <div className="feature">
                    <div className="feature-icon">🤖</div>
                    <h3>AI Assistant</h3>
                    <p>Ask questions and get useful information about your campus.</p>
                </div>
            </section>

        </div>
    );
}

export default Home;