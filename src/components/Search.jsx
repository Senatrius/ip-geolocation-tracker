import { useState } from "react";
import styled from "styled-components";
import { Colors } from "../globalStyles";
import ipRegex from 'ip-regex';
import isValidDomain from "is-valid-domain";

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
  background-image: url('icon-arrow.svg');
  background-repeat: no-repeat;
  background-position: center;
  transition: .05s;

  &:hover, &:focus {
    background-color: ${Colors.darkGray}
  }
`

export const Search = ({fetchIpData}) => {
  const [value, setValue] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleClick = value => {
    if(ipRegex({exact: true}).test(value)) {
      fetchIpData(value,"")
      setIsError(false);
      return true;
    }

    if(isValidDomain(value)) {
      fetch("https://" + value, {mode: "no-cors"}).then(response => {
        if(response.status === 0 || response.status === 200) {
          fetchIpData("",value)
          setIsError(false);
          return true;
        }
        setIsError(true)
        return false;
      })
    }

    setIsError(true)
    return false;
  }

  const handleChange = e => {
    isError && setIsError(false)
    setValue(e.target.value)
  }

  return <SearchWrapper>
    <SearchInput type="text" style={{background: isError ? "#ffacac" : "white"}} onChange={e => handleChange(e)} placeholder="Search for any IP address or domain" />
    <SearchButton onClick={() => handleClick(value)} />
  </SearchWrapper>
}