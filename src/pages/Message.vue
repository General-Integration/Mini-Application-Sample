<script>
import { Card, Loading, Button } from "vant";
export default {
  components: {
    [Card.name]: Card,
    [Loading.name]: Loading,
    [Button.name]: Button,
  },
  data() {
    return {
      label: {
        success: {
          img: "success.png",
          message: "Success",
        },
        error: {
          img: "error.png",
          message: "Fail",
        },
      },
      status: "success",
    };
  },
  created() {
    // set bar title
    this.$bridge.callHandler("setBarTitle", { title: "Payment Page" });
  },
  methods: {
    clickBack() {
      this.$bridge.callHandler("backToHomePage");
    },
  },
  mounted() {
    this.$router.push("?payment");

    // listen back button browser click
    window.onpopstate = () => {
      console.log("onpopstate");
      this.$bridge.callHandler("backToHomePage");
    };
  },
  beforeUnmount() {
    window.onpopstate = null;
  },
};
</script>
<template>
  <div class="message" style="margin-bottom: 60px">
    <!-- <img :src="require(`@/static/${label[status].img}`)" alt="" class="img" /> -->
    <img src="@/static/success.png" class="img" alt="" />
    <h3>Success</h3>
    <van-button type="success" @click="clickBack" class="btn-done" block
      >Done</van-button
    >
  </div>
</template>
<style lang="scss">
.message {
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 100px);
  flex-direction: column;
  padding: 16px;
  .img {
    width: 180px;
  }
  .btn-done {
    margin-top: 50px;
  }
}
body {
  background: #f7f8fa;
}
</style>
