<template>
    <div class="hello">
        Hello World
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: {
            type: String,
            default: ''
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello {
    margin-top: 20%;
    font-size: 32px;
    text-align: center;
}
</style>
