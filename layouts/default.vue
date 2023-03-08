<template>
<v-app>
        <Header></Header>
        <SideNav></SideNav>
    
                <Nuxt />
                <Footer></Footer>
        
</v-app>
</template>


<script>

// import Header from '@/components/Header.vue'
// import Footer from '@/components/Footer.vue'
// import SideNav from '@/components/SideNav.vue'
import firebase from '../plugins/firebase'

import { mapActions } from 'vuex'
import 'firebase/auth'


export default {
  name: 'App',
//   components:{
//     Header,
//     SideNav,
//     Footer,
//   },
  methods:{
    ...mapActions(['setLoginUser','deleteLoginUser','fetchOrderItems','clearOrderItems'])
  },
  created(){
    firebase.auth().onAuthStateChanged(user=>{
     
      if(user){
        // console.log("app")
        this.setLoginUser(user);
        this.fetchOrderItems();
        // console.log("appauth-user",user)
        // console.log("appauth-login-user", this.$store.state.login_user)
        // this.$router.push('/').catch(() => {});      
      }else{
        console.log("appe",user)
        this.deleteLoginUser();
        this.clearOrderItems();
        // this.$router.push('/').catch(() => {})
      }
    });
  },
  mounted(){
  }
}

</script>
