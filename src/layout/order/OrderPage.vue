<template>
    <div class="page_nav">
        <div class="prev"></div>
            <ul v-for="(i, index) in endPage" :key="index" >
            <li v-if="i >= startPage" @click="movePage(i-1)" :class="{ 'on' : i ===  activePage + 1 }">{{i}}</li>
        </ul>
        <div class="nex"></div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import orderListService from '../../service/orderListService'


export default {
    computed: {
        ...mapState('order',['totalPage','activePage','reqData']),
        startPage(){
            return(parseInt(this.activePage) / 10) * 10 +1
        },
        endPage(){
            let endPage = parseInt((this.activePage / 10)) * 10 + 10;
            if(endPage > this.totalPage) {
                endPage = this.totalPage
            }
            return endPage
        }
    },
    mounted () {
        
    },
    methods: {
        ...mapMutations('order',['SET_ORDER_LIST','SET_PAGE']),
        async moevePage(page){
            this.SET_PAGE(page)
            let data = await orderListService.list(this.reqData)
            this.SET_ORDER_LIST(data.orderList)
        }
    },
}
</script>
<style scoped>

</style>