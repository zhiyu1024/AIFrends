<script setup lang="ts">

</script>

<template>
  <div class="container flex justify-center mt-30">
    <fieldset class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">


      <label class="label">Username</label>
      <input type="text" class="input" placeholder="输入您的账号"/>

      <label class="label">Password</label>
      <input type="password" class="input" placeholder="请输入您的密码"/>

      <label class="label">Confirm Password</label>
      <input type="password" class="input" placeholder="请再次输入您的密码"/>

      <router-link :to="{name :'user-login'}" class="btn btn-neutral mt-4">登录</router-link>
      <div class="flex justify-end">
        <router-link :to="{name :'user-register'}" class="btn btn-small">注册</router-link>
      </div>
    </fieldset>

  </div>

</template>

<style scoped>

</style>