<template>
  <v-card class="card d-flex justify-center align-center w-100">
    <div class="w-100 h-75">
      <v-img class="theimg" :src="require('@/assets/images/logo.png')"></v-img>
      <div class="aaaaaaa w-100">
        <p>RADIN KHODROU</p>
      </div>
    </div>
  </v-card>
</template>
<script>
export default {
  name: "LogoText"
};
</script>
<style scoped>
.theimg {
  width: 90%;
}
.card {
  background-color: transparent;
  position: relative;
}

p {
  font-family: Ranga;
  font-size: 3.4vw;
  color: #ccc9ce;
  letter-spacing: 0.2em;
  font-weight: 700;
  position: absolute;
  top: 60%;
  left: 24%;
  line-height: 15.15px;
}



@font-face {
  font-family: "Ranga";
  src: local("Ranga Regular"), local("Ranga-Regular"),
    url("@/assets/fonts/Ranga-Regular.woff2") format("woff2"),
    url("@/assets/fonts/Ranga-Regular.woff") format("woff"),
    url("@/assets/fonts/Ranga-Regular.ttf") format("truetype");
  font-weight: 700;
  font-style: normal;
}
</style>