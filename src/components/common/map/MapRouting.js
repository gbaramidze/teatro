import { useEffect, useState } from "react";
import L from "leaflet";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine";
import { useMap } from "react-leaflet";

L.Marker.prototype.options.icon = L.icon({
    iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png"
});

export default function MapRouting() {
    const map = useMap();

    const [locationArray, setLocationArray] = useState([]);
    const locationLatLng = [41.624239, 41.596844];
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if ('geolocation' in navigator) {
            // Get the current location
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    setLocationArray([latitude, longitude]);
                },
                (error) => {
                    // Handle geolocation errors
                    console.error('Error getting location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by your browser.');
        }

        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }, [])

    useEffect(() => {
        if (!map) return;


        if (locationArray.length) {

            const routingControl = L.Routing.control({
                waypoints: [L.latLng(locationArray[0], locationArray[1]), L.latLng(locationLatLng[0], locationLatLng[1])],
                routeWhileDragging: true
            }).addTo(map);

            // add class name in leaflet_container
            if (routingControl) {
                const leaflet_container = document.querySelector(".leaflet-routing-container")
                leaflet_container.classList.add('leaflet-routing-collapsible')
                const span = document.createElement("span")
                span.className = "leaflet-routing-collapse-btn"
                leaflet_container.append(span)
            }

            // add addEventListener routing close btn 
            const closeBtn = document.querySelector(".leaflet-routing-collapse-btn")
            if (closeBtn) {
                let check = 0
                closeBtn.addEventListener('click', () => {
                    const leaflet_container = document.querySelector(".leaflet-routing-container")
                    if (check === 0) {
                        leaflet_container.classList.add("leaflet-routing-container-hide")
                        check = 1
                    }
                    else {
                        leaflet_container.classList.remove("leaflet-routing-container-hide")
                        check = 0
                    }
                })
            }
        }
    }, [map, locationArray]);
    return (
        <>
            {
                loading ?
                    <h1 style={{ position: "fixed", top: "0", left: "0", width: "100%", height: "100%", backgroundColor: "black", opacity: "0.7", display: "flex", justifyContent: "center", alignItems: "center", zIndex: "1000" }}>Loading</h1>
                    :
                    ""

            }
        </>
    )
}
