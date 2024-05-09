<template>
  <div style="margin-left: 16px">
    <h3>Get Current Location</h3>
  </div>
  <van-form @submit="onSubmit" class="custom-share">
    <div style="margin: 26px 16px">
      <van-button round block type="primary" native-type="submit">
        Current Location
      </van-button>
    </div>
  </van-form>
  <div>{{ location }}</div>
</template>

<script setup>
import { ref, inject } from "vue";
const $bridge = inject("$bridge");

const location = ref("");

const getCurrentLocation = () => {
  $bridge.registerHandler("getCurrentLocation", (data) => {
    location.value = data;
  });
};

getCurrentLocation();

const onSubmit = () => {
  $bridge.callHandler("requestCurrentLocation");
};
</script>
<style lang="scss">
.custom-share {
  .van-cell-group--inset {
    border-radius: 0px;
    border: 1px solid #000000;
  }
}
</style>
