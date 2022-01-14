<template>
  <div v-if="is_show">
      <PopUp @submitBtn="submitBtn" @cancelBtn="cancelBtn">
          <slot v-if="type == 0" slot="content">
              {{obj.workerInfo}}님의 <br>
              주문을 취소하시겠습니까?
          </slot>
          <slot v-if="type == 1" slot="content">
              {{obj.workerInfo}}님의 <br>
              주문을 완료하시겠습니까?
          </slot>
          <slot v-if="type == 2" slot="content">
              {{obj.name}}의 <br> 배정을 취소하시겠습니까?
          </slot>
      </PopUp>
  </div>
</template>

<script>
import PopUp from '@/components/common/Popup.vue'
import { mapState, mapMutations } from 'vuex'
import orderCancelService from '../service/orderCancelService'
import assignCancelService from '@/service/assignCancelService'
import orderCompletedService from '@/service/orderCompletedService'

export default {
    name: "PopUpLy",
    components: {
        PopUp
    },
    computed: {
        ...mapState('common',['is_show', 'type', 'obj']),
    },
    methods: {
        ...mapMutations('common',['CHANGE_IS_SHOW']),
        ...mapMutations('order',['CHANGE_ORDER_STATE']),
        ...mapMutations('worker',['CHANGE_WORKER_STATE']),
        submitBtn() {
            switch (this.type) {
                case 0: this.cancleOrder(); break;
                case 1: this.completedOrder(); break;
                case 2: this.assignCancel(); break;
                default: break;
            }
            this.CHANGE_IS_SHOW(false)
        },
        cancelBtn() {
            this.CHANGE_IS_SHOW(false)
        },
        async cancleOrder() {
            let reqData = { orderId : this.obj.orderId }
            let data = await orderCancelService.cancel(reqData)
            if (data.resultCode == 0) {
                this.CHANGE_ORDER_STATE({ index: this.obj.index, state: 5})
            }
        },
        async assignCancel() {
            let reqData = { workerId: this.obj.workerId }
            let data = await  assignCancelService.cancel(reqData)
            if (data.resultCode == 0) {
                this.CHANGE_WORKER_STATE({ index: this.obj.index, state: 0})
            }
        },
        async completedOrder () {
            let reqData = { orderId : this.obj.orderId }
            let data = await orderCompletedService(reqData)
            if (data.resultCode == 0) {
                this.CHANGE_ORDER_STATE({ index: this.obj.index, state:4})
            }
        }
        
    }
}
</script>

<style>

</style>