let initialState = {
    on_the_air: [],
    topTv: [],
    popTv: [],
    tvgenre: [],
    loading: true
}

const tvReducer = (state=initialState, action) => {
    let {type, payload} = action;

    switch(type){
        case "GET_TVS_REQUEST":
            return {...state, loading: true}
        case "GET_TVS_SUCCESS":
        return{
            ...state,
            on_the_air: payload.on_the_air,
            topTv: payload.topTv,
            popTv: payload.popTv,
            tvgenre: payload.tvgenre,
            loading: false
        }

        case "GET_TVS_FAILURE":
            return{...state, loading: false}

        default:
            return{...state}
    }
}
export default tvReducer