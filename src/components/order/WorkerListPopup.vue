<template>
    <div>
        <div class="layerWrap" style="display:block;">
            <div class="layerRow WL">
                <div class="layerCell">
                    <!-- 레이어 내용 -->
                    <div class="layerIn autoHeight">
                        <div class="layerHd">
                            <h2>알바 리스트</h2>
                            <i class="fas fa-window-close" @click="closeBtn"></i>
                        </div>
                        <div class="layerCnt autoHeight">
                            <div class="lyIn">
                                <!-- 컨텐츠 -->
                                <div class="tableBox">
                                    <table class="table">
                                        <colgroup>
                                            <col style="width:30%;" />
                                            <col style="width:25%;" />
                                            <col style="width:30%;" />
                                            <col style="width:15%;" />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th>이름</th>
                                                <th>연락처</th>
                                                <th>계좌번호</th>
                                                <th>배정하기</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr class="line_hl" v-for="(worker,index) in orderWorkerList" :key="index">
                                                <td>
                                                    <p>{{worker.name}}</p>
                                                </td>
                                                <td>
                                                    <p>{{worker.phone}}</p>
                                                </td>
                                                <td>
                                                    <p>{{worker.account}}</p>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn" @click="workerAssignBtn(worker.workerId)">배정하기</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="searchBox">
                                    <div class="search-col">
                                        <span>이름</span>
                                        <input type="text" class="input" v-model="req.name">
                                    </div>
                                    <div class="search-col">
                                        <span>연락처</span>
                                        <input type="text" class="input" v-model="req.phone">
                                    </div>
                                    <button type="button" class="btn" @click="workerList">검색</button>
                                </div>
                                <!-- //컨텐츠 -->
                            </div>
                        </div>
                    </div>
                    <!-- //레이어 내용 -->
                </div>
            </div>
        </div>
        <!-- //개발사용 : 팝업 -->
        <div id="dim" style="display: block;"></div>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import orderWorkerListService from '../../service/orderWorkerListService'
import orderWorkerAssignService from '../../service/orderWorkerAssignService'

export default {
    data() {
        return {
            req:{
                crc:"",
                token:"",
                phone:"",
                name:""
            }
        }
    },
    methods:{
        ...mapMutations('order',['SET_TOGGLE_POPUP','SET_ORDER_WORKER_LIST','SET_TOGGLE_POPUP']),
        closeBtn(){
            this.SET_TOGGLE_POPUP()
        },
        workerList(){
            const reqData={
                crc:this.req.crc,
                token:this.req.token,
                phone:this.req.phone,
                name:this.req.name
            }
            orderWorkerListService.list(reqData)
            .then((res)=>{
                this.SET_ORDER_WORKER_LIST(res.workerList)
            })
        },
        workerAssignBtn(workerId){
            const reqData = {
                crc:this.req.crc,
                token:this.req.token,
                orderId:this.orderId,
                workerId:workerId
            }
            orderWorkerAssignService.assign(reqData)
            .then((res)=>{
                this.$emit("infoPass",res.workerInfo)
                this.SET_TOGGLE_POPUP()
                // this.$router.go()
            })
        }
    },
    computed: {
        ...mapState('order',['orderWorkerList','orderId']),
        
    },
    mounted () {
        this.workerList()
    },
    destroyed () {
        this.req.name = "",
        this.req.phone = ""
    },
}
</script>
<style scoped>

</style>