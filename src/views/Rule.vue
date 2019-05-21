<template>
    <div class="all-question">
        <div class="question-info">
            <img class="rule_title" src="../assets/rule_title.png"/>
            <div class="title"> 答题规则 </div>
            <div class="progress-value">答题规则：题目由单选题，多选题以及图片题组成，共10道题，满分100分，
                多选题每选对一项有得分，选错整题不得分。单选和多选答对一项有得分，选错整题不得分。单选
                和多选题当场计分，图片题由评委审核后计分，7月赛后根据总分排名，前500名晋级下一场比赛</div>
            <div class="submit-button" @click="goQuestion"> 开始答题 </div>
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
                this.$router.push({name: 'question', params:{code: this.user, longitude: this.longitude, latitude: this.latitude}});
            }
        },
        created() {
            this.user = this.$route.params.code
            this.longitude = this.$route.params.longitude
            this.latitude = this.$route.params.latitude
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
            .progress-value
                font-size 35px
                text-align left
                padding 100px 20px
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