import axios from 'axios';
import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS
} from '../constants/userConstants';

// Login
export const login = (email, password) => async (dispath) => {
    try{
        dispath({
            type: LOGIN_REQUEST,
        })

        const config = {
            headers: {
                'Content-Type':'application/json'
            }
        }

        const { data } = await axios.post('/api/v1/login', {email,password}, config)

        dispath({
            type: LOGIN_SUCCESS,
            payload: data.user
        })
    }catch(error){
        dispath({
            type: LOGIN_FAIL,
            payload: error.response.data.message
        })
    }
}