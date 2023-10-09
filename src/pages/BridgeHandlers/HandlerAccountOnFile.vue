<template>
  <div>
    <div class="bridge-form">
      <!-- Using PayWay Plugin -->
      <h3 style="margin-bottom: 0px">PayWay - Account On File</h3>
      <small style="margin-bottom: 40px">Using PayWay PluginJs</small>
      <!-- end using PayWay Plugin -->

      <input placeholder="Enter qr_string" type="text" v-model="qr_string" />
      <div class="buttons">
        <button type="submit" @click="callBridge" :disabled="qr_string === ''">Call Bridge</button>
        <button type="submit" @click="clearForm">Clear</button>
      </div>
    </div>

    <code>
      <pre>
            {{ response }}
      </pre>
    </code>

    <code>
      <pre>
            {{ responseProfile }}
      </pre>
    </code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qr_string: '',
      response: null,
      responseProfile: null,
    }
  },
  mounted() {
    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://checkout.payway.com.kh/plugins/checkout2-0.js')
    document.head.appendChild(recaptchaScript)

    setTimeout(() => {
      AbaPayway.miniAppRegisterHandler('getAccountOnFile').then((res) => {
        this.response = res
      })

      // AbaPayway.miniAppCallHandler('getProfile').then((res) => {
      //   this.responseProfile = res
      // })
    }, 2000)
  },
  methods: {
    clearForm() {
      this.response = null
      this.qr_string = ''
    },
    callBridge() {
      AbaPayway.miniAppCallHandler('doAccountOnFile', {
        qr_string: this.qr_string,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.bridge-form {
  margin-top: 20px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  input,
  textarea {
    display: block;
    height: 40px;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    padding: 0 10px;
    margin-bottom: 10px;
  }

  .buttons {
    display: flex;
    align-items: stretch;
    gap: 5px;
    button {
      flex: 1;
    }
  }
}
</style>
