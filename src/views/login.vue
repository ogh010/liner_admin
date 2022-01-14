<template>
    <div class="wrap">
        <div class="content login">
            <div class="lIner">
                <span class="logo"></span>
                <div class="loginBox">
                    <div class="box">
                        <span>아이디</span>
                        <input type="text" class="input" v-model="id" placeholder="아이디를 입력해주세요">
                    </div>
                    <div class="box">
                        <span>비밀번호</span>
                        <input type="password" class="input" v-model="pw" placeholder="비밀번호를 입력해주세요">
                    </div>
                </div>
                <button class="btn" type="button" @click="login()">로그인</button>
            </div>
        </div>
        <div class="daram"></div>
    </div>
</template>
<script>
import LoginService from '@/service/LoginService'
import axios from '@/plugins/axios';

export default {
    name: 'Login',
    data () {
        return {
            id: '',
            pw: ''
        }
    },
    methods: {
        async login() {
            let reqData = { id: this.id, pw: this.pw }
            let data = await LoginService(reqData)
            if(data.resultCode == 0) {
                localStorage.setItem('ln_co', data.token)
                axios.defaults.headers.Authorization = data.token
                this.$router.replace({name: 'order'})
            }
        }
    }
}
</script>