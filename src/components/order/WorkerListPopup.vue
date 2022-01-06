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
                                            <tr class="line_hl">
                                                <td>
                                                    <p>오가희</p>
                                                </td>
                                                <td>
                                                    <p>010-9224-5158</p>
                                                </td>
                                                <td>
                                                    <p>111-111-111-456</p>
                                                </td>
                                                <td>
                                                    <button type="button" class="btn">배정하기</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <div class="searchBox">
                                    <div class="search-col">
                                        <span>이름</span>
                                        <input type="text" class="input">
                                    </div>
                                    <div class="search-col">
                                        <span>연락처</span>
                                        <input type="text" class="input">
                                    </div>
                                    <button type="button" class="btn" >검색</button>
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
        ...mapMutations('order',['SET_TOGGLE_POPUP']),
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
                console.log(res);
            })
        }
    },
    mounted () {
        this.workerList()
    },
}
</script>
<style scoped>

</style>