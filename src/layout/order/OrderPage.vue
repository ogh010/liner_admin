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
import { mapMutations, mapState } from 'vuex'
import orderListService from '../../service/orderListService'


export default {
    computed: {
        ...mapState('order',['totalPage','activePage','reqData']),
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
    methods: {
        ...mapMutations('order',['SET_ORDER_LIST','SET_PAGE', 'SET_TOTAL_PAGE', 'SET_CUP_PAGE']),
        async movePage(page){
            this.SET_CUP_PAGE(page) // response curpage 저장
            let data = await orderListService.list(this.reqData)
            this.SET_PAGE(page)
            this.SET_ORDER_LIST(data.orderList)
            this.SET_TOTAL_PAGE(data.totalPage); //total 페이지 저장
        }
    },
}
</script>
<style scoped>

</style>