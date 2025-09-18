import { useState, useRef } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import data from "../../../public/warehouses.json"; 

// Fix Leaflet icon issue with Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL("leaflet/dist/images/marker-icon-2x.png", import.meta.url).href,
  iconUrl: new URL("leaflet/dist/images/marker-icon.png", import.meta.url).href,
  shadowUrl: new URL("leaflet/dist/images/marker-shadow.png", import.meta.url).href,
});

// Custom component to trigger map flyTo
const FlyToDistrict = ({ position }) => {
  const map = useMap();
  if (position) {
    map.flyTo(position, 10, {
      duration: 2,
    });
  }
  return null;
};

const DistrictMap = () => {
  const [searchText, setSearchText] = useState("");
  const [flyToPos, setFlyToPos] = useState(null);
  const mapRef = useRef();

  const handleSearch = () => {
    const match = data.find((item) =>
      item.district.toLowerCase().includes(searchText.toLowerCase())
    );
    if (match) {
      setFlyToPos([match.latitude, match.longitude]);
    } else {
      alert("No district matched!");
    }
  };

  return (
    <div className="my-10 p-4 max-w-7xl mx-auto bg-base-100 rounded-xl shadow">
      <h2 className="text-3xl font-bold  mb-6 pl-10">
        We are available in <span className="text-primary">64 districts</span>
      </h2>

      <div className="flex  mb-4 pl-10 p-4 relative">
        <input
          type="text"
          placeholder="Search district..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered w-full max-w-xs rounded-full mr-2"
        />
        <div className="absolute left-1/4">
        <button onClick={handleSearch} className="btn ms-1 btn-primary rounded-full">
          Search
        </button>
        </div>
      </div>

      <MapContainer
        center={[23.8103, 90.4125]}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%", borderRadius: "12px" }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {data.map((item, index) => (
          <Marker
            key={index}
            position={[item.latitude, item.longitude]}
          >
            <Popup>
              📍 <strong>{item.district}</strong><br />
              🏙️ {item.city}<br />
              📌 {item.covered_area.slice(0, 3).join(", ")}...
            </Popup>
          </Marker>
        ))}

        {/* Zoom fly effect */}
        {flyToPos && <FlyToDistrict position={flyToPos} />}
      </MapContainer>
    </div>
  );
};

export default DistrictMap;
