<template>
    <div class="tags is-justify-content-center">
        <template v-for="(item, i) in categoryMap" :key="i">
            <span @click="changeCategory(item.name)" class="tag is-rounded" :class="[ item.isActive ? 'is-primary' : '' ]">{{ item.name  }} {{ item.count }}</span>
        </template>
    </div>
    <div class="columns is-multiline">
        <template v-for="(item, i) in listMap" :key="i">
            <div class="column is-12-mobile is-6-tablet is-4-desktop is-3-widescreen">
                <div class="video is-clickable">
                    <router-link :to="{ name: 'VideoView', params: { code: item.code } }">
                        <figure class="image cover">
                            <img :src="item.cover" alt="">
                            <div class="play">
                                <span class="icon is-medium has-text-white"><i class="fa fa-2x fa-play"></i></span>
                            </div>
                        </figure>
                    </router-link>
                    <p class="subtitle is-6 has-text-dark mt-2 mb-2">{{ item.name }}</p>
                    <p class="subtitle is-7 has-text-grey has-text-weight-light">
                        {{ item.update_date  }}
                        <span className="is-pulled-right">{{ item.list ? '合集 - ' + item.list.length : '' }}</span>
                    </p>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue'

export default {
    name: 'VideoList',
    setup () {
        const dataMap = ref([]) // 所有记录
        const listMap = ref([]) // 当前展示记录
        const categoryMap = ref([]) // 分类数据
        // 请求数据
        const fetchData = () => {
            fetch('https://36video.oss-cn-hangzhou.aliyuncs.com/video.json')
                .then(function (response) {
                    if (response.ok) {
                        const json = response.json();
                        
                        json.then(function(source) {
                            const categoryName = ["全部"]
                            const categoryData = [
                                {
                                    name: "全部",
                                    count: 0,
                                    isActive: true
                                }
                            ]
                            // 解析数据得到分类数据
                            source.map((channel) => {
                                const index = categoryName.indexOf(channel.category)
                    
                                if (index === -1) { // 不存在
                                    categoryName.push(channel.category)

                                    categoryData.push({
                                        name: channel.category,
                                        count: 1,
                                        isActive: false
                                    })
                    
                                    categoryData[0].count++ // 全部分类数量加一
                                } else { // 已存在
                                    categoryData[index].count++ // 当前分类数量加一
                                    categoryData[0].count++ // 全部分类数量加一
                                }
                            })
                            // 排序：按添加日期降序
                            source.sort(function (a, b) {
                                const dateA      = new Date(a.update_date)
                                const timestampA = dateA.getTime()

                                const dateB      = new Date(b.update_date)
                                const timestampB = dateB.getTime()

                                return timestampB - timestampA
                            })
                            // 更新数据
                            dataMap.value = source
                            listMap.value = source
                            categoryMap.value = categoryData
                        })
                    }
                })
                .catch(function (error) {
                    console.log(JSON.stringify(error))
                })
        }
        // 切换分类
        const changeCategory = (categoryName) => {
            // 更新展示的数据
            const list = []

            dataMap.value.map((channel) => {
                if (categoryName === '全部' || channel.category === categoryName) {
                    list.push(channel)
                }
            })

            listMap.value = list
            // 更新分类的激活状态
            categoryMap.value = categoryMap.value.map(
                item => (item.name === categoryName ? Object.assign(item, { isActive: true }) : Object.assign(item, { isActive: false }))
            )
        }

        onMounted(() => {
            fetchData()
        })

        return {
            dataMap,
            listMap,
            categoryMap,
            changeCategory
        }
    }
}
</script>
<style lang="sass" scoped>
.video
    max-width: 360px
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
