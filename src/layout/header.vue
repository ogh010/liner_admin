<template>
    <div class="header">
            <div class="inner">
                <div class="logo"></div>
                <nav class="nav">
                    <ul>
                        <li :class="{'on':this.$route.path=='/'}">
                            <router-link to="/">
                                <a>거래관리</a>
                            </router-link>
                        </li>
                        <li :class="{'on':this.$route.path=='/worker'}">
                            <router-link to="/worker">
                                <a>알바관리</a>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>