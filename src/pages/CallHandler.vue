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
  </div>
</template>
