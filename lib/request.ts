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
  return tags.map((item: { name: string }) => item.name)
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
  return branches.map((item: { name: string }) => item.name)
}

/**
* 全部项目
*/
export const fetchProjects = async function () {
  const { data: projects } = await request('/projects?visibility=private')
  const items = projects.map((item: {
      name: string,
      description: string,
      id: number
    }) => {
    return {
      name: item.name,
      subtitle: item.description,
      id: item.id,
    }
  })
  return items
}