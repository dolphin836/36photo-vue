import { reactive } from 'vue'

const store = {
    state: reactive({
        BREADCRUMB: [] // 面包屑导航
    }),

    UPDATE_BREADCRUMB(data) {
        this.state.BREADCRUMB = data
    }
}

export default store