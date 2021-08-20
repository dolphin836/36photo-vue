<template>
    <h1 class="title is-4 has-text-dark has-text-centered">{{ name }}</h1>
    <p class="subtitle is-6 has-text-grey has-text-weight-light has-text-centered">{{ date }}</p>
    <video ref="videoRef" class="video-js vjs-big-play-centered"></video>
</template>

<script>
import videojs from 'video.js'
import 'video.js/dist/video-js.min.css'
import { ref, onMounted, onBeforeUnmount } from 'vue'

export default {
    name: 'VideoView',
    props: {
        code: String
    },
    setup (props) {
        const videoRef = ref()
        const player = ref()
        const name = ref('')
        const date = ref('')
        // 请求数据
        const fetchData = () => {
            fetch('https://36video.oss-cn-hangzhou.aliyuncs.com/video.json')
                .then(function (response) {
                    if (response.ok) {
                        let json = response.json();
                        
                        json.then(function(data) {
                            data.map((item) => {
                                if (item.code === props.code) {
                                    name.value = item.name
                                    date.value = item.update_date
                                    // 初始化播放器
                                    player.value = videojs(videoRef.value, {
                                        controls: true,
                                        sources: [
                                            {
                                                src: item.video
                                            }
                                        ]
                                    })
                                }
                            })
                        })
                    }
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error))
                })
        }

        onMounted(() => {
            fetchData()
        })
        // 销毁
        onBeforeUnmount(() => {
            if (player.value) {
                player.value.dispose()
            }
        })

        return {
            videoRef,
            name,
            date
        }
    }
}
</script>
<style lang="sass" scoped>
.video-js
    width: 100%
</style>