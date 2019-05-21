<template>
    <div class="all-login">
        <img class="login-bg" src="../assets/login-bg.png"/>
        <div class="login-info" v-if="!isLoginError">
            <div class="login-name">
                <img src="../assets/people.png"/>
                <input type="text" placeholder="门店编号" v-model="code"/>
            </div>
            <div class="login-name">
                <img src="../assets/phone.png"/>
                <input type="text" placeholder="手机号" v-model="phone"/>
            </div>
        </div>

        <div class="login-error" v-if="isLoginError">
            <div class="error-title">
                <img src="../assets/login-error.png"/> 无法登陆
            </div>
            <div class="error-info">1.您未入围</div>
            <div class="error-info">2.门店编号或手机号输入有误</div>
        </div>

        <img class="login-submit" :src=src @click="doLogin"/>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                isLoginError: false,
                longitude: 0,
                latitude: 0,
                code: '',
                phone: '',
                user: {},
                src: require('../assets/login-submit.png')
            }
        },
        methods: {
            getLocation() {
                let _thit = this
                var map = new BMap.Map("allmap");
                var point = new BMap.Point(116.331398,39.897445);
                map.centerAndZoom(point,12);

                var geolocation = new BMap.Geolocation();
                geolocation.getCurrentPosition(function(r){
                    if(this.getStatus() == BMAP_STATUS_SUCCESS){
                        var mk = new BMap.Marker(r.point);
                        map.addOverlay(mk);
                        map.panTo(r.point);
                        _thit.longitude = r.point.lng
                        _thit.latitude = r.point.lat
                        // debugger
                        // this.address = result.formattedAddress
                        // alert('您的位置：' + JSON.stringify(r.address) + r.point.lng+','+r.point.lat);
                    } else {
                        // alert('failed'+this.getStatus());
                    }
                },{enableHighAccuracy: true})
            },
            loginBack() {
                this.src = require('../assets/login-submit.png')
                this.isLoginError = false
            },
            loginError() {
                this.src = require('../assets/login-back.png')
                this.isLoginError = true
            },
            doLogin() {
                this.$bmob.initialize('5341f8e254942033b3dae717daa7eed5', '4e0664824ca488cccad8fe1508a2baa0');
                if (!this.isLoginError) {
                    this.$bmob.User.login(this.code,this.phone).then(res => {
                        this.user = res
                        this.loginSuccess()
                        console.log(res)
                    }).catch(err => {
                        this.loginError()
                        console.log(err)
                    });

                } else {
                    this.loginBack()
                }

            },
            loginSuccess() {
                this.$router.push({name: 'rule', params:{code: this.user, longitude: this.longitude, latitude: this.latitude}});
            }
        },
        created() {
            this.getLocation()
        }
    }
</script>

<style lang="stylus" scoped>
    .all-login
        width 100%
        height 100%
        padding 0 48px
        background: linear-gradient(to bottom, #ffffff, #e6ddf1, #e6ddf1,#e6ddf1, #3b6e9e);
        .login-submit
            width 135px
            height 135px
            margin-top -65px
            text-align center
        .login-bg
            width 650px
            margin-top 75px
        .login-info
            background #f5f3fb
            border-radius 30px
            padding 30px 30px
            width 100%
            height 460px
            display flex
            flex-direction column
            .login-name
                width 100%
                height 100px
                background #fff
                border-radius 30px
                text-align left
                display flex
                margin-top 50px
                img
                    text-align left
                    margin-left 30px
                    width 65px
                    height 75px
                    margin-top 12px
                input
                    margin-left 100px
                    width 350px
                    outline none
                    font-size 50px
                    color #3b6e9e
                    background white
                    border none
        .login-error
            background #f5f3fb
            border-radius 30px
            padding 30px 30px
            margin-top 60px
            width 100%
            height 360px
            text-align left
            .error-title
                font-size 70px
                display flex
                margin-left 80px
                margin-top 30px
                img
                    width 100px
                    height 100px
                    margin-right 20px
            .error-info
                margin-left 80px
                font-size 40px
</style>