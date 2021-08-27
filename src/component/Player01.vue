<template>
    <div v-if="data.length" class="player has-background-success has-text-white">
        <div class="body is-flex p-3 is-align-items-center">
            <div class="name pr-2">
                <h5 class="is-size-5">{{ name }}</h5>
                <p class="is-size-7">
                    <span class="mr-2" v-for="(item, i) in singer" :key="i">
                        {{ item }}
                    </span>
                </p>
            </div>
            <div class="action is-flex is-justify-content-space-between is-align-items-center">
                <span class="icon is-clickable"><i class="far fa-arrow-alt-circle-left"></i></span>
                <span v-if="!isPlaying" @click="play" class="icon is-clickable is-medium"><i class="far fa-play-circle fa-2x"></i></span>
                <span v-if="isPlaying" @click="pause" class="icon is-clickable is-medium"><i class="far fa-pause-circle fa-2x"></i></span>
                <span class="icon is-clickable" @click="next"><i class="far fa-arrow-alt-circle-right"></i></span>
            </div>
        </div>
        <progress class="progress is-danger" :value="progress" :max="duration"></progress>
    </div>
</template>

<script>
import store from '../store'
import { ref, computed, watch } from 'vue'
import { Howl } from 'howler'

export default {
    name: 'PlayerComponent',
    setup () {
        const data = computed(() => store.state.MUSIC_LIST) // 播放列表
        const index = ref(0)
        const isPlaying = ref(false)
        const name = ref('') // 歌名
        const singer = ref(['张韶涵', '李健']) // 演唱者
        const duration = ref(0) // 时长
        const progress = ref(0) // 进度

        let sound

        watch(data, function () {
            start()
        })
        // 播放
        const start = () => {
            // 更新播放状态
            isPlaying.value = false
            // 更新歌名
            name.value = data.value[index.value].name
            // 加载音乐
            sound = new Howl({
                src: [data.value[index.value].mp3],
                onload: function () {// 加载完成
                   isPlaying.value = true
                },
                onplay: function () {
                    duration.value = parseInt(sound.duration())
                    console.log(duration.value)
                    // 计时器
                    setInterval(() => {
                        progress.value++
                        console.log(progress.value)
                    }, 1000)
                },
                onend: function () {// 播放结束
                    index.value++
                    start()
                }
            })

            sound.play()
        }
        // 下一首
        const next = () => {
            index.value++
            start()
        }
        // 暂停
        const pause = () => {
            isPlaying.value = false
            sound.pause()
        }
        // 播放
        const play = () => {
            isPlaying.value = true
            sound.play()
        }

        return {
            data,
            isPlaying,
            name,
            singer,
            duration,
            progress,
            next,
            pause,
            play
        }
    }
}
</script>
<style lang="sass" scoped>
.player
    position: fixed
    right: 1rem
    bottom: 20rem
    width: 300px
    border-radius: .2rem

    .progress
        height: .2rem

    .body
        .name
            width: 180px

            h5
                overflow: hidden
                white-space: nowrap
                text-overflow: ellipsis
                height: 30px

        .action
            width: 100px
</style>
