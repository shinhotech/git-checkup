import { fetchProjects, fetchBranches, fetchTags } from '../lib/request'
import { regexBranch, regexTag } from '../lib/regex'
import YAML from 'yamljs'

const sendSMS = require('@shinho-sh/sms')
const schedule = require('node-schedule')
const config = YAML.load('./config.yaml')
const checkList = config.checkList


export class Schedule {

  static scheduleCronstyle = () => {
    // 获取全部项目 并筛选指定配置
    schedule.scheduleJob(config.checkSchedule, async () => {
      const projects = await fetchProjects()
      const filterProjects = checkList.filter((o1: any) => {
        let flag = false
        projects.forEach((o2: any) => {
          if (o1.id === o2.id) {
            flag = true
          }
        })
        return flag
      })
      // console.log('filterProjects', filterProjects)

      // 获取分支/TAG
      filterProjects.forEach(async (o: any) => {
        const branches = await fetchBranches(o.id)
        // 正则分支名
        let errorBranch = branches.filter((name: string) => {
          return !regexBranch(name)
        })
        console.log('errorBranch', errorBranch)
        const tags = await fetchTags(o.id)
        // 正则TAG
        let errorTag = tags.filter((name: string) => {
          return !regexTag(name)
        })
        console.log('errorTag', errorTag)
        // 短信
        console.log(`【Git规范检测工具】项目名称:${o.subtitle},命名不规范分支:${errorBranch.join(',')},命名不规范TAG:${errorTag.join(',')}`)
        sendSMS(o.ownerPhone,
          `【Git规范检测工具】项目名称:${o.subtitle}`
          + (errorBranch.length > 0 ? `,命名不规范分支:${errorBranch.join(',')}` : ``)
          + (errorTag.length > 0 ? `,命名不规范TAG:${errorTag.join(',')}` : ``)
          , 'ir')
      })
    })
  }
}