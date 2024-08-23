import { useEffect, useState } from "react";
import GetRequestWithToken from "./APICalls/GetRequestWithToken";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import { Marker, Popup } from "react-leaflet";
import L from 'leaflet';  // Import Leaflet for marker icons if needed
import 'leaflet/dist/leaflet.css';  // Ensure the CSS is imported
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const customIcon = new L.Icon({
    iconUrl: markerIcon,
    iconRetinaUrl: markerIcon2x,
    shadowUrl: markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
});

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const UserClimbs = () => {
    const [climbData, setClimbData] = useState();

    useEffect(() => {
        let userData = JSON.parse(sessionStorage.getItem('user'));
        let currentUser = userData.userId;
        const fetchUserClimbs = async () => {
            if (userData) {
                try {
                    const userClimbs = await GetRequestWithToken('GET', `http://localhost:8080/api/climblog/${currentUser}`);
                    setClimbData(userClimbs);
                }
                catch (error) {
                    console.error("Error fetching data:", error);
                }
            }
            else {
                console.error("Current user not found in session storage.");
            }
        }

        fetchUserClimbs();
    }, []);

    return (
        <div className="myclimbs-container">
            {Array.isArray(climbData) && climbData.length > 0 ? (
            climbData.map((climb) => (
                <div className="climb-container" key={climb.climb.climbId}>
                    <h2 className="climb-area-name">{climb.area.replace(/[^\w ]/, '')}</h2>
                    <h3 className="climb-name">{climb.climb.climbName}</h3>
                    <MapContainer
                            className="map"
                            center={[climb.climb.latitude, climb.climb.longitude]}
                            zoom={13}
                            scrollWheelZoom={false}
                            key={`map-${climb.climb.climbId}`}
                        >
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[climb.climb.latitude, climb.climb.longitude]} icon={customIcon}/>
                        </MapContainer>
                    
                </div>
            )
            ))
            :
            <p className="no-user-climbs">No climbs found.</p>
        }
            {console.log(climbData)}
        </div>
    )
}

export default UserClimbs;