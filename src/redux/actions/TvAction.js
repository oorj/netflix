import api from "../api"

/* 
    리덕스 미들웨어
    - 두개의 개체 사이에서 원만히 통신할 수 있도록 돕는 역할
    - 리덕스 미들웨어는 액션과 리듀서 사이의 중간자
    - [액션] - [미들웨어] - [리듀서] - [스토어]
    - 비동기 처리 작업을 간편하게 가능
*/

const API_KEY = process.env.REACT_APP_API_KEY

 function getTv() {
    return async( dispatch) => {
        try {
            dispatch({type:"GET_MOVIES_REQUEST"})

            const on_the_airApi = api.get(`/tv/on_the_air?api_key=${API_KEY}&language=ko-KR&page=1`)
            const topTvApi = api.get(`/tv/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`)
            const popTvApi = api.get(`tv/popular?api_key=${API_KEY}&language=ko-KR&page=1`)

            /* 장르 정보를 요청하는 api */
            const tvgenreApi = api.get(`/genre/tv/list?api_key=${API_KEY}&language=ko-KR`)



            let [on_the_air, topTv, popTv, tvgenre] = 
            await Promise.all([
                on_the_airApi,
                topTvApi,
                popTvApi,
                tvgenreApi
            ]);
            /* console.log("장르리스트:", tvgenre) */
    

            dispatch({
                type: "GET_TVS_SUCCESS",
                payload: {
                    on_the_air: on_the_air.data,
                    topTv: topTv.data,
                    popTv: popTv.data,
                    tvgenre: tvgenre.data.genres,
                    loading: false
                }    
            })
/*             console.log(on_the_air)
            console.log(topTv)
            console.log(popTv) */
        } catch(error) {
            //에러 핸들링하는 곳
            dispatch({type: "GET_TVS_FAILURE"})

        }
    }
    
 }

 export const TvAction = {
    getTv,
 }