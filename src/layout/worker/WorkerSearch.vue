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
                token:"",
                curPage:0,
                pageNum:10
            }
        }
    },
    methods: {
        ...mapMutations('worker',['SET_WORKER_LIST']),
        searchWorkerList() {
            const reqData = {
                token:this.req.token,
                phone:this.req.phone,
                name:this.req.name,
                curPage:this.req.curPage,
                pageNum:this.req.pageNum
            }
            workerListService.list(reqData)
            .then((data)=>{
                this.SET_WORKER_LIST(data.workerList)
            })
        }
    },
    mounted () {
        this.searchWorkerList()
    },
}
</script>
<style scoped>

</style>