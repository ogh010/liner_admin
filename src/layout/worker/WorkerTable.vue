<template>
    <div class="tableBox">
        <table class="table">
            <colgroup>
                <col style="width:12%;" />
                <col style="width:10%;" />
                <col style="width:12%;" />
                <col style="width:10%;" />
                <col style="width:11%;" />
                <col style="width:11%;" />
                <col style="width:11%;" />
                <col style="width:11%;" />
                <col style="width:12%;" />
            </colgroup>
            <thead>
                <tr>
                    <th>등록일</th>
                    <th>이름</th>
                    <th>연락처</th>
                    <th>은행</th>
                    <th>계좌번호</th>
                    <th>카톡 ID</th>
                    <th>알바 횟수</th>
                    <th>인증상태</th>
                    <th>배정상태</th>
                </tr>
            </thead>
            <tbody>
                <tr class="line_hl" v-for="(worker,index) in this.workerList" :key="index">
                    <td>
                        <p>2021.10.01 12:12:12</p>
                    </td>
                    <td>
                        <p>{{worker.name}}</p>
                    </td>
                    <td>
                        <p>{{worker.phone}}</p>
                    </td>
                    <td>
                        <p>{{worker.bank}}</p>
                    </td>
                    <td>
                        <p>{{worker.account}}</p>
                    </td>
                    <td>
                        <p>{{worker.kakaoId}}</p>
                    </td>
                    <td>
                        <p>{{worker.count}}</p>
                    </td>
                    <td>
                        <template v-if="worker.authFlag == 0"> 
                            <button tbuttonype="button" class="btn" @click="authBtn({index:index,workerId:worker.workerId})">인증하기</button>
                        </template>
                        <template v-if="worker.authFlag == 1"> 
                            <p><b>인증완료</b></p>
                        </template>
                    </td>
                    <td>
                        <p v-if="worker.state == 0">미배정</p>
                        <p v-else-if="worker.state == 1"><b>배정</b></p>
                    </td>
                </tr>
            </tbody>
        </table>
        <WorkerAuthPopup v-if="is_show" v-bind:index="index"/>
    </div>
</template>
<script>
import { mapMutations, mapState } from 'vuex'
import WorkerAuthPopup from '@/components/worker/WorkerAuthPopup.vue'

export default {
    data() {
        return {
            index:""
        }
    },
    computed: {
        ...mapState('worker',['workerList','is_show']),

    },
    methods: {
        ...mapMutations('worker',['SET_TOGGLE_POPUP','SET_WORKER_ID']),
        authBtn(payload){
            this.index = payload.index
            this.SET_TOGGLE_POPUP()
            this.SET_WORKER_ID(payload.workerId)
        },
    },
    components: {
        WorkerAuthPopup,
    },
}
</script>
<style scoped>

</style>