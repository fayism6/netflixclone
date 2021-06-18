import axios from './axios';
import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import {imageUrl,API_KEY} from './constans/constans'
import styled from 'styled-components';
function Rowpost(props) {
    const [movies, setMovies] = useState([])
    const [urlId,setUrlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then((response)=>{
            console.log(response.data)
            setMovies(response.data.results)
        })
    
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const handleMovie = (id)=>{
        axios.get(`movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response) =>{
            if(response.data.results.length!==0){
                setUrlId(response.data.results[0])
            }
        })
      }
    return (
       <Container>
           <Title>{props.title}</Title>
            <Poster>
                {movies.map((obj)=>
                <PosterImage onClick={()=>handleMovie(obj.id)} name={props.name} src={`${imageUrl+obj.backdrop_path}`}
                alt="">
                </PosterImage>
                )}
                <StyledButton><i class="fas fa-chevron-right"></i></StyledButton>
            </Poster>
            {urlId && <Youtube videoId={urlId.key} opts={opts}></Youtube>}
       </Container>
    )
}
export default Rowpost

const Container = styled.div `
    color: #ffffff;
    margin-left: 15px;

`

const Title = styled.h2 `

`

const Poster = styled.div `
    display: flex;
    padding: 20px;
    overflow-x: scroll;
    overflow-y: hidden;

    &::-webkit-scrollbar{
        display: none;
    }
`

const PosterImage = styled.img `
    max-height: ${ props => props.name==="issmall" ? "150px":"250px" };
    margin-right: 10px;
    cursor:pointer;

    &:hover{
        transform:scale(1.08);
    }
`

const StyledButton = styled.button `
    color:red;
    outline: none;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    padding: 0.5rem 2rem 0.5rem 2rem;
    background-color: rgba(051, 051, 051, 0.5);
    margin-right:1rem;
    &:hover{
        color:white;
        background-color:red;
    }
`
