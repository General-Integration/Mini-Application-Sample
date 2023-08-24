<script>
export default {
  created() {
    // set bar title
    this.$bridge.callHandler("setBarTitle", { title: "Google Sign In Page" });
  },
  methods: {
    decodeJwtResponse (token) {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
        atob(base64).split("").map(function (c) { 
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2); 
        }).join("")
      );
      return JSON.parse(jsonPayload);
    },
    handleCredentialResponse (response) {
      const responsePayload = this.decodeJwtResponse(response.credential);
      document.getElementById('name').innerHTML = responsePayload.name
      document.getElementById('email').innerHTML = responsePayload.email
    }
  },
  mounted() {
    google.accounts.id.initialize({
      client_id: "778205346325-am0vd834qdodnpqfn8a56d1b2o6bvddq.apps.googleusercontent.com",
      callback: this.handleCredentialResponse
    });
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "outline", size: "large" }  // customization attributes
    );
    google?.accounts.id.prompt(); // also display the One Tap dialog
  }
};
</script>
<template>
  <div class="wrapper" style="margin-bottom: 60px">
    <h2 style="padding: 16px">Google Sign In</h2>
    <div class="description" :style="{display: 'flex', 'flex-direction': 'column', 'justify-content': 'center', 'align-items': 'center'}">
      <div id="buttonDiv">Google</div>
      <table>
        <thead>
          <tr>
            <td>Properties</td>
            <td>Value</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Full Name</td>
            <td id="name"></td>
          </tr>
          <tr>
            <td>Email</td>
            <td id="email"></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style lang="scss">
.wrapper {
  .description {
    padding: 16px;
    display: flex;
    justify-content: center;
    .img {
      width: 100%;
      height: 400px;
      object-fit: contain;
    }
  }
  h2 {
    padding: 16px 16px 0;
  }
}
body {
  background: #fff;
}
table{
  width: 100%;
  margin-top: 20px;
  border: 1px solid gray;
  border-collapse: collapse;
}
table thead td{
  width: 50%;
  text-align: left;
  padding: 10px 10px;
  background-color: rgb(218, 222, 220);
}
table tbody td{
  width: 50%;
  text-align: left;
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid;
}
</style>