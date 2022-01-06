<template>
    <div class="wrap">
        <Header/>
        <div class="content">
            <div class="inner">
                <h2>알바몬 관리</h2>
            </div>
            <div class="section01">
                <div class="inner">
                    <WorkerSearch></WorkerSearch>
                </div>
            </div>
            <div class="section02">
                <div class="inner">
                    <WorkerTable></WorkerTable>
                </div>
            </div>
            <WorkerPage></WorkerPage>
        </div>
    </div>
</template>

<script>
import Header from '../layout/header.vue'
import WorkerSearch from '../layout/worker/WorkerSearch.vue'
import WorkerTable from '../layout/worker/WorkerTable.vue'
import WorkerPage from '../layout/worker/WorkerPage.vue'

export default {
    components:{
        Header,WorkerSearch,WorkerTable,WorkerPage
    }
}
</script>
<style scoped>

</style>