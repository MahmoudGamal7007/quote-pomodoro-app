
import Axios from 'axios'
export default function GetQuotesApi() {

  return Axios.get(`https://quote-garden.herokuapp.com/api/v2/quotes/random`)
}
