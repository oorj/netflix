import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const TvCard = ({show}) => {

  let navigate = useNavigate()
  const {tvgenre} = useSelector(state=>state.tv)

  return (
    <div className='TVcard-group' onClick={()=>navigate(`/tv/${show.id}`)}>
        <div className='Tvcard' style={{backgroundImage: "url(" + `https://image.tmdb.org/t/p/w220_and_h330_face${show?.poster_path}` + ")",}}>     
            <div className='card-overlay'> 
              <h1>{show.name}</h1>
              <div className='vote-group'>
                <span className='original_language'>평점 {show.vote_average}</span>               
              </div>
              <div className='vote-group'>
                <span className='original_language'>첫 방영날짜 {show.first_air_date}</span>               
              </div>
              <div className='genre'>
                    {show.genre_ids.map((id,idx)=>
                    <Badge bg="primary" key={idx}>{tvgenre.find(item=>item.id==id).name}</Badge>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TvCard
