<template>
  <div>
    <div class="bridge-form">
      <input placeholder="handler" type="text" v-model="bridge" />
      <textarea placeholder="payload" v-model="payload" />
      <div class="buttons">
        <button type="submit" @click="callBridge">Call Bridge</button>
        <button type="submit" @click="clearForm">Clear</button>
      </div>
    </div>

    <code>
      <pre>

            {{ response }}
        </pre
      >
    </code>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bridge: "",
      payload: "",
      response: null,
    };
  },
  methods: {
    clearForm() {
      this.response = null;
      this.payload = null;
      this.bridge = null;
    },
    callBridge() {
      let parsePayload = null;
      this.response = null;
      if (this.payload) {
        try {
          parsePayload = JSON.parse(this.payload);
        } catch (error) {
          parsePayload = null;
        }
      }
      console.log("bridgeName: ", this.bridge);
      console.log("payload: ", this.payload);
      this.$bridge.callHandler(this.bridge, parsePayload).then((res) => {
        console.log(`${this.bridge}: `, res);
        this.response = res;
      });
    },
  },
};
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
