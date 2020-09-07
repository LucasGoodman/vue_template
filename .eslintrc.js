module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: ['eslint-config-alloy/vue'],
    globals: {
        echarts: false,
        _: false
    },
    rules: {
        'vue/html-closing-bracket-newline': 'off',
        'function-call-argument-newline': 'off',
        /**
         * vue模板顺序
         * */
        'vue/component-tags-order': [
            'error',
            {
                order: ['template', 'script', 'style']
            }
        ],
        /**
         * 结尾必须有分号
         * */
        'semi': [
            'error',
            'always',
            {
                omitLastInOneLineBlock: true
            }
        ],
        /**
         * 强制使用 Unix 换行符
         * */
        'linebreak-style': ['error', 'unix'],
        /**
         * vue模板属性换行配置
         * 文档：https://eslint.vuejs.org/rules/max-attributes-per-line.html
         * */
        'vue/max-attributes-per-line': [
            'error', {
                'singleline': 1,
                'multiline': {
                    'max': 1,
                    'allowFirstLine': true
                }
            }
        ]
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [
        {
            files: ['*.json'],
            rules: {
                quotes: [2, 'double']
            }
        }
    ]
};
