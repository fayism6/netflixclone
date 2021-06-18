import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="netflix-Logo" style={{width: "140px", height: "40px"}}></img>
                
            
            <MenuGroup>
                <ListItem>
                    <li><a className="nav-link" href="#movies">Movies</a></li>
                    <li><a className="nav-link" href="#disc">Discover</a></li>
                    <li><a className="nav-link" href="#Channels">Channels</a></li>
                </ListItem>
            </MenuGroup>
        </Container>
    )
}

export default Header

const Container = styled.div`
    padding: 7px 20px; 
    display: flex;
    align-items: center;
    justify-content: start;
    background:black;
    
`

const MenuGroup = styled.ul`
    display: flex;

`

const ListItem = styled.li`
    display:flex;
    list-style:none;
    li{
        font-weight: 400;
        padding: 0 18px;
        cursor: pointer;
    }

    
`
