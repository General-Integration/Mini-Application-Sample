<template>
  <div>
    <h3 style="margin-left: 26px">playAudio</h3>

    <van-list>
      <van-cell-group v-for="item in payload.playlist" :key="item">
        <van-cell
          clickable
          @click="onItemClick(item)"
          :title="item.title"
          :icon="
            payload.playId === item.id ? 'pause-circle-o' : 'play-circle-o'
          "
        />
      </van-cell-group>
    </van-list>
  </div>
</template>

<script setup>
import { inject, onMounted, ref } from "vue";

const payload = ref({
  playId: null,
  playlist: [
    {
      id: 1,
      url: "https://media.bookeyond.com/7/50.mp3",
      title: "audio 1",
    },
    {
      id: 2,
      url: "https://media.bookeyond.com/7/51.mp3",
      title: "audio 2",
    },
    {
      id: 3,
      url: "https://media.bookeyond.com/7/52.mp3",
      title: "audio 3",
    },
    {
      id: 4,
      url: "https://media.bookeyond.com/7/53.mp3",
      title: "audio 4",
    },
    {
      id: 5,
      url: "https://media.bookeyond.com/7/54.mp3",
      title: "audio 5",
    },
    {
      id: 6,
      url: "https://media.bookeyond.com/7/55.mp3",
      title: "audio 6",
    },
    {
      id: 7,
      url: "https://media.bookeyond.com/7/56.mp3",
      title: "audio 7",
    },
  ],
});
const $bridge = inject("$bridge");

onMounted(() => {});

function onItemClick(item) {
  payload.value.playId = item?.id;
  $bridge.callHandler("playAudio", payload.value);
}
</script>

<style lang="scss" scoped></style>
