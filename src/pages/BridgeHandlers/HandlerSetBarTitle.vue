<template>
  <div>
    <h3 style="margin-left: 26px">setBarTitle</h3>
    <van-form @submit="onSubmit">
      <van-cell-group inset>
        <van-field
          v-model="payload.title"
          name="title"
          label="title"
          placeholder="title"
        />
        <van-field
          v-model="payload.color"
          name="color"
          label="color"
          placeholder="color"
        />
        <van-field
          v-model="payload.bgColor"
          name="bgColor"
          label="bgColor"
          placeholder="bgColor"
        />
      </van-cell-group>
      <div style="margin: 16px">
        <van-button round block type="primary" native-type="submit">
          Call Handler
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payload: {
        title: "Detail Page",
        bgColor: "#073b4c",
        color: "#d9ed92",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$bridge.callHandler("setBarTitle", this.payload);
    },
  },
};
</script>

<style lang="scss" scoped></style>
