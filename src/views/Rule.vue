<template>
    <div class="all-question">
        <div class="mogol"/>
        <div class="all-question-info" >
            <div class="question-info">
                <img class="rule_title" src="../assets/rule_title.png"/>
                <div class="title"> 答题规则 </div>
                <img class="rule_title_img" src="../assets/login-bg.png"/>
                <div class="progress-value">答题规则：题目由单选题，多选题以及图片题组成，共10道题，满分100分，
                    多选题每选对一项有得分，选错整题不得分。单选和多选答对一项有得分，选错整题不得分。单选
                    和多选题当场计分，图片题由评委审核后计分，7月赛后根据总分排名，前500名晋级下一场比赛</div>
                <div class="submit-button" @click="goQuestion"> 开始答题 </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Rule",
        data() {
            return {
                longitude: 0,
                latitude: 0,
                user: {}
            }
        },
        methods: {
            goQuestion() {
                // this.$router.push({name: 'question'});
                this.$router.replace({name: 'question'});
            }
        },
        created() {
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
                border 3PX solid #4875a2
                min-height 600px
                width 100%
                .rule_title
                    width 325px
                    margin-top -140px
                .title
                    color #fff
                    font-size 30px
                    margin-top -75px
                .rule_title_img
                    width 244px
                    height 144px
                    margin-top 30px
                .progress-value
                    font-size 30px
                    text-align left
                    padding 30px 20px
                .submit-button
                    width 175px
                    height 65px
                    text-align center
                    line-height 65px
                    color white
                    margin 0 auto
                    margin-bottom 30px
                    background-image url(../assets/button.png)
                    background-repeat no-repeat
                    background-size 100% 100%

</style>