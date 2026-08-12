<script setup lang="ts">
import {useUserStore} from "@/stores/user.ts";
import UserLogoutIcon from "@/components/navbar/Icon/UserLogoutIcon.vue";
import UserProfile from "@/components/navbar/Icon/UserProfileIcon.vue";
import UserSpaceIcon from "@/components/navbar/Icon/UserSpaceIcon.vue";
import api from "@/js/http/api.ts";
import {useRouter} from "vue-router";
const user = useUserStore()
const router = useRouter()
function closeMenu() {
  const element = document.activeElement
  if (element && element instanceof HTMLElement) element.blur()
}

async function handleLogout() {
  try{
    const res = await api.post('/api/user/account/logout/')
    if (res.data.result === 'success') {
      user.logout()
      await router.push({
        name: 'homepage-index'
      })
    }

  }catch(error){
    console.log(error)
  }
}
</script>

<template>
  <div class="dropdown  dropdown-end">
    <div tabindex="0" role="button" class="avatar btn btn-circle w-8 h-8 mr-6">
      <div class="w-8 rounded-full">
        <img :src="user.photo" alt="">
      </div>
    </div>
    <ul tabindex="-1" class="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
      <li>
        <RouterLink @click="closeMenu()"  :to="{name: 'user-space',params: {user_id: user.id}}" class="text-xl font-bold py-6">
          <div class="avatar">
            <div class="w-10 rounded-full">
              <img :src="user.photo" alt="">
            </div>
          </div>
          <span class="text-base font-bold line-clamp-1">{{user.username}}</span>
        </RouterLink>
      </li>
      <li>
        <RouterLink @click="closeMenu()" :to="{name: 'user-space',params: {user_id: user.id}}" class="text-sm font-bold py-3">
          <UserSpaceIcon/>个人空间
        </RouterLink>
      </li>
      <li>
        <RouterLink @click="closeMenu()" :to="{name: 'user-profile',params: {user_id: user.id}}" class="text-sm font-bold py-3">
          <UserProfile/>编辑资料
        </RouterLink>
      </li>
      <li>

      </li>
      <li>
        <a @click="handleLogout()" class="text-sm font-bold py-3">
          <UserLogoutIcon/>退出登录
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>