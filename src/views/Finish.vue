<template>
    <div class="all-question">
        <div class="question-info">
            <img src="../assets/login-bg.png"/>
            <div class="title"> 1-7题一共{{valueNum}}分 </div>
            <div class="progress-value">请于7月30日后通过以下渠道查询晋级名单：贝德玛官方网站，
                官方微信公众号（法国贝德玛）,贝德玛学院。晋级者可与贝德玛销售人员联系确认。
                排名规则：单选和多选题、图片题以及店铺设施配合度得分相加后进行排名。</div>
            <div class="submit-button" @click="doFinish"> 关闭 </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rule",
        data() {
            return {
                valueNum: ''
            }
        },
        methods: {
            doFinish () {
                WeixinJSBridge.call('closeWindow');
            }
        },
        created() {
            this.valueNum = this.$route.params.countNum
        }
    }
</script>

<style lang="stylus" scoped>
    .all-question
        width 100%
        height 100%
        padding 0 48px
        background-image url(../assets/common_bg.jpg)
        background-repeat no-repeat
        background-size 100% 100%
        display flex
        flex-direction column
        //#6da0d3 #ffffff

        .question-info
            background white
            margin: auto
            border 1PX solid #4875a2
            min-height 600px
            width 100%
            img
                width 325px
                margin-top 20px
            .title
                margin-top 30px
                font-size 45px
            .progress-value
                font-size 35px
                text-align left
                padding 50px 20px
            .submit-button
                width 175px
                height 65px
                text-align center
                line-height 65px
                color white
                margin 0 auto
                margin-bottom 50px
                background-image url(../assets/button.png)
                background-repeat no-repeat
                background-size 100% 100%

</style>