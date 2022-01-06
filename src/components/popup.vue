<template>
    <div>
        <div class="layerWrap" style="display:block;">
            <div class="layerRow">
                <div class="layerCell">
                    <!-- 레이어 내용 -->
                    <div class="layerIn autoHeight">
                        <div class="layerHd">
                        </div>
                        <div class="layerCnt autoHeight">
                            <div class="lyIn">
                                <!-- 컨텐츠 -->
                                <p>팝업</p>
                                <!-- //컨텐츠 -->
                            </div>
                        </div>
                        <div class="layerBtm">
                            <ul>
                                <li><button type="button" class="btn cu" @click="cancelBtn"><span>닫기</span></button></li>
                                <li><button type="button" class="btn pu" @click="submitBtn"><span>확인</span></button></li>
                            </ul>
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
export default {
    methods:{
        cancelBtn(){
            this.$emit('cancelBtn')
        },
        submitBtn(){
            this.$emit('submitBtn')
        }
    }
}
</script>
<style scoped>

</style>