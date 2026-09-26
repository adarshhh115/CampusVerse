import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Home from "./pages/Home";
import Map from "./pages/Map";
import Campus3D from "./pages/Campus3D";
import Events from "./pages/Events";
import Assistant from "./pages/Assistant";

function App() {
  return (
    <BrowserRouter>

      <nav className="navbar">
        <h2>CampusVerse</h2>

        <div>
          <Link to="/">Home</Link>
          <Link to="/map">Map</Link>
          <Link to="/3d">3D Campus</Link>
          <Link to="/events">Events</Link>
          <Link to="/assistant">AI Assistant</Link>
        </div>
      </nav>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/map" element={<Map />} />
          <Route path="/3d" element={<Campus3D />} />
          <Route path="/events" element={<Events />} />
          <Route path="/assistant" element={<Assistant />} />
        </Routes>
      </main>

    </BrowserRouter>
  );
}

export default App;