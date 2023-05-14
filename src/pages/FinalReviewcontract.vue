<template>
  <v-container fluid dir="rtl">
    <v-row>
      <v-col
        cols="12"
        class="page w-100 d-flex justify-center align-start align-md-center"
      >
        <div class="inner w-75  rounded-xl pa-2">
          <div class="w-100 text-start">
            <p style="color: #bfdc36">بازبینی نهایی</p>
          </div>
          <div
            class="component py-3 mt-3 w-100 d-flex justify-space-between"
            v-for="(input, index) in Object.keys(form)"
            :key="index"
          >
            <div class="w-50 d-flex justify-space-between mr-5">
              <span class="key">{{ arr[index]}}</span>
              <span class="value mr-7">{{ form[input] }}</span>
            </div>
            <div class="d-flex justify-end">
              <v-img
                class="img pa-3 ml-3"
                src="@/assets/images/edit.png"
              ></v-img>
            </div>
          </div>
          <div class="mt-3 mb-5">
          <v-btn @click="GoToFinalReviewOfTheContract" class="btn" block
            >ثبت نهایی</v-btn
          >
        </div>
        </div>
       
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        "نام": "",
        "نام خانوادگی": "",
        "کد ملی": "",
        "نوع قرارداد": "",
        "شماره قرارداد": "",
        "نوع خودرو": "",
        "وضعیت قرارداد": "",
      },
      arr: ["نام", "نام خانوادگی", "کد ملی","نوع قرارداد","شماره قرارداد","نوع خودرو","وضعیت قرارداد"]
    };
  },

  mounted() {
    // let form = Object.values(localStorage.getItem("form"));
    let x = localStorage.getItem("form");
    this.form = JSON.parse(x);

    console.log(x);
    console.log();
  },
};
</script>

<style scoped>
.value {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 30px;
  color: #888888;
}
.key {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  color: #454d5e;
}
.component {
  background: #fcfcfc;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
}
.btn {
  background-color: #bfdc36;
}
.row {
  padding-right: 5px;
  padding-left: 5px;
}

.page {
  height: 95vh;
  background-color: #f5f5f5;
  font-family: "DanaFaNum";
}
.wrap {
  width: 600px;
  font-family: "DanaFaNum";
  background: #ffffff;
  border: 1px solid #d9d9d9;
}
.inner {
  background: #fcfcfc;
  border: 1px solid #d9d9d9;
}
.img {
  width: 15px;
  height: 15px;
}
</style>