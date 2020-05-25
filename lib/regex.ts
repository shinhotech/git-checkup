export const regexBranch = function (name: string) {
    const masterRegex = () => {
        const regex = /^master$/
        console.log('masterRegex: ' + regex.test(name))
        return regex.test(name)
    }
    const releaseRegex = () => {
        const regex = /^release_\d{4}-\d{2}-\d{2}$/
        console.log('releaseRegex: ' + regex.test(name))
        return regex.test(name)
    }

    const featureRegex = () => {
        const regex = /^feature_([a-z]{1,}-){0,}[a-z]{1,}$/
        console.log('featureRegex: ' + regex.test(name))
        return regex.test(name)
    }

    const hotFixRegex = () => {
        const regex = /^hotfix_\w{1,}-\w{1,}$/
        console.log('hotFixRegex: ' + regex.test(name))
        return regex.test(name)
    }

    return masterRegex() || releaseRegex() || featureRegex() || hotFixRegex()
}

export const regexTag = function (name: string) {
    const regex = /^v(\d{1}\.){1,}\d$/
    console.log('regexTag: ' + regex.test(name))
    return regex.test(name)
}
