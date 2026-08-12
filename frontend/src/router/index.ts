import { createRouter, createWebHistory } from 'vue-router'
import HomepageIndex from "@/views/homepage/HomepageIndex.vue";
import FriendIndex from "@/views/friend/FriendIndex.vue";
import CreateIndex from "@/views/create/CreateIndex.vue";
import NotFoundIndex from "@/views/error/NotFoundIndex.vue";
import LoginIndex from "@/views/user/account/loginIndex.vue";
import RegisterIndex from "@/views/user/account/RegisterIndex.vue";
import ProfileIndex from "@/views/user/profile/ProfileIndex.vue";
import SpaceIndex from "@/views/user/space/SpaceIndex.vue";
import {useUserStore} from "@/stores/user.ts";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component: HomepageIndex,
      name: 'homepage-index',
      meta:{
        needLogin: false,
      }
    },
    {
      path:'/friend',
      component: FriendIndex,
      name: 'friend-index',
      meta:{
        needLogin: true,
      }

    },
    {
      path:'/create/',
      component: CreateIndex,
      name: 'create-index',
      meta:{
        needLogin: true,
      }
    },
    {
      path:'/404',
      component: NotFoundIndex,
      name: '404',
      meta:{
        needLogin: false,
      }

    },
    {
      path:'/user/account/login',
      component: LoginIndex,
      name: 'user-login',
      meta:{
        needLogin: false,
      }
    },
    {
      path:'/user/account/register',
      component: RegisterIndex,
      name: 'user-register',
      meta:{
        needLogin: false,
      }
    },
    {
      path:'/user/profile',
      component: ProfileIndex,
      name: 'user-profile',
      meta:{
        needLogin: true,
      }
    },
    {
      path:'/user/space/:user_id/',
      component: SpaceIndex,
      name: 'user-space',
      meta:{
        needLogin: true,
      }
    },
    {
      path:'/:pathMatch(.*)*',
      component: NotFoundIndex,
      name: 'not-found',
      meta:{
        needLogin: false,
      }
    }

  ],
})

router.beforeEach((to, from) => {
  const user = useUserStore()
  if (to.meta.needLogin && !user.isLogin()) {
    return {
      name: 'user-login',
    }
  }else{
    return true
  }
})

export default router
