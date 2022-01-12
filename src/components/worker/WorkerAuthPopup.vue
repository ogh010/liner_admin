<template>
    <div>
        <div class="layerWrap" style="display:block;">
            <div class="layerRow WA">
                <div class="layerCell">
                    <!-- 레이어 내용 -->
                    <div class="layerIn autoHeight">
                        <div class="layerCnt autoHeight">
                            <div class="lyIn">
                                <!-- 컨텐츠 -->
                                <div class="searchBox">
                                    <div class="search-col">
                                        <span>인증번호</span>
                                        <input type="text" class="input" v-model="req.authCode">
                                    </div>
                                </div>
                                <!-- //컨텐츠 -->
                            </div>
                        </div>
                        <div class="layerBtm">
                            <ul>
                                <li><button type="button" class="btn cu" @click="cancelBtn"><span>닫기</span></button></li>
                                <li><button type="button" class="btn pu" @click="authBtn"><span>인증하기</span></button></li>
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
import { mapMutations, mapState } from 'vuex'
import workerAuthService from '../../service/workerAuthService'

export default {
    props: ['index'],
    data() {
        return {
            req:{
               authCode:"",
               token:""
            }
        }
    },
    methods:{
        ...mapMutations('worker',['SET_TOGGLE_POPUP','SET_WORKER_AUTH_FLAG']),
        cancelBtn(){
            this.SET_TOGGLE_POPUP()
        },
        async authBtn(){
            const reqData = {
                token:this.req.token,
                workerId:this.workerId,
                authCode:this.req.authCode
            }
            let data = await workerAuthService.auth(reqData)
            this.SET_TOGGLE_POPUP()
            if (data.resultCode == 0) {
                this.SET_WORKER_AUTH_FLAG(this.index)
                // 팝업 토스트 처리 해주세요 (내용: 인증에 성공 하였습니다. )
            } else if (data.resultCode == 100) {
                // 팝업 토스트 처리 해주세요 (내용: 인증에 실패 하였습니다. )
            }
        }
    },
    computed: {
        ...mapState('worker',['workerId']),
        
    },
    mounted () {
        console.log(this.index);
    },
}
</script>
<style scoped>

</style>