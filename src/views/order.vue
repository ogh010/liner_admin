<template>
    <div class="wrap">
        <Header/>
        <div class="content">
            <div class="inner">
                <h2>거래관리</h2>
                <!-- <div class="daram daram01" ></div>
                <div class="daram daram02" ></div> -->
            </div>
            <div class="section01">
                <div class="inner">
                    <OrderSearch></OrderSearch>
                </div>
            </div>
            <div class="section02">
                <div class="inner">
                    <OrderTable></OrderTable>
                </div>
            </div>
            <OrderPage></OrderPage>
        </div>
        
    </div>
</template>

<script>
import Header from '../layout/header.vue'
import OrderSearch from '../layout/order/OrderSearch.vue'
import OrderTable from '../layout/order/OrderTable.vue'
import OrderPage from '../layout/order/OrderPage.vue'

export default {
    components:{
        Header,OrderSearch,OrderTable,OrderPage
    },
    methods: {

    },
}
</script>
<style scoped>

</style>