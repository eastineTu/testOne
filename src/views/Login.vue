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
            showToast(msg, duration) {
                duration = isNaN(duration) ? 3000 : duration;
                var m = document.createElement('div');
                m.innerHTML = msg;
                m.style.cssText = "width:60%; min-width:180px; background:#000; opacity:0.6; height:auto;min-height: 30px; color:#fff; line-height:30px; text-align:center; border-radius:4px; position:fixed; top:60%; left:20%; z-index:999999;";
                document.body.appendChild(m);
                setTimeout(function () {
                    var d = 0.5;
                    m.style.webkitTransition = '-webkit-transform ' + d + 's ease-in, opacity ' + d + 's ease-in';
                    m.style.opacity = '0';
                    setTimeout(function () {
                        document.body.removeChild(m)
                    }, d * 1000);
                }, duration);
            },
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
                        if(r.accuracy==null){
                            _thit.showToast('您没有开启权限！')
                            WeixinJSBridge.call('closeWindow');
                            //用户决绝地理位置授权
                        }
                        // debugger
                        // this.address = result.formattedAddress
                        // alert('您的位置：' + JSON.stringify(r.address) + r.point.lng+','+r.point.lat);
                    } else {
                        var opened = window.open('about:blank', '_self');
                        opened.opener = null;
                        opened.close();
                        WeixinJSBridge.call('closeWindow');
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
                    this.$bmob.User.login(this.code, this.phone).then(res => {
                        this.checkHasQuestions(res.objectId)
                    }).catch(err => {
                        this.loginError()
                        console.log(err)
                    });
                } else {
                    this.loginBack()
                }

            },
            checkHasQuestions(objectId) {
                const pointer =  this.$bmob.Pointer('_User');
                const poiID = pointer.set(objectId);
                const query = this.$bmob.Query("question");
                query.equalTo("user", "==", poiID);
                query.count().then(res => {
                    if(res === 0) {
                        this.user = res
                        this.loginSuccess()
                    } else {
                        this.showToast('你已经答过题了！')
                    }
                });
            },
            loginSuccess() {
                localStorage.setItem("userId", this.user.objectId)
                localStorage.setItem("longitude", this.longitude)
                localStorage.setItem("latitude", this.latitude)
                console.log('qqq>>>>>'+this.longitude)
                // this.$router.push({name: 'rule'});
                this.$router.replace({name: 'rule'});
            },
            checkWx() {
                var useragent = navigator.userAgent;
                if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
                    // 这里警告框会阻塞当前页面继续加载
                    alert('已禁止本次访问：您必须使用微信内置浏览器访问本页面！');
                    // 以下代码是用javascript强行关闭当前页面
                    var opened = window.open('about:blank', '_self');
                    opened.opener = null;
                    opened.close();
                }
            }
        },
        created() {
            this.checkWx()
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