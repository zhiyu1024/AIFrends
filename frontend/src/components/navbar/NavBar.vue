<script setup lang="ts">

import MenuIcon from "@/components/navbar/Icon/MenuIcon.vue";
import HomepageIcon from "@/components/navbar/Icon/HomepageIcon.vue";
import CreateIcon from "@/components/navbar/Icon/CreateIcon.vue";
import FriendIcon from "@/components/navbar/Icon/FriendIcon.vue";
import SearchIcon from "@/components/navbar/Icon/SearchIcon.vue";
import {useUserStore} from "@/stores/user.ts";
import UserMenu from "@/components/navbar/userMenu.vue";
const user = useUserStore()
</script>

<template>
<div class="drawer lg:drawer-open">
  <input id="my-drawer-4" type="checkbox" class="drawer-toggle inline" />
  <div class="drawer-content">

    <nav class="navbar w-full bg-base-100 shadow-sm">
      <div class="navbar-start">
        <label for="my-drawer-4" aria-label="open sidebar" class="btn btn-square btn-ghost drawer-button">
          <menu-icon/>
        </label>
        <div class="px-4 font-bold text-xl" >AIFriends</div>
      </div>
      <div class="navbar-center flex justify-center">
        <div class="join">
        <input class="input join-item w-99" placeholder="搜索内容" />
        <button class="btn join-item rounded-r-full"><search-icon/>搜索</button>
</div>
      </div>
      <div class="navbar-end">
        <Router-link v-if="user.isLogin()" :to="{name: 'create-index'}" active-class="btn-active" class="btn btn-ghost mr-6">
          <create-icon/>
          创作
        </Router-link>
        <router-link v-if="!user.isLogin()" :to="{name: 'user-login'}" active-class="btn-active" class="btn btn-ghost">登录</router-link>
        <user-menu v-else class="mr-6"/>
      </div>


    </nav>

    <slot></slot>
  </div>

  <div class="drawer-side is-drawer-close:overflow-visible">
    <label for="my-drawer-4" aria-label="close sidebar" class="drawer-overlay"></label>
    <div class="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">

      <ul class="menu w-full grow">

        <li>
          <router-link :to="{name: 'homepage-index'}" active-class="menu-focus" class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Homepage">
            <HomepageIcon/>
            <span class="is-drawer-close:hidden">首页</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'friend-index'}" active-class="menu-focus" class="is-drawer-close:tooltip is-drawer-close:tooltip-right" data-tip="Friend">
            <FriendIcon/>
            <span class="is-drawer-close:hidden">好友</span>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'create-index'}" active-class="menu-focus" is-drawer-close:tooltip is-drawer-close:tooltip-right data-tip="Create">
            <CreateIcon/>
            <span class="is-drawer-close:hidden">创作</span>
          </router-link>
        </li>

      </ul>
    </div>
  </div>
</div>
</template>

<style scoped>

</style>