import YAML from 'yamljs'
const axios = require('axios')

const config = YAML.load('config.yaml')
// console.log(config.baseURL)
// console.log(config.token)
exports.request = axios.create({
    baseURL: config.baseURL,
    headers: {
      'PRIVATE-TOKEN': config.token,
    }
})