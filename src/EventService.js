import axios from 'axios'

export default {
  async getLog4jData() {
    let res = await axios.get('https://raw.githubusercontent.com/cisagov/log4j-affected-db/develop/README.md')
    return res.data
  }
}