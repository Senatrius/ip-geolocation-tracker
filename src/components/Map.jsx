import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css'
import { SetView } from './SetView';

export const Map = ({ipData}) => {
  const [state, setState] = useState({latitude: 90, longitude: 135})

  const LeafIcon = L.Icon.extend({
    options: {}
  });

  const MarkerIcon = new LeafIcon({
    iconUrl: "src/assets/icon-location.svg",
    iconAnchor: [28, 56],
    popupAnchor: [-4, 4]
  })

  useEffect(() => {
    setState({latitude: ipData.location.lat, longitude: ipData.location.lng})
  }, [ipData])

  return <MapContainer style={{height: "100%"}} center={[state.latitude, state.longitude]} zoom={12} attributionControl={false} scrollWheelZoom={true} zoomControl={false}>
    <SetView center={[state.latitude, state.longitude]} zoom={12} />
    <TileLayer url="http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors' />
    <Marker position={[state.latitude, state.longitude]} icon={MarkerIcon}>
      {ipData.as && <Popup>
        {ipData.as.name}
        <br />
        {ipData.as.domain}
      </Popup>}
    </Marker>
  </MapContainer>
}