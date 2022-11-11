import styled from "styled-components"
import { TextSizes } from "./globalStyles"

const Wrapper = styled.div`
  position; relative;
  display: grid;
  grid-template-rows: 35% 65%;
  min-height: 100vh;
`

const Pattern = styled.div`
  width: 100%;
  grid-row: 1/2;
  background-image: url('src/assets/pattern-bg.png');
  background-position: 54% 0;
  background-repeat: no-repeat;
  background-size: cover;
`

const MapWrapper = styled.div`
  width: 100%;
  grid-row: 2/3;
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
  return <Wrapper>
    <Pattern />
    <UI>
      <Title>IP Address Tracker</Title>
    </UI>
    <MapWrapper>

    </MapWrapper>
  </Wrapper>
}

export default App