<template>
  <div class="wrapper">
    <h3 style="margin-left: 16px">Handlers</h3>
    <van-cell-group>
      <van-cell
        is-link
        to="/handler-playground"
        title="PlayGround"
        label="Input handler name and payload to see the response"
      />
    </van-cell-group>

    <div class="title">Available Handlers</div>

    <van-cell-group>
      <van-cell
        is-link
        to="/handler-setBarTitle"
        title="setBarTitle"
        label="Change title text, title bar background and text color"
      />
    </van-cell-group>
    <van-cell-group>
      <van-cell
        is-link
        to="/handler-playAudio"
        title="playAudio"
        label="Pass list of audio to play on native app"
      />
    </van-cell-group>
    <van-cell-group>
      <van-cell
        is-link
        @click="handleOpenMap"
        title="Open Map"
      /> </van-cell-group
    >s
  </div>
</template>
<script>
export default {
  methods: {
    handleOpenMap() {
      this.$bridge
        .callHandler("openMap", {
          lat: "11.576022622462348",
          lng: "104.92305545211046",
        })
        .then(() => {});
    },
  },
};
</script>
