<template>
    <div class="uploadImg" id="uploadImg">
        <div class="uploadImg_pop">
            <img alt="" :src="imgSrc">
            <input id="profilePhotoFileUpload" v-if="upType" type="file" @change="getFile" accept="image/*" :capture="upType"/>
            <input v-else type="file" @change="getFile" accept="image/*"/>
        </div>
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
                bmobFile.save().then(res => {
                    this.$emit('imageSrc', res[0])
                    this.$emit('progress', 100)
                })
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
</style>
