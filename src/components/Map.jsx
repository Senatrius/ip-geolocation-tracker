import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { SetView } from './SetView';

export const Map = ({ipData}) => {
  const [state, setState] = useState({latitude: 90, longitude: 135})

  useEffect(() => {
    setState({latitude: ipData.location.lat, longitude: ipData.location.lng})
  }, [ipData])

  return <MapContainer style={{height: "100%"}} center={[state.latitude, state.longitude]} zoom={12} attributionControl={false} scrollWheelZoom={true} zoomControl={false}>
    <SetView center={[state.latitude, state.longitude]} zoom={12} />
    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
  </MapContainer>
}