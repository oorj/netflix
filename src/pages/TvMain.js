import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useDispatch, useSelector } from 'react-redux'
import { TvAction } from '../redux/actions/TvAction'
import TvSlide from '../components/TvSlide'

const TvMain = () => {
    const dispatch = useDispatch()
    const {on_the_air, topTv, popTv,  loading} = useSelector(state=>state.tv)
  //console.log("home", popularMovies)

  useEffect(()=> {
    dispatch(TvAction.getTv())
  },[])
    if (loading) {
        return (
          <Loading />
        )
      }
  return (
    <div> 
      <div className='tv-contents'>
        <h1>On_the_air</h1>
        <TvSlide tv={on_the_air}/>
        <h1>Top Rated</h1>
        <TvSlide tv={topTv}/>
        <h1>Popular</h1>
        <TvSlide tv={popTv}/>
      </div>
    </div> 
  )
}

export default  TvMain
