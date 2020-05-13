<template>
    <div class="hello">
        <p class="text">
            Hello World
        </p>
        <p>
            图标：
            <icon-font name="demo"></icon-font>
        </p>
        <el-button type="primary"
                   size="mini">
            mini
        </el-button>
        <el-button type="primary">
            small
        </el-button>

        <el-button type="primary"
                   size="medium">
            medium
        </el-button>
        <el-button type="primary"
                   plain>
            plain
        </el-button>
        <el-button type="primary"
                   :loading="true">
        </el-button>
        <el-button type="primary"
                   :loading="true"
                   plain>
        </el-button>
        <br>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld'
};
</script>

<style rel="stylesheet/less"
       lang="less"
       scoped>
.hello {
    margin-top: 20%;
    text-align: center;

    p {
        margin-bottom: 20px;
    }

    .text {
        font-size: 32px;
        color: @color-normal;
    }

    .segma-button {
        display: inline-block;
        margin-left: 20px;
    }
}
</style>
