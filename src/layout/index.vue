<script>
// import AppHeader f m "@/components/the-footer";
import VConsole from 'vconsole';
import { Tabbar, TabbarItem, Dialog } from "vant";

new VConsole({ theme: 'light' });

export default {
  name: "AppLayout",
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
    [Dialog.name]: Dialog,
  },
  data() {
    return {
      active: 0,
      icon: {
        active: "https://img01.yzcdn.cn/vant/user-active.png",
        inactive: "https://img01.yzcdn.cn/vant/user-inactive.png",
      },
    };
  },
  watch: {
    $route(val) {
      switch (val.name) {
        case "Profile":
          this.active = 0;
          break;
        case "Payment":
          this.active = 1;
          break;
        default:
          this.active = 0;
          break;
      }
    },
  },
  mounted() {
    console.log('App Mounted')
    this.$bridge.registerHandler("closeApp", () => {
      // callback({ status: true });
      this.handleCloseApp();
    });
  },
  methods: {
    handleChange(val) {
      setTimeout(() => {
        this.active = val;
      }, 100);
    },
    redirect(val) {
      switch (val) {
        case 0:
          this.$router.push("/");
          break;
        case 1:
          this.$router.push("/profile");
          break;
        case 2:
          this.$router.push("/upload");
          break;
        case 3:
          this.$router.push("/google-sign");
          break;
        default:
          break;
      }
    },
    handleCloseApp() {
      Dialog.confirm({
        title: "Leave Mini Application?",
        cancelButtonText: "Cancel",
        confirmButtonText: "Leave",
      })
        .then(() => {
          this.$bridge.callHandler("closeApp").then(() => {});
        })
        .catch(() => {});
    },
  },
};
</script>

<template>
  <div>
    <!-- <AppHeader /> -->
    <div>
      <router-view />
    </div>
    <van-tabbar v-model="active" @change="handleChange">
      <van-tabbar-item @click="redirect(0)" icon="wap-home-o"
        >Home</van-tabbar-item
      >
      <van-tabbar-item @click="redirect(1)">
        <span>Profile</span>
        <template #icon="props">
          <img :src="props.active ? icon.active : icon.inactive" alt=""/>
        </template>
      </van-tabbar-item>
      <van-tabbar-item @click="redirect(2)" icon="idcard"
        >Upload</van-tabbar-item
      >
    </van-tabbar>
    <!-- <AppFooter /> -->
  </div>
</template>
<style>
  .vc-switch{
    bottom: 100px !important;
  }
</style>
