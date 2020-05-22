// import http from 'http'
const { request } = require('./request')

export const fetch = async function () {
    const { data: projects } = await request('/projects')
    // console.log('[data]', projects)
    const items = projects.map((item: { name: any; description: any; id: any }) => {
        return {
            name: item.name,
            subtitle: item.description,
            id: item.id,
        }
    })
    // console.log('[items]', JSON.stringify({items}))
    console.log('[items]', items)
    if (items.length) {
        console.log('结果数量',items.length)
        items.forEach (async(o: any) => {
            console.log(o.id, '[id]')
            // try {
            //     const tags = await request({
            //         method: 'GET',
            //         url: `/projects/:1838/repository/tags`
            //         // url: `/projects/:${o.id}/repository/tags`
            //     })
            //     console.log('[tags]', tags)
            // } catch (e) {
            //     console.log(e, 'e')
            // }
        })
    }
}
/**
 * 获取某项目branch列表
 */
// curl --header "PRIVATE-TOKEN: V2Npu26Zgx1cuMWUPFVY" http://10.211.62.41:8081/api/v4/projects/1764/repository/branches
