<template>
    <div class="searchBox">
        <div class="search-col">
            <span>시작날짜</span>
            <v-menu
                ref="fromMenu"
                v-model="from.menu"
                :close-on-content-click="false"
                :return-value.sync="from.date"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="from.date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    color="#E4B95D"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="from.date"
                no-title
                scrollable
                color="#E4B95D"
                >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="#E4B95D"
                    @click="from.menu = false"
                >
                    Cancel
                </v-btn>
                <v-btn
                    text
                    color="#E4B95D"
                    @click="$refs.fromMenu.save(from.date)"
                >
                    OK
                </v-btn>
                </v-date-picker>
            </v-menu>
        </div>
        <div class="search-col">
            <span>종료날짜</span>
            <v-menu
                ref="toMenu"
                v-model="to.menu"
                :close-on-content-click="false"
                :return-value.sync="to.date"
                transition="scale-transition"
                offset-y
                min-width="auto"
            >
                <template v-slot:activator="{ on, attrs }">
                <v-text-field
                    v-model="to.date"
                    prepend-icon="mdi-calendar"
                    readonly
                    v-bind="attrs"
                    v-on="on"
                    color="#E4B95D"
                ></v-text-field>
                </template>
                <v-date-picker
                v-model="to.date"
                no-title
                scrollable
                color="#E4B95D"
                >
                <v-spacer></v-spacer>
                <v-btn
                    text
                    color="#E4B95D"
                    @click="to.menu = false"
                >
                    Cancel
                </v-btn>
                <v-btn
                    text
                    color="#E4B95D"
                    @click="$refs.toMenu.save(to.date)"
                >
                    OK
                </v-btn>
                </v-date-picker>
            </v-menu>
        </div>
        <div class="search-col">
            <span>주문번호</span>
            <input type="text" class="input" v-model="req.orderCode">
        </div>
        <div class="search-col">
            <span>이름</span>
            <input type="text" class="input" v-model="req.name">
        </div>
        <div class="search-col">
            <span>연락처</span>
            <input type="text" class="input" v-model="req.phone">
        </div>
        <button type="button" class="btn" @click="SearchBtn()">검색</button>
    </div>
</template>
<script>
import {mapMutations} from 'vuex'
import orderListService from '../../service/orderListService'

export default {
    data: () => ({
        from:   //시작날짜
            {
                date: (new Date().getFullYear()-1)+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
                menu: false,
            },
        to:     //종료날짜
            {
                date: new Date().getFullYear()+'-'+(new Date().getMonth()+1)+'-'+new Date().getDate(),
                menu: false,
            },
        req:{
            crc:"", //crc
            token:"",   //token
            orderCode:"",   //주문번호
            name:"",    //이름
            phone:"",   //연락처
            curPage:0, //현재페이지
            pageNum:20  //페이지 개수
        },
    }),

    methods: {
        ...mapMutations('order',['SET_ORDER_LIST','SET_TOTAL_PAGE','SET_PAGE','SET_REQ_DATA']),
        SearchBtn() {
            const reqData = {
                token : this.req.token,
                from : this.from.date,
                to : this.to.date,
                orderCode : this.req.orderCode,
                name : this.req.name,
                phone : this.req.phone,
                curPage : this.req.curPage,
                pageNum : this.req.pageNum
            }
            orderListService.list(reqData)
            .then((res)=>{
                this.SET_ORDER_LIST(res.orderList);  //거래관리 주문리스트 조회
                this.SET_TOTAL_PAGE(res.pageNum); //total 페이지 저장
                this.SET_PAGE(0) 
                this.SET_REQ_DATA(reqData)
            })
        }
    },
    mounted () {
        this.SearchBtn()
    },
}
</script>
<style scoped>

</style>