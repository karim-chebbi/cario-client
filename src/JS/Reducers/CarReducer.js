import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS } from "../ActionTypes/CarActionTypes"


const initialState = {
    load: false,
    success: null,
    error: null,
    cars: []
}

const CarReducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case GET_CARS_LOAD:
            return {...state, load: true}
            
        case GET_CARS_SUCCESS:
            return {...state, load: false, cars: payload, success: true}
            
        case GET_CARS_FAIL:
            return {...state, success: false, load: false, error: payload}
    
        case ADD_CAR_LOAD:
            return {...state, load: true}

        case ADD_CAR_SUCCESS:
            return {...state, load: false, success: true}

        case ADD_CAR_FAIL:
            return {...state, load: false, success: false, error: payload}
        default:
            return state
    }
}


export default CarReducer