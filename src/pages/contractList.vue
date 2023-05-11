<template>
  <v-container fluid class="container mt-7 px-3" dir="rtl">
    <v-row class="px-10 px-md-0">
      <v-col cols="12" md="6" class="pa-0 pa-md-3">
        <div class="box w-100 pa-2" type="text">
          <input class="w-100" placeholder="جست و جو..." type="text" />
          <v-icon icon="mdi-magnify"></v-icon>
        </div>
      </v-col>

      <v-col class="pa-0 pa-md-3" cols="12" md="3">
        <div
          class="box w-100 pa-2 d-flex justify-space-between align-center"
          
        >
          <div class="bb">
            <select
              aria-placeholder="hh"
              class="pr-3"
              name="select"
              id="select"
              v-model="select"
            >
              <option value="" disabled selected>وضعیت قرارداد</option>
              <option value="">تمام شده</option>
              <option value="">تمدید شده</option>
              <option value="">در حال انجام</option>
            </select>
          </div>
          <div class="">
            <v-img
              class="aa"
              cover
              :src="require('@/assets/images/arrow.svg')"
            ></v-img>
          </div>
        </div>
      </v-col>

      <v-col class="pa-0 pa-md-3" cols="12" md="3">
        <div class="box btn w-100 pa-2 d-flex justify-center align-center">
          <router-link to="/appendContract" class=" text-decoration-none text-white ">افزودن قرارداد</router-link>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <tableComponent></tableComponent>
    </v-row>
  </v-container>
</template>
<script>
import tableComponent from "@/components/contractContent/tableComponent.vue";
export default {
  data() {
    return {
      select: "",
    };
  },
  components: {
    tableComponent,
  },
};
</script>
<style scoped>
.btn {
  font-style: normal;
  font-weight: 500 !important;
  font-size: 24px !important;
  line-height: 30px !important;

  color: #ffffff !important;
  background: #bfdc36 !important;
}
.box {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 20px;
  height: 60px;
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  display: flex;
  align-items: center;
  text-align: right;

  color: #272b31;
}
input {
  outline: none;
}
#select {
  width: 90%;
  height: 100%;
  outline: none;
}
.aa {
  width: 10px;
  height: 10px;
}
.bb {
  width: 90%;
}
</style>