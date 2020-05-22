import { fetch } from '../lib/branch'
export class Schedule {
  static schedule = require('node-schedule')

  static scheduleCronstyle = () => {
    fetch ()
    Schedule.schedule.scheduleJob('30 * * * * *', () => {
      // console.log('scheduleCronstyle:' + new Date());
      // fetch ()
    })
  }
}
