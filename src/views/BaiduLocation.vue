<template>
    <div id="markermap"></div>
</template>

<script>
    export default {
        name: "baiduLocation",
        data() {
            return {
                lat : '',
                lng: ''
            }
        },
        created() {
            this.lat = this.$route.params.lat
            this.lng = this.$route.params.lon
            var map = new BMap.Map("markermap");
            var point = new BMap.Point(this.lng, this.lat);
            map.centerAndZoom(point, 15);
            var marker = new BMap.Marker(point);  // 创建标注
            map.addOverlay(marker);               // 将标注添加到地图中
        }
    }
</script>

<style scoped>

</style>