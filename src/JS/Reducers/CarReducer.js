import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, DELETE_CAR_FAIL, DELETE_CAR_LOAD, DELETE_CAR_SUCCESS, EDIT_CAR_FAIL, EDIT_CAR_LOAD, EDIT_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_CAR_BYID_FAIL, GET_CAR_BYID_LOAD, GET_CAR_BYID_SUCCESS, GET_MY_CARS_FAIL, GET_MY_CARS_LOAD, GET_MY_CARS_SUCCESS } from "../ActionTypes/CarActionTypes"


const initialState = {
    load: false,
    success: null,
    error: null,
    cars: [],
    myCars: [],
    car: {}
}

const CarReducer = (state=initialState, {type, payload}) => {
    switch (type) {
      case GET_CARS_LOAD:
        return { ...state, load: true };

      case GET_CARS_SUCCESS:
        return { ...state, load: false, cars: payload, success: true };

      case GET_CARS_FAIL:
        return { ...state, success: false, load: false, error: payload };

      case ADD_CAR_LOAD:
        return { ...state, load: true };

      case ADD_CAR_SUCCESS:
        return { ...state, load: false, success: true };

      case ADD_CAR_FAIL:
        return { ...state, load: false, success: false, error: payload };

      case GET_CAR_BYID_LOAD:
        return { ...state, load: true };

      case GET_CAR_BYID_SUCCESS:
        return { ...state, load: false, car: payload.foundCar, success: true };

      case GET_CAR_BYID_FAIL:
        return { ...state, success: false, load: false, error: payload };

      case DELETE_CAR_LOAD:
        return { ...state, load: true };

      case DELETE_CAR_SUCCESS:
        return { ...state, load: false, success: true };

      case DELETE_CAR_FAIL:
        return { ...state, load: false, success: false, error: payload };

      case EDIT_CAR_LOAD:
        return { ...state, load: true };

      case EDIT_CAR_SUCCESS:
        return { ...state, load: false, success: true };

      case EDIT_CAR_FAIL:
        return { ...state, load: false, success: false, error: payload };

      case GET_MY_CARS_LOAD:
        return { ...state, load: true };

      case GET_MY_CARS_SUCCESS:
        return { ...state, load: false, myCars: payload, success: true };

      case GET_MY_CARS_FAIL:
        return { ...state, success: false, load: false, error: payload };

      default:
        return state;
    }
}


export default CarReducer