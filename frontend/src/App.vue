<script setup lang="ts">

import NavBar from "@/components/navbar/NavBar.vue";
import {useUserStore} from "@/stores/user.ts";
import {onMounted} from "vue";
import api from "@/js/http/api.ts";
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const router = useRouter();
const user = useUserStore()
onMounted(async () => {
  try{
    const res = await api.get('/api/user/account/get_user_info/');
    const data = res.data;

    if (data.result === 'success') {
      user.setUserInfo(data);
    }
  }
  catch(err) {

  }finally {
    user.setHasPullUserInfo(true)
    if (route.meta.needLogin && !user.isLogin()){
      await router.replace({
        name: 'login-index'
      });
    }
  }
})
</script>

<template>

<nav-bar>
  <router-view></router-view>
</nav-bar>
</template>

<style scoped>

</style>
