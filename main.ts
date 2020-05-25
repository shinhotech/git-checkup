import YAML from 'yamljs'
import { Schedule } from './schedule/branch'
import { regexBranch, regexTag } from './lib/regex'

const config = YAML.load('config.yaml')
// console.log(config)
// console.log(config.token)
Schedule.scheduleCronstyle()
regexBranch('hotfix_IR-123')
regexTag('v2.1.1.1.1.1')