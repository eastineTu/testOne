<template>
    <div class="uploadImg" id="uploadImg">
        <div class="uploadImg_pop">
            <img alt="" :src="imgSrc">
            <input id="profilePhotoFileUpload" v-if="upType" type="file" @change="getFile" accept="image/*" :capture="upType"/>
            <input v-else type="file" @change="getFile" accept="image/*"/>
        </div>
        <div id="over" class="overLoading"></div>
        <div id="layout" class="layoutLoading"><img src="../assets/loding.gif" /></div>
    </div>
</template>
<script>
    export default {
        name: 'uploadimg',
        props: {
            upType: {
                type: String,
                default: ''
            },
            imgSrc: {}
        },
        data() {
            return {
            }
        },
        methods: {
            // 选择图片并上传
            getFile(e) {
                let file = e.target.files[0]
                if (!file) return
                this.imgSrc = window.URL.createObjectURL(file)

                this.$bmob.initialize('6cc51f95f96811441ba8e4754ac01f26', 'f3037695274e2983ee6b99b7e3e952b0')
                let bmobFile = this.$bmob.File(file.name, file);
                this.$emit('progress', 50)
                this.showLoading(true)
                bmobFile.save().then(res => {
                    this.showLoading(false)
                    this.$emit('imageSrc', res[0])
                    this.$emit('progress', 100)
                })
            },
            showLoading(show){
                if(show){
                    document.getElementById("over").style.display = "block";
                    document.getElementById("layout").style.display = "block";
                }else{
                    document.getElementById("over").style.display = "none";
                    document.getElementById("layout").style.display = "none";
                }

            }
        },
        created () {
        }
    }
</script>
<style lang="stylus" scoped>
    .uploadImg
        width 100%
        overflow-x hidden
        display flex
        text-align center
        .uploadImg_list_item
            margin auto
            position relative
            transition all 0.3s linear
            .uploadImg_list_item_img
                width 100%
                height 100%
        .uploadImg_pop
            margin auto
            width 180px
            height 180px
            line-height 180px
            text-align center
            overflow hidden
            position relative
            img
                width 180px
                height 180px
            input[type='file']
                position absolute
                left 0
                top 0
                width 100%
                height 100%
                opacity: 0;
        .overLoading
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #f5f5f5;
            opacity:0.5;
            z-index: 1000;
        .layoutLoading
            display: none;
            position: absolute;
            top: 40%;
            left: 40%;
            width: 20%;
            height: 20%;
            z-index: 1001;
            text-align:center;
</style>
