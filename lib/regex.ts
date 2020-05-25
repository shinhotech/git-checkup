/**
 * 分支检测
 * @param name 分支名
 */
export const regexBranch = function (name: string) {
    /**
     * master
     */
    const masterRegex = () => {
        const regex = /^master$/
        // console.log('masterRegex: ' + regex.test(name))
        return regex.test(name)
    }
    /**
     * release
     * 预发布时间：格式为 2019-05-20，例如：分支名 release_2019-05-20
     */
    const releaseRegex = () => {
        const regex = /^release_\d{4}-\d{2}-\d{2}$/
        // console.log('releaseRegex: ' + regex.test(name))
        return regex.test(name)
    }
    /**
     * feature
     * 功能点名称：格式为小写连字符 -，例如：用户详情 feature_user-details
     */
    const featureRegex = () => {
        const regex = /^feature_([a-z]{1,}-){0,}[a-z]{1,}$/
        // console.log('featureRegex: ' + regex.test(name))
        return regex.test(name)
    }
    /**
     * hotfix
     * bug号：为修复对应的 Jira   Bug编号。
     */
    const hotFixRegex = () => {
        const regex = /^hotfix_\w{1,}-\w{1,}$/
        // console.log('hotFixRegex: ' + regex.test(name))
        return regex.test(name)
    }

    return masterRegex() || releaseRegex() || featureRegex() || hotFixRegex()
}
/**
 * tag检测
 * vx.x.x
 * @param name tag名
 */
export const regexTag = function (name: string) {
    const regex = /^v(\d{1,}\.){1,}\d$/
    // console.log('regexTag: ' + regex.test(name))
    return regex.test(name)
}
