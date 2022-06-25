import React, { Component } from 'react'
import styled from 'styled-components'


const StyledHeader = styled.header`
    /* background-color: ${(props)=>props.theme.bg};
    color: ${(props)=>props.theme.mainColor};

    padding:0.75em;
  */
    background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: #edc;


`

export const Header = ({theme}) =>{

    return (
        <StyledHeader theme={theme}>
            <h1>Book Finder</h1>
        </StyledHeader>
    )
}