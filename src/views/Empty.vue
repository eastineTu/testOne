<template>
    <div class="all-empty" @click="goRule">

    </div>
</template>

<script>
    export default {
        name: "Empty",
        methods: {
            goRule() {
                this.$router.replace({name: 'rule'});
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .all-empty
        width 100%
        height 100%
        padding 0 48px
        background-image url(../assets/common_bg.jpg)
        background-repeat no-repeat
        background-size 100% 100%

</style>