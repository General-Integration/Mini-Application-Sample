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
      <van-cell is-link to="/handler-OpenMap" title="Open Map" />
    </van-cell-group>
    <van-cell-group>
      <van-cell is-link to="/handler-ShareDownload" title="Share Content" />
    </van-cell-group>
    <van-cell-group>
      <van-cell is-link to="/handler-download" title="Download Content" />
    </van-cell-group>
    <van-cell-group>
      <van-cell is-link to="/handler-add-Calendar" title="Add Calendar" />
    </van-cell-group>
    <van-cell-group>
      <van-cell is-link to="/handler-account-on-file" title="Account On File" />
    </van-cell-group>
    <van-cell-group>
      <van-cell is-link to="/handler-do-payment" title="Payment" />
    </van-cell-group>
    <van-cell-group>
      <van-cell
        is-link
        to="/handler-request-current-location"
        title="Request Current Location"
      />
    </van-cell-group>
  </div>
</template>
<script>
export default {};
</script>
