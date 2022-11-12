import { useMap } from 'react-leaflet';

export const SetView = ({center, zoom}) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}