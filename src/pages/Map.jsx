import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Map() {
    const [satellite, setSatellite] = useState(true);

    const campusPosition = [10.7615, 76.1437];

    const locations = [
        {
            name: "🏫 Main Building",
            position: [10.7615, 76.1437],
            description: "Main campus building",
        },
        {
            name: "💻 Computer Lab",
            position: [10.7620, 76.1440],
            description: "Computer Science laboratory",
        },
        {
            name: "📚 Library",
            position: [10.7610, 76.1432],
            description: "Central library",
        },
        {
            name: "☕ Canteen",
            position: [10.7608, 76.1442],
            description: "Campus canteen",
        },
        {
            name: "🏟️ Ground",
            position: [10.7622, 76.1433],
            description: "College sports ground",
        },
    ];

    const mapTiles = satellite
        ? "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        : "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

    return (
        <div>
            <h1>🗺️ Campus Map</h1>
            <p>Explore important locations around the campus.</p>

            <button
                onClick={() => setSatellite(!satellite)}
                style={{
                    padding: "12px 20px",
                    margin: "15px 0",
                    border: "none",
                    borderRadius: "10px",
                    background: "#2563eb",
                    color: "white",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}
            >
                {satellite ? "🗺️ Switch to Map" : "🛰️ Switch to Satellite"}
            </button>

            <MapContainer
                center={campusPosition}
                zoom={17}
                style={{
                    height: "550px",
                    width: "100%",
                    borderRadius: "15px",
                }}
            >
                <TileLayer
                    attribution={
                        satellite
                            ? "Tiles © Esri"
                            : "&copy; OpenStreetMap contributors"
                    }
                    url={mapTiles}
                />

                {locations.map((location) => (
                    <Marker key={location.name} position={location.position}>
                        <Popup>
                            <strong>{location.name}</strong>
                            <br />
                            {location.description}
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
}

export default Map;