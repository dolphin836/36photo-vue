<template>
    <div class="columns is-multiline">
        <template v-for="(item, i) in channelMap" :key="i">
            <div class="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
                <div class="channel is-clickable">
                    <router-link :to="{ name: 'VideoView', params: { code: item.code } }">
                        <figure class="image cover">
                            <img :src="item.photo" alt="">
                            <div class="play">
                                <span class="icon is-medium has-text-white"><i class="fa fa-2x fa-play"></i></span>
                            </div>
                        </figure>
                    </router-link>
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
import { Howl } from 'howler'
import { ref, onMounted } from 'vue'

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
                                      photo: channel.photo
                                }
                            })

                            console.log(channel)

                            channelMap.value = channel
                        })
                    }
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error))
                })
        }

        const play = () => {
            // const sound = new Howl({
            //     src: [mp3]
            // })

            // sound.play()
        }

        onMounted(() => {
            fetchData()
            console.log(channelMap.value)
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
