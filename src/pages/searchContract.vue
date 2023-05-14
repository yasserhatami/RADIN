<template>
  <v-container fluid dir="rtl" class=" container d-flex justify-center align-center">
    <v-row class=" h-50 flex-column justify-center align-center w-50">
      <v-col class="rounded-lg " cols="12" md="4">
        <div class="containerf pa-5">
          <div v-for="(input, index) in fields" :key="index">
            <div class="form-item w-100  rounded-lg py-3">
              <input
                class="w-100 h-100 rounded-lg"
                type="text"
                autocomplete="off"
                required
              />
              <label for="text">{{ input }}</label>
            </div>
          </div>
          <v-btn class="bg-secondary" block>جست و جو</v-btn>
          <p class="text-red text-h6 mt-2">*پر کردن حداقل یکی از فیلد ها الزامیست.</p>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        "کد ملی",
        "شماره قرارداد",
        "نوع قرارداد",
        "نوع خودرو",
        "قراردادهای تسویه شده",
      ],
    };
  },
};
</script>

<style scoped>
.container{
    height: 100vh;
    background-image: url("@/assets/images/whitecar.png") ;
    background-repeat: no-repeat;
    background-position:center center;
    background-size: cover;
}
.containerf {
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid #d9d9d9;
  border-radius: 30px;
}
.form-item {
  position: relative;
  margin-bottom: 5px;
  height: 60px;
}
.form-item input {
  display: block;
  outline: none;
  background: transparent;
  border: solid 1px #ccc;
  transition: all 0.3s ease;
  padding: 0 15px;
}
.form-item input:focus {
  border-color: #888888;
}
.form-item label {
  position: absolute;
  cursor: text;
  z-index: 2;
  top: 30%;
  right: 10px;
  font-size: 12px;
  font-weight: bold;
  background: #fff;
  padding: 0 10px;
  color: #999;
  transition: all 0.3s ease;
}
.form-item input:focus + label,
.form-item input:valid + label {
  font-size: 11px;
  top: 5px;
}
.form-item input:focus + label {
  color: #888888;
}
</style>