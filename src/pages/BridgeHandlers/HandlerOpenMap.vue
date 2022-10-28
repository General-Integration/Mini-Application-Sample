<template>
  <div style="margin-left: 16px">
    <h3>Open Map</h3>
    <p style="margin-top: 36px">Test Custom location</p>
  </div>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="map.lat"
        name="Lat"
        label="Lat"
        placeholder="Lat"
        :rules="[{ required: true, message: 'Lat is required' }]"
      />
      <van-field
        v-model="map.lng"
        type="Lng"
        name="Lng"
        label="Lng"
        placeholder="Lng"
        :rules="[{ required: true, message: 'Lng is required' }]"
      />
    </van-cell-group>
    <div style="margin: 16px">
      <van-button round block type="primary" native-type="submit">
        Submit
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { reactive, inject } from "vue";
const $bridge = inject("$bridge");
const map = reactive({ lat: "11.576036", lng: "104.923235" });
function onSubmit() {
  $bridge
    .callHandler("openMap", {
      lat: "11.576022622462348",
      lng: "104.92305545211046",
    })
    .then(() => {});
}
</script>
