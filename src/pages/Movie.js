import React, { useEffect } from 'react'
import { MovieAction } from '../redux/actions/MovieAction'
import Loading from '../components/Loading'
import MovieSlide from '../components/MovieSlide'
import { useDispatch, useSelector } from 'react-redux'

const Movie = () => {
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
    <div className='contents'>
      <h1>Popular</h1>
      <MovieSlide movie={popularMovies}/>
      <h1>Top Rated</h1>
      <MovieSlide movie={topRatedMovies}/>
      <h1>Upcoming Movies</h1>
      <MovieSlide movie={upcomingMovies}/>
    </div>
</div> 
  )
}

export default  Movie
