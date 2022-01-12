<template>
    <div class="tableBox">
        <table class="table">
            <colgroup>
                <col style="width:10%;" />
                <col style="width:10%;" />
                <col style="width:10%;" />
                <col style="width:16%;" />
                <col style="width:10%;" />
                <col style="width:10%;" />
                <col style="width:11%;" />
                <col style="width:7%;" />
                <col style="width:16%;" />
            </colgroup>
            <thead>
                <tr>
                    <th>주문일시</th>
                    <th>서비스일시</th>
                    <th>주문번호</th>
                    <th>장소</th>
                    <th>이용시간</th>
                    <th>구매자</th>
                    <th>연락처</th>
                    <th>주문상태</th>
                    <th>배정알바</th>
                </tr>
            </thead>
            <tbody>
                <tr class="line_hl" v-for="(order,index) in this.orderList" :key="index">
                    <td>
                        <p>{{order.orderTime}}</p>
                    </td>
                    <td>
                        <p>{{order.serviceTime}}</p>
                    </td>
                    <td>
                        <p>{{order.orderCode}}</p>
                    </td>
                    <td>
                        <p>{{order.place}} <b>({{order.brand}})</b></p>
                    </td>
                    <td>
                        <p>{{order.beginTime}} ~ {{order.endTime}}</p>
                    </td>
                    <td>
                        <p>{{order.name}}</p>
                    </td>
                    <td>
                        <p>{{phoneNumber(order.phone)}}</p>
                    </td>
                    <td>
                        <p v-if="order.state==0">서비스 신청</p>
                        <p v-else-if="order.state==1">입금 완료</p>
                        <p v-else-if="order.state==2">배정중</p>
                        <p v-else-if="order.state==3">진행중</p>
                        <p v-else-if="order.state==4">완료</p>
                        <p v-else-if="order.state==5">주문취소</p>
                    </td>
                    <td>
                        <template v-if="order.workerInfo">
                            <div class="display">
                                <button tbuttonype="button" class="btn update" @click="workerAssignPopup({orderId:order.orderId,index:index})">배정변경</button>
                                <button tbuttonype="button" class="btn complete">주문취소</button>
                                <button tbuttonype="button" class="btn complete">주문완료</button>
                            </div>
                            <p>{{order.workerInfo}}</p>
                        </template>
                        <template v-else>
                            <button type="button" class="btn" @click="workerAssignPopup({orderId:order.orderId,index:index})">배정하기</button>
                        </template>
                    </td>
                </tr>
            </tbody>
        </table>
        <WorkerListPopup v-if="is_show" @infoPass="infoPass"/>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import WorkerListPopup from '@/components/order/WorkerListPopup.vue'

export default {
    data:()=>({
        index:""
    }),
    methods: {
        ...mapMutations('order',['SET_TOGGLE_POPUP','SET_ORDER_ID','SET_ORDERLIST_ADD_WOKRERINFO']),
        workerAssignPopup(payload){
            this.SET_TOGGLE_POPUP()
            this.SET_ORDER_ID(payload.orderId)
            this.index = payload.index
        },
        infoPass(info){
            let index = this.index
            let payload = {index,info}
            this.SET_ORDERLIST_ADD_WOKRERINFO(payload)
        },
    },
    components: {
        WorkerListPopup
    },
    computed: {
        ...mapState('order',['orderList','is_show']),
    },
}
</script>
<style scoped>

</style>