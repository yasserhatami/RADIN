<template>
  <v-container fluid dir="rtl">
    <v-row>
      <v-col cols="12" class="page w-100 d-flex justify-center align-center">
        <div class="formcontainer w-75 d-flex justify-center align-center px-5">
          <v-row class="my-8 d-flex justify-center align-center w-100">
            <v-col cols="11" class="">
              <v-row class="row mx-5">
                <p>اطلاعات شخصی</p>
              </v-row>
              <v-row class="mx-2 row">
                <v-col class="rounded-lg" cols="12" md="4">
                  <div class="form-item w-100 h-100 rounded-lg">
                    <input
                      class="w-100 h-100 rounded-lg"
                      type="password"
                      id="password"
                      autocomplete="off"
                      required
                    />
                    <label for="password">نام</label>
                  </div>
                </v-col>

                <v-col class="rounded-lg" cols="12" md="4">
                  <div class="form-item w-100 h-100 rounded-lg">
                    <input
                      class="w-100 h-100 rounded-lg"
                      type="password"
                      id="password"
                      autocomplete="off"
                      required
                    />
                    <label for="password">نام خانوادگی</label>
                  </div>
                </v-col>

                <v-col class="rounded-lg" cols="12" md="4">
                  <div class="form-item w-100 h-100 rounded-lg">
                    <input
                      class="w-100 h-100 rounded-lg"
                      type="password"
                      id="password"
                      autocomplete="off"
                      required
                    />
                    <label for="password"> کد ملی</label>
                  </div>
                </v-col>
              </v-row>

              <v-row class="row mx-5 mt-8">
                <p>اطلاعات قرارداد</p>
              </v-row>
              <v-row class="mx-2 row">
                <v-col class="rounded-lg" cols="12" md="4">
                  <div class="form-item w-100 h-100 rounded-lg">
                    <input
                      class="w-100 h-100 rounded-lg"
                      type="password"
                      id="password"
                      autocomplete="off"
                      required
                    />
                    <label for="password">نوع قرارداد</label>
                  </div>
                </v-col>

                <v-col class="rounded-lg" cols="12" md="4">
                  <div class="form-item w-100 h-100 rounded-lg">
                    <input
                      class="w-100 h-100 rounded-lg"
                      type="password"
                      id="password"
                      autocomplete="off"
                      required
                    />
                    <label for="password"> شماره قرارداد</label>
                  </div>
                </v-col>

                <v-col class="rounded-lg" cols="12" md="4">
                  <div class="form-item w-100 h-100 rounded-lg">
                    <input
                      class="w-100 h-100 rounded-lg"
                      type="password"
                      id="password"
                      autocomplete="off"
                      required
                    />
                    <label for="password"> نوع خودرو</label>
                  </div>
                </v-col>
              </v-row>

              <v-row
                class="h-25 mt-8 mb-md-10 d-flex mx-5 justify-center align-center row"
              >
                <v-col class="pa-0" cols="12">
                  <div
                    class="box w-100 d-flex justify-space-between align-center"
                  >
                    <div class="bb w-100">
                      <select
                        style="cursor: pointer"
                        class="pr-4 w-100"
                        name="select"
                        id="select"
                        v-model="select"
                      >
                        <option value="" disabled selected>
                          وضعیت قرارداد
                        </option>
                        <option  value="">تمام شده</option>
                        <option  value="">تمدید شده</option>
                        <option  value="">در حال انجام</option>
                      </select>
                    </div>
                    <div>
                      <v-img
                        class="img ml-4"
                        cover
                        :src="require('@/assets/images/arrow.svg')"
                      ></v-img>
                    </div>
                  </div>
                </v-col>
              </v-row>

              <v-row class="mx-5">
                <v-col cols="12" md="4"></v-col>
                <v-col cols="12" md="4"></v-col>
                <v-col
                  class="d-flex justify-space-between align-center"
                  cols="12"
                  md="4"
                >
                  <v-btn class="text-white bg-secondary rounded-lg w-50">
                    مرحله بعد
                  </v-btn>
                  <v-btn class="text-white bg-secondary rounded-lg mr-1 w-50">
                    انصراف
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      select: "",
    };
  },
};
</script>

<style scoped>
p {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
  /* identical to box height, or 125% */

  display: flex;
  align-items: center;
  text-align: right;

  color: #485162;
}
.row {
  padding-right: 5px;
  padding-left: 5px;
  height: 30% !important;
}
.formcontainer {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 30px;
}
.page {
  height: 95vh;
  background-color: #f5f5f5;
  font-family: "DanaFaNum";
}
.box {
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  height: 60px;
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;

  color: #888888 !important;
}
.img {
  width: 10px;
  height: 10px;
}
#select {
  outline: none;
}
.form-item {
  position: relative;
  margin-bottom: 15px;
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
  top: -5px;
}
.form-item input:focus + label {
  color: #888888;
}
</style>