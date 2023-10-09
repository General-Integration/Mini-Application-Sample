import { createWebHistory, createRouter } from "vue-router";
import Home from "@/pages/Home.vue";
import Profile from "@/pages/Profile.vue";
import Payment from "@/pages/Payment.vue";
import Detail from "@/pages/Detail.vue";
import Message from "@/pages/Message.vue";
import Upload from "@/pages/Upload.vue";
import NotFound from "@/pages/NotFound.vue";
import GoogleSign from "@/pages/GoogleSign.vue";
import PlayGround from "../pages/PlayGround.vue";
import CallHandler from "../pages/CallHandler.vue";
import HandlerPlayground from "../pages/BridgeHandlers/HandlerPlayground.vue";
import HandlerSetBarTitle from "../pages/BridgeHandlers/HandlerSetBarTitle.vue";
import HandlerPlayAudioVue from "../pages/BridgeHandlers/HandlerPlayAudio.vue";
import HandlerOpenMapVue from "@/pages/BridgeHandlers/HandlerOpenMap.vue";
import HandlerShareDownloadVue from "@/pages/BridgeHandlers/HandlerShareDownload.vue";
import HandlerAddCalendarVue from "@/pages/BridgeHandlers/HandlerAddCalendar.vue";
import HandlerDoPaymentVue from "@/pages/BridgeHandlers/HandlerDoPayment.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/payment",
    name: "Payment",
    component: Payment,
  },
  {
    path: "/details",
    name: "Detail",
    component: Detail,
  },
  {
    path: "/upload",
    name: "Upload",
    component: Upload,
  },
  {
    path: "/google-sign",
    name: "Google Sign",
    component: GoogleSign,
  },
  {
    path: "/message",
    name: "Message",
    component: Message,
  },
  {
    path: "/playground",
    name: "Playground",
    component: PlayGround,
  },
  {
    path: "/handlers",
    name: "Handlers",
    component: CallHandler,
  },
  {
    path: "/handler-playground",
    name: "Handlers Playground",
    component: HandlerPlayground,
  },
  {
    path: "/handler-setBarTitle",
    name: "Handlers setBarTitle",
    component: HandlerSetBarTitle,
  },
  {
    path: "/handler-playAudio",
    name: "Handlers playAudio",
    component: HandlerPlayAudioVue,
  },
  {
    path: "/handler-OpenMap",
    name: "Handlers OpenMaps",
    component: HandlerOpenMapVue,
  },
  {
    path: "/handler-ShareDownload",
    name: "Handlers Share Download",
    component: HandlerShareDownloadVue,
  },
  {
    path: "/handler-add-Calendar",
    name: "Handlers Add Calendar",
    component: HandlerAddCalendarVue,
  },
  {
    path: "/handler-do-payment",
    name: "Handlers Do Payment",
    component: HandlerDoPaymentVue,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  // history: createWebHistory("/#/"),
  history: createWebHistory(),
  routes,
});

export default router;
