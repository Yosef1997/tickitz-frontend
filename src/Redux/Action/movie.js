import http from '../../Helper/http'

export const nowShow = (token, search, order, limit, page, sort) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: ''
      })
      const results = await http(token).get(
        `/movie/month?search=${search !== undefined ? search : ''}&limit=${
          limit !== undefined ? limit : 4
        }&page=${page !== undefined ? page : 1}&sort=${
          sort !== undefined ? sort : 'id'
        }&order=${order !== undefined ? order : 'ASC'}`
      )
      dispatch({
        type: 'NOW_SHOW',
        payload: results.data.results
      })
      dispatch({
        type: 'PAGE_INFO_ALL_MOVIE',
        payload: results.data.pageInfo
      })
      dispatch({
        type: 'IS_LOADING',
        payload: false
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: message
      })
    }
  }
}

export const allMovieByMonth = (token, search, order, limit, page, sort) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: ''
      })
      const results = await http(token).get(
        `/movie/month?search=${search !== undefined ? search : ''}&limit=${
          limit !== undefined ? limit : 4
        }&page=${page !== undefined ? page : 1}&sort=${
          sort !== undefined ? sort : 'releaseDate'
        }&order=${order !== undefined ? order : 'ASC'}`
      )
      dispatch({
        type: 'ALL_MOVIE_BY_MONTH',
        payload: results.data.results
      })
      dispatch({
        type: 'PAGE_INFO_ALL_MOVIE',
        payload: results.data.pageInfo
      })
      dispatch({
        type: 'IS_LOADING',
        payload: false
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: message
      })
    }
  }
}

export const detailMovie = (token, id) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: ''
      })
      const results = await http(token).get(`/movie/${id}`)
      dispatch({
        type: 'DETAIL_MOVIE',
        payload: results.data.results
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SHOWTIME_MESSAGE',
        payload: message
      })
    }
  }
}

export const searchMovie = (token, search, sort, order, limit, page) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: ''
      })
      const results = await http(token).get(
        `/movie?search=${search !== undefined ? search : ''}&limit=${
          limit !== undefined ? limit : 8
        }&page=${page !== undefined ? page : 1}&sort=${
          sort !== undefined ? sort : 'id'
        }&order=${order !== undefined ? order : 'ASC'}`
      )
      dispatch({
        type: 'SEARCH_MOVIE',
        payload: results.data.results
      })
      dispatch({
        type: 'PAGE_INFO_ALL_MOVIE',
        payload: results.data.pageInfo
      })
    } catch (err) {
      console.log(err)
      const { message } = err.response.data
      dispatch({
        type: 'SET_MOVIE_MESSAGE',
        payload: message
      })
    }
  }
}

export const newDataMovieFlatList = (movie, pageInfo) => {
  return async (dispatch) => {
    dispatch({
      type: 'ALL_MOVIE',
      payload: movie
    })
    dispatch({
      type: 'PAGE_INFO_ALL_MOVIE',
      payload: pageInfo
    })
  }
}
