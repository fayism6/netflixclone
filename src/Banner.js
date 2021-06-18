import React, { useEffect, useState } from 'react'
import axios from './axios'
import {API_KEY,imageUrl} from './constans/constans'
import styled from 'styled-components';
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[Math.floor(Math.random() * 19)])
        })
    }, [])
    return (
        <Container
        style={{backgroundImage: `url(${movie ? imageUrl+movie.backdrop_path : ""})`}}>
            <Content>
                <Title>{movie ? movie.title : ""}</Title>
                <ButtonGroup>
                    <StyledButton>Play</StyledButton>
                    <StyledButton>My List</StyledButton>
                </ButtonGroup>
                <MovieDescription> 
                    {movie ? movie.overview : ""}
                </MovieDescription>
            </Content>
            <Fade><div></div></Fade>
        </Container>
    )
}

export default Banner

const Container = styled.div `
    background-size: cover;
    height:450px;
    color:#f9ffff;

`

const Content = styled.div `
    padding-top: 140px;
    height: 190px;
    padding-left:15px;

`

const Title = styled.h1 `
    font-size: 3rem;
    font-weight: 800;
    padding-bottom: 0.3rem;
`
const ButtonGroup = styled.div `

`
const StyledButton = styled.button `
    color:white;
    outline: none;
    border: none;
    border-radius: 5px;
    font-weight: 700;
    padding: 0.5rem 2rem 0.5rem 2rem;
    background-color: rgba(051, 051, 051, 0.5);
    margin-right:1rem;
    &:hover{
        color:#111111;
        background-color:#e6e6e6;
    }
`

const MovieDescription = styled.h1 `
    width: 45rem;
    line-height: 1.3;
    padding-top: 1rem;
    font-size: 1rem;
    height: 70px;
    max-width: 480px;

`
const Fade = styled.div `
    height: 7.9rem;
    background-image: linear-gradient(180deg,transparent,rgba(037,037,037,0.61),#111111);
`