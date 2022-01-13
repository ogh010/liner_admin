<template>
  <v-app id="App">
    <v-main>
      <router-view/>
      <PopUpLy />
    </v-main>
  </v-app>
</template>

<script>
import PopUpLy from '@/layout/PopUpLy.vue'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  components: {
    PopUpLy
  }
};
</script>
