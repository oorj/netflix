import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import Video from '../components/Video';
import MovieCast from '../components/MovieCast';

const MovieDetail = () => {
  let [showDetail, setShowDetail] = useState({})
  const API_KEY = process.env.REACT_APP_API_KEY;
  let {id} = useParams()

  const detail = async()=> {
    let url = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko-KR`;
    let response = await fetch(url);
    let data =  await response.json()
    console.log(data)
    setShowDetail(data);
  }

  useEffect(() =>{
    detail()
  }, [showDetail])


  return (
    <Container>
      <Row className='detail_section'>
        <Col lg={6} className="detail_section detail_img_card">
          <div
            className="detail-img"
            style={{
              backgroundImage:
                "url(" +
                `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${showDetail?.poster_path}` +
                ")",
            }}
          ></div>
        </Col>

        <Col lg={6} className='detail-info-group'>
          <div className='detail-title'>{showDetail?.title}</div>
          <div className='detail-original_title'>{showDetail?.original_title}</div>
          <div className='detail-tagline'>{showDetail?.tagline}</div>
          <div className='detail-overview'>{showDetail?.overview}</div>
          <hr/>
          <div className="detail-info2">
            <div>
              <Badge text="white">개봉일 </Badge>
              {showDetail?.release_date
}
            </div>
            <div>
              <Badge text="white">상영시간 </Badge>
              {showDetail?.runtime}분
            </div>
            <div>
              <Badge text="white">평점 </Badge>
              {showDetail?.vote_average}
            </div>
            <div>
              <Badge text="white">등급 </Badge>
              {showDetail?.adult? "19세이상": "15세이하"}
            </div>
          </div>
          <div>
            <Video />
          </div>
        </Col>
        </Row>
        <MovieCast />
    </Container>
  );
};


export default MovieDetail