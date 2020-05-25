import { fetch } from '../lib/branch'
const sendSMS = require('@shinho-sh/sms')
export class Schedule {
  static schedule = require('node-schedule')

  static scheduleCronstyle = () => {
    // fetch ()
    // sendSMS('18516236270', '发送test', 'ir')

    
    Schedule.schedule.scheduleJob('30 * * * * *', () => {
      // console.log('scheduleCronstyle:' + new Date());
      // fetch ()

    })
  }
}
