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
        submitBtn() {
            this.CHANGE_IS_SHOW(false)
        },
        cancelBtn() {
            this.CHANGE_IS_SHOW(false)
        }
    }
}
</script>

<style>

</style>