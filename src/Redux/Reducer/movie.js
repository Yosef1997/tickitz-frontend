const initialState = {
  nowShow: null,
  allMovieByMonth: null,
  searchMovie: null,
  allDate: null,
  allLocation: null,
  allCinema: null,
  allTime: null,
  pageInfoMovie: null,
  isLoading: false,
  errorMsg: ''
}

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'NOW_SHOW': {
      return {
        ...state,
        nowShow: action.payload
      }
    }
    case 'ALL_MOVIE_BY_MONTH': {
      return {
        ...state,
        allMovieByMonth: action.payload
      }
    }
    case 'SEARCH_MOVIE': {
      return {
        ...state,
        searchMovie: action.payload
      }
    }
    case 'PAGE_INFO_ALL_MOVIE':
      return {
        ...state,
        pageInfoMovie: action.payload
      }
    case 'ALL_DATE': {
      return {
        ...state,
        allDate: action.payload
      }
    }
    case 'ALL_LOCATION': {
      return {
        ...state,
        allLocation: action.payload
      }
    }
    case 'ALL_CINEMA': {
      return {
        ...state,
        allCinema: action.payload
      }
    }
    case 'ALL_TIME': {
      return {
        ...state,
        allTime: action.payload
      }
    }
    case 'IS_LOADING':
      return {
        ...state,
        isLoading: action.payload
      }
    case 'SET_MOVIE_MESSAGE': {
      return {
        ...state,
        errorMsg: action.payload
      }
    }
    default:
      return { ...state }
  }
}

export default movieReducer
