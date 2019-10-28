module.exports = {
    presets: [
        '@vue/app',
        ['@babel/env', { 'targets': { 'node': 6 }}]
    ],
    'plugins': [
        [
            'component',
            {
                'libraryName': 'element-ui',
                'styleLibraryName': 'theme-chalk'
            }
        ],
        // 'lodash'
    ]
};
