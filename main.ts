import YAML from 'yamljs'
import { Schedule } from './schedule/branch'

const config = YAML.load('config.yaml')
console.log(config)
console.log(config.token)
Schedule.scheduleCronstyle()