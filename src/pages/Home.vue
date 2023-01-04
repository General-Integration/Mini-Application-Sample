<script>
import { Card, Loading } from "vant";
export default {
  components: {
    [Card.name]: Card,
    [Loading.name]: Loading,
  },
  data() {
    return {
      listData: [],
      json: "",
      request: "",
    };
  },
  created() {
    // set bar title
    this.$bridge.callHandler("setBarTitle", { title: "Home Page" });
  },
  mounted() {
    this.$router.push("?leavePage=true");
    window.onpopstate = () => {
      this.$bridge.callHandler("closeApp");
    };

    this.$fetch.get("https://gorest.co.in/public/v1/posts").then((res) => {
      this.listData = _.get(res, "data.data");
    });

    // this.$fetch
    //   .get("https://jsonplaceholder.typicode.com/todos/1")
    //   .then((res) => {
    //     this.json = res;
    //   });

    // fetch("https://reqres.in/api/users?page=2")
    //   .then((response) => response.json())
    //   .then((data) => (this.request = data));

    // let req = new XMLHttpRequest();
    // req.open("GET", "https://reqres.in/api/users?page=2");
    // req.send();
    // req.onload = () => {
    //   console.log("reqrest", req);
    //   if (req.status === 200) {
    //     let { data } = JSON.parse(req.response);
    //     this.request = data;
    //     console.log("onload", data);
    //   } else {
    //     console.log("error", req.statusText);
    //   }
    // };
  },
  beforeUnmount() {
    window.onpopstate = null;
  },
};
</script>
<template>
  <div class="wrapper" style="margin-bottom: 60px">
    <div class="flex" style="padding: 0 16px">
      <h2>Product</h2>
      <router-link to="/handlers">Handlers</router-link>
    </div>
    <div v-if="!listData.length" style="text-align: center">
      <van-loading type="spinner" color="#1989fa" />
    </div>
    <template v-else v-for="(data, index) in listData" :key="index">
      <router-link to="/details">
        <van-card
          :title="data.title"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          :price="index + 1"
          currency="$ "
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
      </router-link>
    </template>
    <div>
      <router-link to="/details">
        <van-card
          title="View Detail"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          currency="$ "
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
      </router-link>
    </div>
    <div>
      <router-link to="/playground">
        <van-card
          title="Data Fetching Test"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. "
          currency="$ "
          thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        />
      </router-link>
    </div>
  </div>
</template>
<style lang="scss">
.wrapper {
  .fetch-data {
    padding: 30px;
    display: flex;
    button {
      width: 100%;
      margin-right: 10px;
    }
  }
  // padding: 30px;

  .flex {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  h2 {
    padding: 16px 16px 0;
  }
}
body {
  background: #f7f8fa;
}
</style>
