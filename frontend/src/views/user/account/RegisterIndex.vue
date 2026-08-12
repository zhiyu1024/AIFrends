<script setup lang="ts">
import {ref} from "vue";
import api from "@/js/http/api.ts";
import {useUserStore} from "@/stores/user.ts";
import {useRouter} from "vue-router";

const user = useUserStore()
const router = useRouter()
const username = ref('')
const password = ref('')
const passwordConfirm = ref('')
const errorMessage = ref('')

async function handleRegister() {
  errorMessage.value = ''
  if (!username.value.trim()) {
    errorMessage.value = '用户名不能为空'
  } else if (!password.value.trim()) {
    errorMessage.value = '密码不能为空'
  } else if (password.value.trim() !== passwordConfirm.value.trim()) {
    errorMessage.value = '两次密码不一致'
  }else{
    try{
      const ref = await api.post('/api/user/account/register/', {
        username: username.value,
        password: password.value,
      })
      const data = ref.data
      if (data.result === 'success') {
        user.setAccessToken(data.accessToken)
        user.setUserInfo(data)
        await router.push({
          name: 'homepage-index'
        })
      }else{
        errorMessage.value = data.result
      }
    }
    catch(error){

    }
  }
}
</script>


<template>
  <div class="container flex justify-center mt-30">
    <form @submit.prevent="handleRegister()" class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


      <label class="label">Username</label>
      <input v-model="username" type="text" class="input" placeholder="输入您的账号"/>

      <label class="label">Password</label>
      <input v-model="password" type="password" class="input" placeholder="请输入您的密码"/>

      <label class="label">Confirm Password</label>
      <input v-model="passwordConfirm" type="password" class="input" placeholder="请再次输入您的密码"/>
      <p v-if="errorMessage" class="text-red-500 text-sm ">
        {{errorMessage}}
      </p>

      <button type="submit" class="btn btn-neutral mt-4">注册</button>
      <div class="flex justify-end">
        <router-link :to="{name :'user-login'}" class="btn btn-small">登录</router-link>
      </div>
    </form>

  </div>

</template>

<style scoped>

</style>