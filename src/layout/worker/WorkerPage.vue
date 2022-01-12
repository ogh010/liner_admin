<template>
    <div class="page_nav">
        <div class="prev" v-if="startPage != 1" @click="movePage(startPage - 2)"></div>
        <ul v-for="(i, index) in endPage" :key="index" >
            <li v-if="i >= startPage" @click="movePage(i-1)" :class="{ 'on' : i ===  activePage + 1 }">{{i}}</li>
        </ul>
        <div class="nex" v-if="endPage != totalPage" @click="movePage(endPage)"></div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import workerListService from '../../service/workerListService'

export default {
    name: "workerPage",
    computed: {
        ...mapState('worker',['totalPage', 'activePage', 'reqData']),
        startPage () { // 시작 페이지
            return (parseInt((this.activePage) / 10)) * 10 + 1
        },
        endPage () { // 종료 페이지
            let endPage = parseInt((this.activePage / 10)) * 10 + 10;
            if (endPage > this.totalPage) {
                endPage = this.totalPage;
            }
             return endPage
        }
    },
    mounted() {
        this.SET_CUP_PAGE(0)
    },
    methods: {
        ...mapMutations('worker',['SET_WORKER_LIST', 'SET_TOTAL_PAGE', 'SET_REQ_DATA', 'SET_CUP_PAGE', 'SET_UP_PAGE', 'SET_DOWN_PAGE', 'SET_PAGE']),
        async movePage(page) {
            this.SET_CUP_PAGE(page) // response curpage 저장
            let data = await workerListService.list(this.reqData) // 알바 리스트 호출
            this.SET_PAGE(page) // 현재 액티브 페이징 페이지 저장
            this.SET_WORKER_LIST(data.workerList) // 알바리스트 저장 
            this.SET_TOTAL_PAGE(data.totalPage) // 총 페이지 개수 저장
        }
    },
}
</script>
<style scoped>

</style>