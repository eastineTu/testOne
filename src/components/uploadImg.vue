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

            },
            photoCompress(file,w,objDiv){
                if(file.tagName.toLocaleLowerCase()=="img"){
                    this.canvasDataURL(file.src,w,objDiv);
                    return false;
                }
                var ready=new FileReader();
                /*开始读取指定的Blob对象或File对象中的内容. 当读取操作完成时,readyState属性的值会成为DONE,如果设置了onloadend事件处理程序,则调用之.同时,result属性中将包含一个data: URL格式的字符串以表示所读取文件的内容.*/
                ready.readAsDataURL(file);
                ready.onload=function(){
                    var re=this.result;
                    this.canvasDataURL(re,w,objDiv)
                }
            },
            canvasDataURL(re,w,objDiv){
                var newImg=new Image();
                newImg.src=re;
                var imgWidth,imgHeight,offsetX=0,offsetY=0;
                newImg.onload=function(){
                    var img=document.createElement("img");
                    img.src=newImg.src;
                    imgWidth=img.width;
                    imgHeight=img.height;
                    var canvas=document.createElement("canvas");
                    canvas.width=w;
                    canvas.height=w;
                    var ctx=canvas.getContext("2d");
                    ctx.clearRect(0,0,w,w);
                    if(imgWidth>imgHeight){
                        imgWidth=w*imgWidth/imgHeight;
                        imgHeight=w;
                        offsetX=-Math.round((imgWidth-w)/2);
                    }else{
                        imgHeight=w*imgHeight/imgWidth;
                        imgWidth=w;
                        offsetY=-Math.round((imgHeight-w)/2);
                    }
                    ctx.drawImage(img,offsetX,offsetY,imgWidth,imgHeight);
                    var base64=canvas.toDataURL("image/jpeg",0.7);
                    if(typeof objDiv == "object"){
                        objDiv.appendChild(canvas);
                    }else if(typeof objDiv=="function"){
                        objDiv(base64);
                    }
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
