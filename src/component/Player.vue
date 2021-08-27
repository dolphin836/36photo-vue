<template>
    <div class="player" :class="[ isLock ? 'play-lock' : 'play-unlock' ]">
        <div class="body">
            <div class="lock">
                <div class="action">
                    <span @click="onLock" class="is-clickable"></span>
                </div>
                <div class="space"></div>
            </div>
            <div class="bar">
                <div class="pan is-flex">
                    <div class="button-group">
                        <span @click="onPrev" class="is-clickable prev"></span>
                        <span @click="onPlay" class="is-clickable play" :class="[ isPlaying ? 'pause' : '' ]"></span>
                        <span @click="onNext" class="is-clickable next"></span>
                    </div>
                    <div class="name-speed">
                        <p class="is-size-7 has-text-white name">
                            {{ name }}
                            <span class="ml-2" v-for="(item, i) in singer" :key="i">
                                {{ item }}
                            </span>
                        </p>
                        <div class="speed">
                            <div class="proceed" :style="{ width: progress + 'px' }">
                                <div class="change is-clickable"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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
        const singer = ref([]) // 演唱者
        const duration = ref(0) // 时长
        const second   = ref(0) // 秒
        const progress = ref(0) // 进度
        const isLock = ref(true)

        watch(data, (next, list) => {
            // 如果当前正在播放，则停止
            if (list.length && list[index.value].sound) {
                list[index.value].sound.stop()
            }

            start()
        })
        // 播放
        const start = () => {
            // 更新播放状态
            isPlaying.value = false
            // 更新歌名
            name.value = data.value[index.value].name
            //
            duration.value = 0
            second.value = 0
            progress.value = 0
            // 加载音乐
            let sound

            if (data.value[index.value].sound) {
                sound = data.value[index.value].sound
            } else {
                sound = data.value[index.value].sound = new Howl({
                    src: [data.value[index.value].mp3],
                    html5: true,
                    onload: function () {// 加载完成
                        isPlaying.value = true
                    },
                    onplay: function () {
                        duration.value = parseInt(sound.duration())
                        // 计时器
                        setInterval(() => {
                            second.value++
                            progress.value = (second.value * 500) / duration.value
                        }, 1000)
                    },
                    onend: function () {// 播放结束
                        index.value++
                        start()
                    }
                })
            }

            sound.play()
        }
        // 上一首
        const onPrev = () => {
            if (data.value[index.value].sound) {
                data.value[index.value].sound.stop()
            }

            index.value--

            if (index.value < 0) {
                index.value = data.value.length - 1
            }

            start()
        }
        // 下一首
        const onNext = () => {
            if (data.value[index.value].sound) {
                data.value[index.value].sound.stop()
            }

            index.value++

            if (index.value >= data.value.length) {
                index.value = 0
            }

            start()
        }
        // 播放
        const onPlay = () => {
            isPlaying.value = ! isPlaying.value

            if (data.value[index.value].sound) {
                if (isPlaying.value) {
                    data.value[index.value].sound.play()
                } else {
                    data.value[index.value].sound.pause()
                }
            }
        }
        // 锁定播放器
        const onLock = () => {
            isLock.value = ! isLock.value
        }

        return {
            data,
            isPlaying,
            name,
            singer,
            duration,
            progress,
            isLock,
            onPrev,
            onNext,
            onPlay,
            onLock
        }
    }
}
</script>
<style lang="sass" scoped>
.player
    position: fixed
    right: 0
    left: 0
    bottom: 0
    zoom: 1
    z-index: 1001
    width: 100%

    .body
        position: absolute
        height: 53px
        zoom: 1
        left: 0
        width: 100%

        .bar
            height: 53px
            zoom: 1
            margin-right: 67px
            background: url(../asset/playbar.png) no-repeat 0 9999px
            background-position: 0 0
            background-repeat: repeat-x

            .pan
                position: absolute
                left: 50%
                top: 6px
                z-index: 15
                width: 980px
                height: 47px
                margin: 0 auto
                margin-left: -490px

                .button-group
                    width: 116px
                    padding: 6px 0 0 0

                    span
                        display: block
                        float: left
                        width: 28px
                        height: 28px
                        margin-right: 8px
                        margin-top: 5px
                        text-indent: -9999px
                        background: url(../asset/playbar.png) no-repeat 0 9999px

                    .prev
                        background-position: 0 -130px
                    
                    .prev:hover
                        background-position: -30px -130px

                    .play
                        width: 36px
                        height: 36px
                        margin-top: 0
                        background-position: 0 -204px

                    .pause
                        background-position: 0 -165px

                    .next
                        background-position: -80px -130px

                    .next:hover
                        background-position: -110px -130px
                
                .name
                    height: 28px
                    line-height: 28px

                .speed
                    position: relative
                    width: 506px
                    height: 9px
                    background: url(../asset/statbar.png) no-repeat 0 9999px
                    background-position: right 0

                    .proceed
                        height: 9px
                        position: absolute
                        top: 0
                        left: 0
                        width: 6px
                        background: url(../asset/statbar.png) no-repeat 0 9999px
                        background-position: left -66px

                        .change
                            position: absolute
                            top: -7px
                            right: -13px
                            width: 22px
                            height: 24px
                            background: url(../asset/iconall.png) no-repeat 0 9999px
                            background-position: 0 -250px

            
        .lock
            position: relative

            .action
                position: absolute
                top: -14px
                right: 15px
                background: url(../asset/playbar.png) no-repeat 0 9999px
                width: 52px
                height: 67px
                background-position: 0 -380px

                span
                    display: block
                    width: 18px
                    height: 18px
                    margin: 6px 0 0 17px
                    background: url(../asset/playbar.png) no-repeat 0 9999px
                    
            .space
                position: absolute
                top: -1px
                right: 0
                width: 15px
                height: 54px
                background: url(../asset/playbar.png) no-repeat 0 9999px
                background-position: -52px -393px
                pointer-events: none

.play-lock
    .body
        top: -53px

        .lock
            .action
                span
                    background-position: -100px -380px

.play-unlock
    .body
        top: -7px
        transition: .5s
        
        .lock
            .action
                span
                    background-position: -80px -380px

.play-unlock:hover
    .body
        top: -53px
        transition: .5s
</style>
