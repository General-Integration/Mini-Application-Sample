<template>
  <div style="margin-left: 16px">
    <h3>Do Payment</h3>
  </div>
  <van-form @submit="onSubmit" class="custom-share">
    <div style="margin: 50px 50px 20px 20px">
      <label>
        <input type="checkbox" :checked="checked" @input="checked = $event.target.checked" style="margin-left: 0px;" checked/> use default layout
      </label>
    </div>
    <div style="margin: 26px 16px">
      <van-button round block type="primary" native-type="submit">
        Pay
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { ref, inject } from "vue";

const checked = ref(true)
const $bridge = inject("$bridge");
 
function onSubmit() {
  console.log(checked.value)
  $bridge.callHandler("doPayment", {
    defaultLayout: checked.value,
    backgroundColor: '#f66d12',
    textColor: '#FFF',
    account: Date.now(),
    currency: "USD",
    amount: 10
  })
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
