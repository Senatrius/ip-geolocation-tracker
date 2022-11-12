import { useState } from "react"
import styled from "styled-components"
import { Details } from "./components/Details"
import { Map } from "./components/Map"
import { Search } from "./components/Search"
import { TextSizes } from "./globalStyles"


const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: minmax(9rem, 35%) 65%;
  min-height: 100vh;
`

const Pattern = styled.div`
  width: 100%;
  min-height: 10rem;
  grid-row: 1/2;
  background-image: url('src/assets/pattern-bg.png');
  background-position: 54% 0;
  background-repeat: no-repeat;
  background-size: cover;
`

const MapWrapper = styled.div`
  width: 100%;
  height: auto;
  grid-row: 2/3;
  overflow: hidden;
`

const UI = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  left: 0; 
  right: 0; 
  margin: 0 auto;
  width: 87%;
  height: auto;
  max-width: 1110px;
  z-index: 9999;
`

const Title = styled.h1`
  font-size: ${TextSizes.large};
  font-weight: 500;
  color: white;
  margin-top: 1.875rem;

  @media screen and (min-width: 767px) {
    font-size: ${TextSizes.x_large};
    margin-top: 2.125rem;
  }
`

const App = () => {
  const [ipData, setIpData] = useState(null);

  const fetchIpData = async (ip, domain) => {
    try {
      const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${import.meta.env.VITE_IPFY_API_KEY}&ipAddress=${ip}&domain=${domain}`, {method: "GET"})
      const data = await response.json();

      setIpData(data)
    } catch(err) {
      return false;
    }
  }

  return <Wrapper>
    <Pattern />
    <UI>
      <Title>IP Address Tracker</Title>
      <Search fetchIpData={fetchIpData} />
      <Details ipData={ipData} />
    </UI>
    <MapWrapper className="leaflet-container">
      {ipData && <Map ipData={ipData} />}
    </MapWrapper>
  </Wrapper>
}

export default App