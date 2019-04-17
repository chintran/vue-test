import axios from 'axios'

const baseUrl = 'http://localhost:3030/'
export default {
  get (path) {
    return axios.get(baseUrl + path).then((response) => {
      return response.data
    }, (error) => {
      return error
    })
  },
  getModifier () {
    return this.get('modifier')
  },
  getOwner () {
    return this.get('owner')
  },
  getStructure () {
    return this.get('structure')
  }
}
