import {useEffect, useState} from 'react';
import styled from "styled-components";
import { Colors, TextSizes } from '../globalStyles';

const DetailsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1.5rem;
  margin-top: 1.5rem;
  border-radius: 1rem;
  background: white;
  z-index: 99999;

  @media screen and (min-width: 767px) {
    flex-direction: row;
    padding: unset;
  }
`

const Title = styled.p`
  font-size: ${TextSizes.x_small};
  font-weight: 700;
  letter-spacing: 10%;
  text-transform: uppercase;
  color: ${Colors.lightGray};
  margin-bottom: 0.625rem;

  @media screen and (min-width: 767px) {
    margin-bottom: 1rem;
    font-size: ${TextSizes.small};
  }
`

const Value = styled.p`
  font-size: ${TextSizes.medium};
  font-weight: 500;
  color: ${Colors.darkGray};

  @media screen and (min-width: 1000px) {
    font-size: ${TextSizes.large};
  }
`

const ValueWrapper = styled.div`
  position: relative;
  width: 100%;
  text-align: center;

  &:not(:last-of-type) {
    margin-bottom: 1.625rem;
  }

  @media screen and (min-width: 767px) {
    padding: 2rem 1.875rem;
    text-align: left;

    &:not(:last-of-type) {
      margin-bottom: unset;

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 0;
        width: 1px;
        height: 50%;
        background: ${Colors.lightGray};
      }
    }
  }
`

export const Details = ({ipData}) => {
  const [state, setState] = useState({ip: null, location: null, isp: null})

  useEffect(() => {
    setState({ip: ipData?.ip, location: ipData?.location, isp: ipData?.isp})
  }, [ipData])

  return <DetailsWrapper>
    <ValueWrapper>
      <Title>Ip address</Title>
      <Value>{state.ip || "—"}</Value>
    </ValueWrapper>
    <ValueWrapper>
      <Title>Location</Title>
      <Value>{state.location == null ? "—" : `${state.location?.city}, ${state.location?.region} ${state.location?.postalCode || ""}`}</Value>
    </ValueWrapper>
    <ValueWrapper>
      <Title>Timezone</Title>
      <Value>{state.location?.timezone == null ? "—" : `UTC ${state.location?.timezone}`}</Value>
    </ValueWrapper>
    <ValueWrapper>
      <Title>Isp</Title>
      <Value>{state.isp || "—"}</Value>
    </ValueWrapper>
  </DetailsWrapper>
}