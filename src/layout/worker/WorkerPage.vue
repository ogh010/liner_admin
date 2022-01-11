<template>
    <div class="page_nav">
        <div class="prev" @click="prevPage(startPage)"></div>
        <ul v-for="(startPage, index) in this.endPage" :key="index" >
            <!-- <li class="on">1</li> -->
            <li @click="pageMove(startPage - 1)">{{startPage}}</li>
        </ul>
        <div class="nex" @click="nextPage(endPage + 1)"></div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import workerListService from '../../service/workerListService'

export default {
 
    name: "workerPage",
    computed: {
        ...mapState('worker',['totalPage', 'page', 'reqData']),
        startPage () {
            return ((this.page - 1) / 10) * 10 + 1
        },
        endPage () {
            let startPage = ((this.page - 1) / 10) * 10 + 1;
            let endPage = startPage + 10 - 1;
            if (endPage > this.totalPage) {
                endPage = this.totalPage;
            }
             return endPage
        }
    },
    methods: {
        ...mapMutations('worker',['SET_WORKER_LIST', 'SET_TOTAL_PAGE', 'SET_REQ_DATA', 'SET_CUP_PAGE', 'SET_UP_PAGE', 'SET_DOWN_PAGE']),
        async pageMove(page) {
            this.SET_CUP_PAGE(page)
            let data = await workerListService.list(this.reqData)
            this.SET_WORKER_LIST(data.workerList)
            this.SET_TOTAL_PAGE(data.totalPage)
        },
        async nextPage(page) {
            this.SET_CUP_PAGE(page)
            let data = await workerListService.list(this.reqData)
            this.SET_WORKER_LIST(data.workerList)
            this.SET_TOTAL_PAGE(data.totalPage)
            console.log(this.startPage)
            console.log(this.endPage)
        },
        async prevPage(page) {
            this.SET_CUP_PAGE(page)
            let data = await workerListService.list(this.reqData)
            this.SET_WORKER_LIST(data.workerList)
            this.SET_TOTAL_PAGE(data.totalPage)
        }
    },
}
</script>
<style scoped>

</style>