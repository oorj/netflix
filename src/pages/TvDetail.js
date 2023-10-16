import React, {useState, useEffect} from 'react'
import { Container, Row, Col, Badge } from 'react-bootstrap'
import { useParams } from 'react-router-dom';
import TvCast from '../components/TvCast';



const TvDetail = () => {
  let [showTvDetail, setShowTvDetail] = useState()
  const API_KEY = process.env.REACT_APP_API_KEY;
  let {id} = useParams()

  const Tvdetail = async()=> {
    let url = `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=ko-KR`;
    let response = await fetch(url);
    let data =  await response.json()
    //console.log(data)
    setShowTvDetail(data);
  } 
  useEffect(() =>{
    Tvdetail()
  })

  return (
    <Container>
      <Row className='detail_section'>
        <Col lg={6} className="detail_section detail_img_card">
          <div
            className="detail-img"
            style={{
              backgroundImage:
                "url(" +
                `  https://www.themoviedb.org/t/p/w600_and_h900_face${showTvDetail?.poster_path}` +
                ")",
            }}
          ></div>
        </Col>

        <Col lg={6} className='detail-info-group'>
          <div className='detail-title'>{showTvDetail?.name}</div>
          <div className='detail-original_name'>{showTvDetail?.original_name}</div>
          <div className='detail-overview'>{showTvDetail?.overview}</div>
          <hr/>
          <div className='detail-info'>
            <div>
                <Badge text='white'>시즌</Badge>
                {showTvDetail?.number_of_seasons}시즌
            </div>
            <div>
                <Badge text='white'>첫 방영일</Badge>
                {showTvDetail?.first_air_date}
            </div>
            <div>
                <Badge text='white'>최근 방송일</Badge>
                {showTvDetail?.last_air_date} - {showTvDetail?.last_episode_to_air?.episode_number}화
            </div>
            <div>
                <Badge text='white'>다음 방송일</Badge>
                {showTvDetail?.next_episode_to_air?.air_date} - {showTvDetail?.next_episode_to_air?.episode_number}화
            </div>
            </div>
          <div className="detail-info2">
             <div>
                <Badge text="white">평점 </Badge>
                {showTvDetail?.vote_average}점
            </div>
          </div>
        </Col>
        </Row>
        <TvCast />
    </Container>
  );
};



export default TvDetail