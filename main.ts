import { Schedule } from './schedule/schedule'
import YAML from 'yamljs'
// import { regexBranch, regexTag } from './lib/regex'

const config = YAML.load('config.yaml')
// console.log(config)
// console.log(config.checkList)
// regexBranch('hotfix_IR')
// regexTag('v2.1.1.1')
Schedule.scheduleCronstyle()