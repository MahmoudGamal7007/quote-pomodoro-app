
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import axios from 'axios'


const initialState = {
  loading: false,
  data: {},
  error: ''
}

// ACTION CREATORS
const FetchQuotesRequest = () => {
  return {
    type: 'FETCH_QUOTES_REQUEST'
  }
}

const FetchQuotesSuccess = (data) => {
  return {
    type: 'FETCH_QUOTES_SUCCESS',
    payload: data
  }
}
const FetchQuotesFailure = (error) => {
  return {
    type: 'FETCH_QUOTES_FAILURE',
    payload: error
  }
}



// DISPATCH AN ACTION
export const FetchQuotes = () => {
  return dispatch => {

    // DISPATCH FETCH_QUOTES_REQUEST INITIALLY
    dispatch(FetchQuotesRequest())

    axios.get('https://quote-garden.herokuapp.com/api/v2/quotes/random')
      .then(response => {


        // DISPATCH FETCH_QUOTES_SUCCESS
        const { quoteText: quote, quoteAuthor: author } = response.data.quote;

        dispatch(FetchQuotesSuccess({ quote, author }))
      })

      .catch(err => {

        // DISPATCH FETCH_QUOTES_FAILURE
        dispatch(FetchQuotesFailure(err.message))
      })
  }
}



const reducer = (state = initialState, action) => {

  switch (action.type) {

    case 'FETCH_QUOTES_REQUEST':
      return {
        ...state,
        loading: true
      }
    case 'FETCH_QUOTES_SUCCESS':
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: ''
      }
    case 'FETCH_QUOTES_FAILURE':
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload
      }
    default:
      return state
  }
}


const store = createStore(reducer, applyMiddleware(ReduxThunk))

store.subscribe(() => {
  // console.log(store.getState())
})

export default store