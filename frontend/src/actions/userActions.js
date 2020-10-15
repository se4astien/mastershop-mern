// make a request to log in and take the token
import axios from 'axios'
import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
} from '../constants/userConstants'

// Login
export const login = (email, password) => async (dispatch) => {
  try {
    // try to login
    dispatch({ type: USER_LOGIN_REQUEST })
    // dispatch the login success => when we sending the data, we want to sending by headers and content-type
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }
    const { data } = await axios.post(
      '/api/users/login',
      {
        email,
        password,
      },
      config
    )

    // Login with success
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data, // data => user object
    })

    localStorage.setItem('userInfo', JSON.stringify(data))
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    })
  }
}

// Logout
export const logout = () => async (dispatch) => {
  localStorage.removeItem('userInfo')
  dispatch({ type: USER_LOGOUT })
}
