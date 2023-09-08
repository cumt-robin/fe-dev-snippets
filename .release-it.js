const options = {
    git: {
        addUntrackedFiles: true,
        commitMessage: 'chore: release v${version}',
        tagMatch: "[0-9]*"
    },
    // 默认需要 GITHUB_TOKEN 环境变量，可以通过 tokenRef 定制
    github: {
        release: true,
    },
    plugins: {
        '@release-it/conventional-changelog': {
            preset: 'angular',
            infile: 'CHANGELOG.md',
        },
    },
    npm: {
        // 不做 npm publish 操作
        publish: false,
    },
    hooks: {
        'after:release': 'echo Successfully released ${name} v${version} to ${repo.repository}.',
    },
}

module.exports = options
