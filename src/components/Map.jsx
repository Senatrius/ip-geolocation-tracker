import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

export const Map = () => {
  return <MapContainer style={{height: "100%"}} center={[45.4, -75.7]} zoom={12} attributionControl={false} scrollWheelZoom={true} zoomControl={false}>
    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
  </MapContainer>
}