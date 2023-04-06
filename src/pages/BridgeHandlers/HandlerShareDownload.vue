<template>
  <div style="margin-left: 16px">
    <h3>Share Content</h3>
    <p style="margin-top: 36px">Test Share Content</p>
  </div>
  <van-form @submit="onSubmit" class="custom-share">
    <van-cell-group inset>
      <van-field
        v-model="share.message"
        name="Message"
        placeholder="Message"
        :rules="[{ required: true, message: 'Message is required' }]"
      />
    </van-cell-group>
    <div style="margin: 26px 16px">
      <van-button round block type="primary" native-type="submit">
        Share
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { reactive } from "vue";
const $bridge = inject("$bridge");
const share = reactive({
  fileName: "",
  content: "",
  type: "text/plain",
  message: "Share Content",
});

function onSubmit() {
  $bridge.callHandler("share", [share]);
}
</script>
<style lang="scss">
.custom-share {
  .van-cell-group--inset {
    border-radius: 0px;
    border: 1px solid #000000;
  }
}
</style>
