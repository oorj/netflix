import React, { useEffect } from 'react'
import Banner from '../components/Banner'
import { useDispatch, useSelector } from 'react-redux'
import { MovieAction } from '../redux/actions/MovieAction'
import Loading from '../components/Loading'
import MovieSlide from '../components/MovieSlide'
import TvMain from './TvMain'
const Home = () => {
  const dispatch = useDispatch()
  const {popularMovies, loading, topRatedMovies, upcomingMovies} = useSelector(state=>state.movie)
  //console.log("home", popularMovies)

  useEffect(()=> {
    dispatch(MovieAction.getMovies())
  }, [])

  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div> 
        <Banner movie={popularMovies.results[4]} />
        <div className='contents'>
          <h1>영화</h1>
          <h2>What's Popular</h2>
          <MovieSlide movie={popularMovies}/>
          <h2>Top Rated Movies</h2>
          <MovieSlide movie={topRatedMovies}/>
          <h2>Up Coming</h2>
          <MovieSlide movie={upcomingMovies}/>
          <h1>TV</h1>
        </div>
        <TvMain />
    </div> 
  )
}

export default Home