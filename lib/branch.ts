// import http from 'http'
const { request } = require('./request')

export const fetch = async function () {
    const { data: projects } = await request('/projects?visibility=private')
    const items = projects.map((item: { name: any; description: any; id: any }) => {
        return {
            name: item.name,
            subtitle: item.description,
            id: item.id,
        }
    })
    // console.log('[items]', JSON.stringify({items}))
    // console.log('[items]', items)
    if (items.length) {
        console.log('结果数量',items.length)
        items.forEach (async(o: any) => {
            /** 获取分支 */
            try {
                const { data: branches } = await request({
                    method: 'GET',
                    url: `/projects/${o.id}/repository/branches`
                })
                // console.log('[branches]', branches)
                const branchesList = branches.map((item: { name: any }) => {
                    return {
                        projectName: o.name,
                        branchesName: item.name
                    }
                })
                console.log('[branchesList]', branchesList)
            } catch (e) {
                console.log(e, 'e')
            }
            /** 获取tag */
            try {
                const { data: tags} = await request({
                    method: 'GET',
                    url: `/projects/${o.id}/repository/tags`
                })
                // console.log('[tags]', tags) 
                const tagList = tags.map((item: { name: any }) => {
                    return {
                        projectName: o.name,
                        tagName: item.name
                    }
                })
                console.log('[tagList]', tagList) 
            } catch (e) {
                console.log(e, 'e')
            }
        })
    }
}
/**
 * 获取某项目branch列表
 */
// curl --header "PRIVATE-TOKEN: V2Npu26Zgx1cuMWUPFVY" http://10.211.62.41:8081/api/v4/projects/1764/repository/branches
