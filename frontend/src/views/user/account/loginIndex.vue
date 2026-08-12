<script setup lang="ts">
import {ref} from "vue";
import api from "@/js/http/api.ts";
import {useUserStore} from "@/stores/user.ts";

import {useRouter} from "vue-router";

const router = useRouter();
const user = useUserStore()
const username = ref('')
const password = ref('')
const errorMessage = ref('')
async function handleLogin() {
  errorMessage.value = ''
  if(!username.value.trim()){
    errorMessage.value = '用户名不能为空'
  }else if (!password.value.trim()){
    errorMessage.value = '密码不能为空'
  }else{
    try{
      const res = await api.post('/api/user/account/login/', {
        username: username.value,
        password: password.value
      })
      const data = res.data
      if(data.result  === 'success'){
        user.setAccessToken(data.access)
        user.setUserInfo(data)
        await router.push({
          name:'homepage-index'
        })
      }else{
        errorMessage.value = data.result
      }
    }
    catch (err: any) {
      console.error('完整错误：', err)
      console.error('后端返回：', err.response?.data)
    }
  }
}
</script>

<template>
  <div class="container flex justify-center mt-30">
    <form @submit.prevent="handleLogin()" class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


      <label class="label">Username</label>
      <input v-model="username" type="text" class="input" placeholder="账号"/>

      <label class="label">Password</label>
      <input v-model="password" type="password" class="input" placeholder="密码"/>
      <p v-if="errorMessage" class="text-red-500 text-sm ">
        {{ errorMessage }}
      </p>

      <button class="btn btn-neutral mt-4">登录</button>
      <div class="flex justify-end">
        <router-link :to="{name :'user-register'}" class="btn btn-small">注册</router-link>
      </div>
    </form>

  </div>

</template>

<style scoped>

</style>