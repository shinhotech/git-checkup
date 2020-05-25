import YAML from 'yamljs'
const axios = require('axios')

const config = YAML.load('config.yaml')

const request = axios.create({
  baseURL: config.baseURL,
  headers: {
    'PRIVATE-TOKEN': config.token,
  }
})

/**
 * 全部tag
 * @param id 项目id
 */
export const fetchTags = async function (id: number) {
  const { data: tags } = await request({
    method: 'GET',
    url: `/projects/${id}/repository/tags`
  })
  const tagList = tags.map((item: { name: any }) => item.name)
  return tagList
}

/**
* 全部分支
* @param id 项目id
*/
export const fetchBranches = async function (id: number) {
  const { data: branches } = await request({
    method: 'GET',
    url: `/projects/${id}/repository/branches`
  })
  const branchesList = branches.map((item: { name: any }) => item.name)
  return branchesList
}

/**
* 全部项目
*/
export const fetchProjects = async function () {
  const { data: projects } = await request('/projects?visibility=private')
  const items = projects.map((item: { name: any; description: any; id: any }) => {
    return {
      name: item.name,
      subtitle: item.description,
      id: item.id,
    }
  })
  return items
}