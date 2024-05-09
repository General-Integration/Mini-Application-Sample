<script>
import { registerHandler } from 'web-bridge-gateway'
import {
  Card,
  Icon,
  Loading,
  Button,
  Cell,
  CellGroup,
  Grid,
  GridItem,
} from "vant";
export default {
  components: {
    [Card.name]: Card,
    [Icon.name]: Icon,
    [Loading.name]: Loading,
    [Button.name]: Button,
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
  },
  data() {
    return {
      listData: [],
      payment: {
        amount: "6",
        currency: "",
        useDefault: false,
        account: +new Date() + "", // something that unique like transaction_id|invioce_id|ticket_id
      },
      defaultAcc: {
        accountName: "",
        accountNumber: "",
        currency: "",
      },
    };
  },
  created() {
    // set bar title
    this.$bridge.callHandler("setBarTitle", {
      title: "Detail Page",
      bgColor: "#073b4c",
      color: "#d9ed92",
    });
    this.getDefaultAcc();
  },
  methods: {
    resetPaymentPayload() {
      this.payment = {
        amount: "6",
        currency: "",
        useDefault: false,
        account: +new Date() + "", // something that unique like transaction_id|invioce_id|ticket_id
      };
    },
    getDefaultAcc() {
      this.$bridge
        .callHandler("getDefaultAcc", {
          currency: "USD",
          amount: "6",
        })
        .then((res) => {
          console.log("getDefaultAcc", res);
          if (res.accountName) this.defaultAcc = res;
        });
    },
    onSubmitUSD(useDefaultAcc = false) {
      this.resetPaymentPayload();
      this.payment.currency = "USD";
      this.payment.amount = "1";
      this.payment.useDefault = useDefaultAcc;
      this.$bridge.callHandler("doPayment", this.payment).then(() => {});
    },
    onSubmitKHR(useDefaultAcc = false) {
      this.resetPaymentPayload();
      this.payment.currency = "KHR";
      this.payment.amount = "4000";
      this.payment.useDefault = useDefaultAcc;
      this.$bridge.callHandler("doPayment", this.payment).then(() => {});
    },
  },
  mounted() {
    registerHandler("getStatus", (data) => {
      console.log("getStatus", data);
      // this.$router.push({
      //   path: "message",
      //   query: { message: data.status },
      // });
    });
  },
};
</script>
<template>
  <div class="wrapper" style="margin-bottom: 60px">
    <h2 style="padding: 16px">Detail</h2>
    <div class="description">
      <img src="https://img01.yzcdn.cn/vant/ipad.jpeg" class="img-detail" />
      <h3>Title of Product</h3>
      <h4>$ 1.00</h4>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod possimus
        sequi aliquam, vel omnis pariatur, magni, eum molestiae saepe quam non
        ipsa at beatae eius repellat dolore velit nulla ab.
      </p>

      <!-- <van-cell-group v-if="defaultAcc.accountName">
        <van-cell is-link @click="onSubmitUSD(false)">
          <template #title>
            {{ defaultAcc.accountName }}: {{ defaultAcc.accountNumber }} |
            {{ defaultAcc.currency }}
          </template>
        </van-cell>
      </van-cell-group> -->
      <van-grid direction="horizontal" :border="false" :column-num="2">
        <van-grid-item>
          <van-button
            plain
            icon="credit-pay"
            type="primary"
            @click="onSubmitUSD(true)"
            >Buy (USD)</van-button
          >
        </van-grid-item>
        <van-grid-item>
          <van-button
            plain
            icon="credit-pay"
            type="primary"
            @click="onSubmitKHR(true)"
            >Buy (KHR)</van-button
          >
        </van-grid-item>
      </van-grid>

      <div class="payment-section" v-if="defaultAcc.accountName">
        <img src="@/static/aba-pay.png" class="abapay" />
        <div class="account">
          <div>
            <span class="name">{{
              defaultAcc.accountName || "Savings Account"
            }}</span>
            <span class="number"
              >{{ defaultAcc.accountNumber || "000 123 569" }} |
              {{ defaultAcc.currency || "USD" }}</span
            >
          </div>
          <div>
            <span class="choose" @click="onSubmitUSD(false)">
              Change
              <van-icon name="arrow-down" />
            </span>
          </div>
        </div>
        <div>
          <van-button
            block
            @click="onSubmitUSD(true)"
            class="btn-pay"
            type="primary"
            >Pay $1.00</van-button
          >
          <img src="@/static/power-aba.png" class="power-aba" />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.wrapper {
  .description {
    padding: 16px;
    margin-bottom: 255px;
    .img-detail {
      width: 100%;
      height: 200px;
      object-fit: contain;
    }
  }
  h2 {
    padding: 16px 16px 0;
  }
  .payment-section {
    position: fixed;
    width: calc(100% - 32px);
    bottom: 50px;
    background: #fff;
    padding: 16px;
    left: 0;
    box-shadow: 0px 0px 24px rgba(13, 3, 30, 0.08);
    .abapay {
      margin-bottom: 20px;
    }
    .account {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .name {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        letter-spacing: -0.0041em;
        display: block;
      }
      .number {
        font-weight: 500;
        font-size: 12px;
        line-height: 15px;
        color: #000000;
        opacity: 0.5;
      }
      .choose {
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        padding: 5px;
        &:hover {
          cursor: pointer;
        }
      }
    }
    .btn-pay {
      border-radius: 10px;
      margin-top: 16px;
      font-weight: 600;
      font-size: 16px;
      line-height: 22px;
      /* identical to box height, or 138% */
      letter-spacing: -0.0041em;
    }
    .power-aba {
      display: block;
      margin: 0 auto;
      padding: 8px 0;
    }
  }
}
body {
  background: #f7f8fa;
}
</style>
