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
      </PopUp>
  </div>
</template>

<script>
import PopUp from '@/components/common/Popup.vue'
import { mapState, mapMutations } from 'vuex'
import orderCancelService from '../service/orderCancelService'

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
        ...mapMutations('order',['SET_ORDER_STATE_CANCEL']),
        submitBtn() {
            this.CHANGE_IS_SHOW(false)
            if(this.type == 0) {
                let reqData = {
                    crc : "",
                    orderId : this.obj.orderId
                }
                orderCancelService.cancel(reqData)
                .then((res)=>{
                    console.log(res);
                    this.SET_ORDER_STATE_CANCEL(this.obj.index)
                })
            }
            else if(this.type == 1) {
                console.log('주문완료');
            }
        },
        cancelBtn() {
            this.CHANGE_IS_SHOW(false)
        },
        
    }
}
</script>

<style>

</style>