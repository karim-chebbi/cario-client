import { ADD_CAR_FAIL, ADD_CAR_LOAD, ADD_CAR_SUCCESS, DELETE_CAR_FAIL, DELETE_CAR_LOAD, DELETE_CAR_SUCCESS, EDIT_CAR_FAIL, EDIT_CAR_LOAD, EDIT_CAR_SUCCESS, GET_CARS_FAIL, GET_CARS_LOAD, GET_CARS_SUCCESS, GET_CAR_BYID_FAIL, GET_CAR_BYID_LOAD, GET_CAR_BYID_SUCCESS } from "../ActionTypes/CarActionTypes"
import axios from "axios";


// Get all cars
export const getCars = () => async (dispatch) => {
    dispatch({type: GET_CARS_LOAD})
    try {
        const result = await axios.get("/api/cars/get-cars");
        dispatch({type: GET_CARS_SUCCESS, payload: result.data.foundCars})
    } catch (error) {
        dispatch({type: GET_CARS_FAIL, payload: error.response.data.error})
    }
}

// Get car by id action
export const getCarById = (id) => async (dispatch) => {
    dispatch({type: GET_CAR_BYID_LOAD})
    try {
        const result = await axios.get(`/api/cars/get-car/${id}`);
        dispatch({type: GET_CAR_BYID_SUCCESS, payload: result.data})
    } catch (error) {
        dispatch({type: GET_CAR_BYID_FAIL, payload: error.response.data.error})
    }
}

// Add car action
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

// Delete car by id action
export const deleteCar = (id, navigate) => async (dispatch) => {
    dispatch({type: DELETE_CAR_LOAD})
    try {
        const result = await axios.delete(`/api/cars/delete-car/${id}`);
        dispatch({type: DELETE_CAR_SUCCESS, payload: result.data})
        navigate('/shop')
    } catch (error) {
        dispatch({type: DELETE_CAR_FAIL, payload: error.response.data.error})
    }
}

// Edit car action
export const editCar = (id, newCar) => async (dispatch) => {
    dispatch({type: EDIT_CAR_LOAD})
    try {
        const result = await axios.put(`/api/cars/update-car/${id}`, newCar);
        dispatch({type: EDIT_CAR_SUCCESS, payload: result.data})
        dispatch(getCarById(id))
    } catch (error) {
        dispatch({type: EDIT_CAR_FAIL, payload: error.response.data.error})
    }
}