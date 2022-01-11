<template>
    <div class="searchBox">
        <div class="search-col">
            <span>이름</span>
            <input type="text" class="input" v-model="req.name">
        </div>
        <div class="search-col">
            <span>연락처</span>
            <input type="text" class="input" v-model="req.phone">
        </div>
        <div class="search-col">
            <span>인증상태</span>
            <select v-model.number="req.authFlag">
                <option v-bind:value="1" >인증</option>
                <option v-bind:value="0">미인증</option>
            </select>
        </div>
        <button type="button" class="btn" @click="searchWorkerList">검색</button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
import workerListService from '../../service/workerListService'
export default {
    data() {
        return {
            req:{
                name:"",
                phone:"",
                crc:"",
                curPage:0,
                pageNum:1,
                authFlag: 1
            }
        }
    },
    mounted () {
        this.searchWorkerList()
    },
    methods: {
        ...mapMutations('worker',['SET_WORKER_LIST', 'SET_TOTAL_PAGE', 'SET_REQ_DATA']),
        async searchWorkerList() {
            const reqData = {
                phone:this.req.phone,
                name:this.req.name,
                curPage:this.req.curPage,
                pageNum:this.req.pageNum,
                authFlag: this.req.authFlag
            }
            let data = await workerListService.list(reqData)
            this.SET_WORKER_LIST(data.workerList)
            this.SET_TOTAL_PAGE(data.totalPage)
            this.SET_REQ_DATA(reqData)
        }
    },
}
</script>
<style scoped>

</style>