<template>
    <div class="columns is-multiline">
        <template v-for="(item, i) in channelMap" :key="i">
            <div class="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
                <div class="channel is-clickable">
                    <figure class="image cover" @click="play(item.code)">
                        <img :src="item.photo" alt="">
                        <div class="play">
                            <span class="icon is-medium has-text-white"><i class="fa fa-2x fa-play"></i></span>
                        </div>
                    </figure>
                    <p class="title is-5 mt-2">{{ item.name }}</p>
                    <p class="subtitle is-7 has-text-grey has-text-weight-light">
                        {{ item.content  }}
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import store from '../store'

export default {
    name: 'Fm',
    setup () {
        const channelMap = ref([]) // 数据
        // 请求数据
        const fetchData = () => {
            fetch('https://36video.oss-cn-hangzhou.aliyuncs.com/Fm.json')
                .then(function (response) {
                    if (response.ok) {
                        const json = response.json();
                        
                        json.then(function(data) {
                            // 解析数据
                            const channel = data.map((channel) => {
                                return  {
                                       code: channel.code,
                                       name: channel.name,
                                    content: channel.content,
                                      photo: channel.photo,
                                       data: channel.data
                                }
                            })

                            channelMap.value = channel
                        })
                    }
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error))
                })
        }
        // 播放
        const play = (code) => {
            channelMap.value.forEach(channel => {
                if (channel.code === code) {
                    store.UPDATE_MUSIC_LIST(channel.data)
                }
            })
        }

        onMounted(() => {
            fetchData()
        })

        return {
            channelMap,
            play
        }
    }
}
</script>
<style lang="sass" scoped>
.channel
    max-width: 320px
    margin: 0 auto

    .cover
        .play
            position: absolute
            top: 50%
            left: 50%
            margin-top: -.5rem
            margin-left: -.5rem
            opacity: 0
            
        img
            border-radius: .4rem

    :hover
        .play
            opacity: 0.8
</style>
