import { GET_DATA, GET_DATA_SUCCESS, GET_SINGLE_DATA_SUCCESS } from "./actionTypes.js"


export const getData=(payload)=>({
     type:GET_DATA,
     payload
})

export const getDataSuccess=(payload)=>({
     type:GET_DATA_SUCCESS,
     payload
})


export const fetchSingleData = (payload) => ({
     type : GET_SINGLE_DATA_SUCCESS,
     payload
});