'use client'
import React from 'react'
import { MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"
import MapRouting from './MapRouting'
// import Routing from './leafletRouting'

const LeafletMap = ({el}) => {

    const locationLatLng = [41.624239, 41.596844];
    return (
        <MapContainer center={locationLatLng} zoom={13} scrollWheelZoom={true} style={{ height: "60vh" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">Teatro</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {el && <MapRouting/>}
        </MapContainer>

    )
}

export default LeafletMap