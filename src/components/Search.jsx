import { useState } from "react";
import styled from "styled-components";
import { Colors } from "../globalStyles";

const SearchWrapper = styled.div`
  width: 100%;
  max-width: 35rem;
  height: auto;
  display: flex;
  align-items: center;
  margin-top: 1.875rem;
`

const SearchInput = styled.input`
  flex: 1;
  padding: 1.2rem 1.5rem;
  border-radius: 1rem 0 0 1rem;
  cursor: pointer;
  outline: none;
  border: none;
  min-width: 0;
`

const SearchButton = styled.button`
  flex: 0 0 3.625rem;
  height: 3.625rem;
  border-radius: 0 1rem 1rem 0;
  cursor: pointer;
  outline: none;
  border: none;
  background-color: black;
  background-image: url('src/assets/icon-arrow.svg');
  background-repeat: no-repeat;
  background-position: center;

  &::hover, &:focus {
    background-color: ${Colors.darkGray}
  }
`

export const Search = ({fetchIpData}) => {
  const [value, setValue] = useState(null);

  return <SearchWrapper>
    <SearchInput onChange={e => setValue(e.target.value)} placeholder="Search for any IP address or domain" />
    <SearchButton onClick={() => fetchIpData(value)} />
  </SearchWrapper>
}