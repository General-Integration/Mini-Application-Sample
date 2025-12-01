<template>
  <div style="margin-left: 16px">
    <h3>Preview PDF</h3>
  </div>
  <van-form @submit="onSubmit" class="custom-share">
    <div style="margin: 50px 16px">
      <van-button round block type="primary" native-type="submit">
        Preview PDF
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { inject } from "vue";
import {techStackPdfBase64 } from '@/utils/techStackPdf'

const $bridge = inject("$bridge");

 
const onSubmit = () => {
  console.log('File size is 5MB')
  const payload = {
    fileName: "ABA Mobile TechStack.pdf",
    content: techStackPdfBase64,
    type: "application/pdf"
  }
  $bridge.callHandler("previewPDF", payload)
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
