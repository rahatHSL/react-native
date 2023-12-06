import axios from 'axios'

export const DataFetch = {
  async getPost() {
    const res = await axios.get('https://restcountries.com/v2/all')
    return res.data
  },
}
