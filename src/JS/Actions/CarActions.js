import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS } from "../ActionTypes/CarActionTypes"
import axios from "axios";

export const getCars = () => async (dispatch) => {
    dispatch({type: GET_CARS_LOAD})
    try {
        const result = await axios.get("/api/cars/get-cars");
        dispatch({type: GET_CARS_SUCCESS, payload: result.data.foundCars})
    } catch (error) {
        dispatch({type: GET_CARS_FAIL, payload: error.response.data.error})
    }
}

export const addCar = (newCar) => async (dispatch) => {
  dispatch({ type: ADD_CAR_LOAD });
  try {
    const result = await axios.post("/api/cars/add-car", newCar);
    dispatch({ type: ADD_CAR_SUCCESS, payload: result.data });
    dispatch(getCars())
  } catch (error) {
    dispatch({ type: ADD_CAR_FAIL, payload: error.response.data.error });
  }
};