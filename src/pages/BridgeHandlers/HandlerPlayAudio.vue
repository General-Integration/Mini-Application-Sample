<template>
  <div>
    <h3 style="margin-left: 16px">playAudio</h3>
    <div style="margin: 16px">
      <div style="margin-bottom: 10px; font-size: 14px">Handler logs</div>

      <div class="log-container">
        <ol>
          <li v-for="log in logs" :key="log" style="margin-bottom: 10px">
            <div>
              {{ log.desc }}
            </div>
            <div style="margin-top: 8px; color: #07c160" v-if="log.data">
              <code>
                {{ log.data }}
              </code>
            </div>
          </li>
        </ol>
      </div>

      <div style="margin: 16px; display: flex">
        <van-button
          style="margin: 0 auto"
          round
          type="primary"
          size="mini"
          @click="logs = []"
        >
          Clear Logs
        </van-button>
        <van-button
          style="margin: 0 auto"
          round
          type="primary"
          size="mini"
          @click="onGetPlayingId"
        >
          getPlayingId
        </van-button>
        <van-button
          style="margin: 0 auto"
          round
          type="primary"
          size="mini"
          @click="onSetAudioPlay"
        >
          setAudioPlay
        </van-button>
        <van-button
          style="margin: 0 auto"
          round
          type="primary"
          size="mini"
          @click="onSetPlayList"
        >
          setPlayList
        </van-button>
      </div>
    </div>
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
let logs = ref([]);
const payload = ref({
  playId: null,
  playlist: [
    {
      id: 1,
      url: "https://media.bookeyond.com/7/50.mp3",
      title: "audio 1",
      thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+1",
      description: "sample description for audio 1",
      bookId: "7",
    },
    {
      id: 2,
      url: "https://media.bookeyond.com/7/51.mp3",
      title: "audio 2",
      thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+2",
      description: "sample description for audio 2",
      bookId: "7",
    },
    {
      id: 3,
      url: "https://media.bookeyond.com/7/52.mp3",
      title: "audio 3",
      thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+3",
      description: "sample description for audio 3",
      bookId: "7",
    },
    {
      id: 4,
      url: "https://media.bookeyond.com/7/53.mp3",
      title: "audio 4",
      thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+4",
      description: "sample description for audio 4",
      bookId: "7",
    },
    {
      id: 5,
      url: "https://media.bookeyond.com/7/54.mp3",
      title: "audio 5",
      thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+5",
      description: "sample description for audio 5",
      bookId: "7",
    },
    {
      id: 6,
      url: "https://media.bookeyond.com/7/55.mp3",
      title: "audio 6",
      thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+6",
      description: "sample description for audio 6",
      bookId: "7",
    },
    {
      id: 7,
      url: "https://media.bookeyond.com/7/56.mp3",
      title: "audio 7",
      thumbnail: "https://via.placeholder.com/300x300.png?text=Audio+7",
      description: "sample description for audio 7",
      bookId: "7",
    },
  ],
});
const $bridge = inject("$bridge");

onMounted(() => {
  $bridge.registerHandler("onPlayIdChange", (res) => {
    setLog(`"onPlayIdChange" event triggered from native..`, res);
    payload.value.playId = res.id;
  });
  setLog(`listening to "onPlayIdChange" event from native..`);

  $bridge.registerHandler("redirectPage", (res) => {
    setLog(`"redirectPage" event triggered from native..`, res);
  });
  setLog(`listening to "redirectPage" event from native..`);
});

function onItemClick(item) {
  payload.value.playId = item?.id;
  $bridge.callHandler("setAudioPlay", { playId: item.id });
  setLog(`mini app called "setAudioPlay" handler`, { playId: item.id });
}

function onSetAudioPlay() {
  const defaultPlayId = 1;
  $bridge.callHandler("setAudioPlay", { playId: defaultPlayId }).then(() => {
    setLog(`mini app called "setAudioPlay" handler`, { playId: defaultPlayId });
    payload.value.playId = defaultPlayId;
  });
}

function onGetPlayingId() {
  $bridge.callHandler("getPlayingId").then((res) => {
    setLog(`mini app called "getPlayingId" handler`, res);
    payload.value.playId = res.playId;
  });
}

function onSetPlayList() {
  payload.value.playId = 1;
  $bridge.callHandler("setPlayList", payload.value).then((data) => {
    setLog(`mini app called "setPlayList" handler`, data);
  });
}

function setLog(desc, data) {
  logs.value.push({
    desc,
    data,
  });
}
</script>

<style lang="scss" scoped>
.log-container {
  padding: 20px;
  border: 1px solid rgb(235, 237, 240);
  border-radius: 3px;
  font-family: monospace;
  margin-bottom: 20px;
  overflow-y: auto;
  height: 150px;
}
</style>
