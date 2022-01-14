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
                    <template v-for="(title, index) in titles" >
                        <th :key="index" v-text="title" />
                    </template>
                </tr>
            </thead>
            <tbody>
                <tr class="line_hl" v-for="(worker,index) in this.workerList" :key="index">
                    <td>
                        <p>{{worker.regDt}}</p>
                    </td>
                    <td>
                        <p>{{worker.name}}</p>
                    </td>
                    <td>
                        <p>{{phoneNumber(worker.phone)}}</p>
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
                        <template v-else-if="worker.authFlag == 1"> 
                            <p><b>인증완료</b></p>
                        </template>
                    </td>
                    <td>
                        <template v-if="worker.state == 0">
                            <p>미배정</p>
                        </template>
                        <template v-else-if="worker.state == 1">
                            <button tbuttonype="button" class="btn update" @click="SHOW_POP_UP(2); SET_OBJ({index, name:worker.name,workerId:worker.workerId });">배정취소</button>
                        </template>
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
import assignCancelService from '../../service/assignCancelService'


export default {
    data() {
        return {
            index:"",
            titles: ['등록일', '이름', '연락처', '은행', '계좌번호', '카톡 ID', '알바 횟수', '인증상태', '배정상태']
        }
    },
    components: {
        WorkerAuthPopup,
    },
    computed: {
        ...mapState('worker',['workerList','is_show']),
    },
    methods: {
        ...mapMutations('worker',['SET_TOGGLE_POPUP','SET_WORKER_ID']),
        ...mapMutations('common', ['SHOW_POP_UP', 'SET_OBJ']),
        authBtn(payload){
            this.index = payload.index
            this.SET_TOGGLE_POPUP()
            this.SET_WORKER_ID(payload.workerId)
        },
        assignCancelBtn(workerId){
            let reqData = {token:"", workerId:workerId, crc:""}
            assignCancelService.cancel(reqData)
            .then((res)=>{
                console.log(res);
            })
        }
    },
}
</script>
<style scoped>
</style>