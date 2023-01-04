<template>
  <div style="margin-left: 16px">
    <h3>Add Calendar</h3>
    <p style="margin-top: 36px">Test add calendar</p>
  </div>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
        v-model="calendar.title"
        name="title"
        label="title"
        placeholder="title"
        :rules="[{ required: true, message: 'title is required' }]"
      />
      <van-field
        v-model="calendar.description"
        name="description"
        label="description"
        placeholder="description"
      />

      <van-field
        label="Start Date"
        v-model="startDate"
        @click="showStartDate = true"
        placeholder="date"
        :rules="[{ required: true, message: 'start date is required' }]"
      />
      <van-calendar
        v-model:show="showStartDate"
        @confirm="onConfirmStartDate"
      />

      <van-field
        label="End Date"
        v-model="endDate"
        placeholder="date"
        @click="showEndDate = true"
        :rules="[{ required: true, message: 'end date is required' }]"
      />
      <van-calendar v-model:show="showEndDate" @confirm="onConfirmEndDate" />
    </van-cell-group>

    <div style="margin: 26px 16px">
      <van-button round block type="primary" native-type="submit">
        Add Calendar
      </van-button>
    </div>
  </van-form>
</template>

<script setup>
import { reactive, inject, ref } from "vue";
import { Toast } from "vant";
const $bridge = inject("$bridge");
const calendar = reactive({
  title: "The Title",
  description: "Description",
  startDate: "",
  endDate: "",
});
const startDate = ref("");
const endDate = ref("");
const showStartDate = ref(false);
const showEndDate = ref(false);

const formatDate = (date) =>
  `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
const onConfirmStartDate = (value) => {
  showStartDate.value = false;
  calendar.startDate = +new Date(value);
  startDate.value = formatDate(value);
};
const onConfirmEndDate = (value) => {
  showEndDate.value = false;
  calendar.endDate = +new Date(value);
  endDate.value = formatDate(value);
};

function onSubmit() {
  Toast.loading({
    message: "Loading...",
    forbidClick: true,
    duration: 10000,
  });
  $bridge.callHandler("addCalendar", calendar).then(() => {
    Toast.success("Success");
  });
}
</script>
