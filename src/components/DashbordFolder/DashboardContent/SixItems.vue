<template>
  <v-container class dir="rtl" fluid>
    <v-row class>
      <v-col cols="4" class="aa">
        <div class="item d-flex justify-center align-center text-center px-2">
          <span>ثبت قبض</span>
        </div>
      </v-col>

      <v-col cols="4" class="aa">
        <router-link to="/ContractList">
          <div class="item d-flex justify-center align-center text-center px-2">
            <span>ثبت قرارداد</span>
          </div>
        </router-link>
      </v-col>

      <v-col cols="4" class="aa">
        <div class="item d-flex justify-center align-center text-center px-2">
          <span>تمدید قرارداد</span>
        </div>
      </v-col>
    </v-row>

    <v-row class>
      <v-col cols="4" class="aa">
        <div class="item d-flex justify-center align-center text-center px-2">
          <span>جست و جوی قرارداد</span>
        </div>
      </v-col>

      <v-col cols="4" class="aa">
        <div class="item d-flex justify-center align-center text-center px-2">
          <span>تسویه قرارداد</span>
        </div>
      </v-col>

      <v-col cols="4" class="aa">
        <div class="item d-flex justify-center align-center text-center px-2">
          <span>تحویل خودرو</span>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
span {
  width: 100%;

  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 85%;
  line-height: 30px;

  color: #ffffff;
}
.item {
  width: 100%;
  height: 100px;
  background-image: url("@/assets/images/stonwall.png");
  background-blend-mode: luminosity;
  border-radius: 1.2rem;
  background-color: #485162;
  background-size: auto;
  background-position: center center;
}
@media only screen and (min-width: 1000px) {
  .item {
    height: 120px;
    background-repeat: repeat-x;
  }
}
@media only screen and (min-width: 1200px) {
  .item {
    height: 150px;
  }
}
</style>