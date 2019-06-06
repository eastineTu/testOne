<template>
    <div class="all-question">
        <div class="mogol"/>
        <div class="all-question-info">
            <div class="question-info">
                <img src="../assets/login-bg.png"/>
                <div class="title" v-if="isFirst"> 1-7题<br>一共 <a>{{valueNum}}</a>分</div>
                <div class="progress-value" v-if="!isFirst">请于7月30日后通过以下渠道查询晋级名单：贝德玛官方网站，
                    官方微信公众号（法国贝德玛）,贝德玛学院。晋级者可与贝德玛销售人员联系确认。
                    排名规则：单选和多选题、图片题以及店铺设施配合度得分相加后进行排名。
                </div>
                <div class="submit-button" @click="doNext" v-if="isFirst"> 下一步</div>
                <div class="submit-button" @click="doFinish" v-if="!isFirst"> 关闭</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Rule",
        data() {
            return {
                valueNum: '',
                isFirst: true
            }
        },
        methods: {
            doFinish() {
                WeixinJSBridge.call('closeWindow');
            },
            doNext() {
                this.isFirst = false
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
        background-image url(../assets/common_bg.jpg)
        background-repeat no-repeat
        background-size 100% 100%
        position relative
        .mogol
            width 100%
            height 100%
            background rgba(0, 0, 0, 0.2)
            z-index 10
            position absolute
            top 0
            left 0
        .all-question-info
            width 100%
            height 100%
            padding 0 48px
            position absolute
            top 0
            left 0
            display flex
            z-index 999
            .question-info
                background white
                margin: auto
                border 1PX solid #4875a2
                min-height 500px
                width 100%
                img
                    width 325px
                    margin-top 20px
                .title
                    margin-top 30px
                    font-size 45px
                    a
                        font-size 55px
                        color red
                .progress-value
                    font-size 30px
                    text-align left
                    color #666
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