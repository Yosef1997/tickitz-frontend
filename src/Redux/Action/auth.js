import http from '../../Helper/http'
import jwt from 'jwt-decode'

export const signup = (email, password) => {
  return async (dispatch) => {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('password', password)
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: ''
      })
      const results = await http().post('/auth/register', params)
      dispatch({
        type: 'SIGN_UP',
        payload: results.data.message
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message
      })
    }
  }
}

export const signin = (email, password) => {
  return async (dispatch) => {
    const params = new URLSearchParams()
    params.append('email', email)
    params.append('password', password)
    try {
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: ''
      })
      const results = await http().post('/auth/login', params)
      const token = results.data.results
      const user = jwt(token)
      dispatch({
        type: 'SIGN_IN',
        payload: token,
        user: user
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message
      })
    }
  }
}

export const updateUser = (token, data) => {
  return async (dispatch) => {
    try {
      const form = new FormData()
      Object.keys(data).forEach((key) => {
        form.append(key, data[key])
      })
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: ''
      })
      const results = await http(token).patch('/user/profile', form)
      dispatch({
        type: 'UPDATE_USER',
        payload: results.data.results,
        message: results.data.message
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data

      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message
      })
    }
  }
}

export const deletePicture = (token, data) => {
  return async (dispatch) => {
    try {
      const form = new FormData()
      Object.keys(data).forEach((key) => {
        form.append(key, data[key])
      })
      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: ''
      })
      const results = await http(token).delete('/user/delete', form)
      dispatch({
        type: 'DELETE_PICTURE',
        payload: results.data.results,
        message: results.data.message
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data

      dispatch({
        type: 'SET_AUTH_MESSAGE',
        payload: message
      })
    }
  }
}

export const signout = () => ({
  type: 'SIGNOUT'
})
