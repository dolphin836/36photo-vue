import { reactive } from 'vue'

const store = {
    state: reactive({
        BREADCRUMB: [], // 面包屑导航
        MUSIC_LIST: []  // 播放列表 
    }),

    UPDATE_BREADCRUMB(data) {
        this.state.BREADCRUMB = data
    },
    // 更新播放列表
    UPDATE_MUSIC_LIST(data) {
        this.state.MUSIC_LIST = data
    }
}

export default store