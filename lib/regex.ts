import YAML from 'yamljs'
const config = YAML.load('./config.yaml')
const regex = config.regex

/**
 * 分支检测
 * @param name 分支名
 */
export const regexBranch = function (name: string) {
    /**
     * master
     */
    const masterRegex = () => {
        return new RegExp(regex.master).test(name)
    }
    /**
     * release
     * 预发布时间：格式为 2019-05-20，例如：分支名 release_2019-05-20
     */
    const releaseRegex = () => {
        return new RegExp(regex.release).test(name)
    }
    /**
     * feature
     * 功能点名称：格式为小写连字符 -，例如：用户详情 feature_user-details
     */
    const featureRegex = () => {
        return new RegExp(regex.feature).test(name)
    }
    /**
     * hotfix
     * bug号：为修复对应的 Jira   Bug编号。
     */
    const hotFixRegex = () => {
        return new RegExp(regex.hotfix).test(name)
    }
    /**
     * dev
     * 图像项目特殊分支 dev_integrate
     */
    const devRegex = () => {
        return new RegExp(regex.dev).test(name)
    }

    return masterRegex() || releaseRegex() || featureRegex() || hotFixRegex() || devRegex()
}
/**
 * tag检测
 * vx.x.x
 * @param name tag名
 */
export const regexTag = function (name: string) {
    return new RegExp(regex.tag).test(name)
}
