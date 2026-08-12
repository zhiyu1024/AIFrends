import {defineStore} from "pinia";
import {ref} from "vue";

export  const useUserStore = defineStore('user',()=> {
    const id  =  ref()
    const  username = ref('')
    const photo = ref('')
    const profile = ref('')
    const accessToken = ref('')
    const hasPullUserInfo = ref(false)

    function isLogin(){
        return !!accessToken.value
    }
    function setAccessToken(token:any){
        accessToken.value = token
    }
    function setUserInfo(data:any){
        id.value = data.user_id
        username.value = data.username
        photo.value = data.photo
        profile.value = data.profile
    }
    function logout(){
        id.value = 0
        username.value = ''
        photo.value = ''
        profile.value = ''
        accessToken.value = ''
    }
    function setHasPullUserInfo(newStatus:any){
        hasPullUserInfo.value = newStatus
    }
    return {
        id,
        username,
        photo,
        profile,
        accessToken,
        setAccessToken,
        isLogin,
        setUserInfo,
        logout,
        hasPullUserInfo,
        setHasPullUserInfo,

    }
})

