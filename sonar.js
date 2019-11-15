/**
 * Created by Lucas on 2019/11/15.
 * 使用sonar检测代码质量：https://www.npmjs.com/package/sonarqube-scanner
 * 参考文档：https://docs.qq.com/doc/DUmVNQ3JDSEZNRWlU
 */
const sonarqubeScanner = require('sonarqube-scanner');
const fs = require('fs');
const util = require('util');
const readFileAsync = util.promisify(fs.readFile);

const scanner = async () => {
    let data = await readFileAsync(`${process.cwd()}/package.json`);
    let name = JSON.parse(data.toString()).name;

    /**
     * sonarqubeScanner
     * @param {string} serverUrl - 服务器地址
     * @param {string} token -     令牌
     * @param {Object} options -   配置参数，参考文档：https://docs.sonarqube.org/latest/analysis/analysis-parameters
     *      @param {string} sonar.projectKey  - 项目标识，在创建项目后不可变更，默认值为 'bigdata_fontend_' + package.json中的name字段
     *      @param {string} sonar.projectName - 项目显示名，默认值同sonar.projectKey
     *      @param {string} sonar.sources     - 包含主源文件的目录，逗号分隔路径
     * */
    sonarqubeScanner({
        serverUrl: 'http://10.88.0.39:9090/sonar',
        token: 'd470f436fc46181d16a8f5f414f0da57f03e9527',
        options: {
            'sonar.projectKey': `bigdata_fontend_${name}`,
            'sonar.projectName': `bigdata_fontend_${name}`,
            'sonar.sources': './src'
        }
    });
};
scanner().catch(console.error);

