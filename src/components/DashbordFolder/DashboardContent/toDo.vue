<template>
  <div dir="rtl" class="aa pa-3 h-100">
    <div class="h-100">
      <v-row
        class="w-100 h-25 ma-0 pa-0 d-flex justify-space-between align-center"
      >
        <v-col cols="10">
          <p class="text-h6 text-lg-h5">یادداشت های امروز</p>
        </v-col>
        <v-col cols="2">
          <v-icon
            @click="bezan"
            class="bg-red rounded-lg pa-0 ml-2"
            size="x-large"
            icon="mdi-plus"
          ></v-icon>
        </v-col>
      </v-row>
      <v-row class="w-90 d-flex justify-space-between align-center mt-0">
        <v-col class="mt-0 pa-0" cols="12">
          <v-text-field
            class="pa-0"
            v-model="firstname"
            label="یادداشت جدید"
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <br />
      <v-row class="w-100">
        <div v-if="ali" class="w-100 h-50 d-flex justify-space-between align-center">
          <p class="w-100">{{ duty }}</p>

          <v-checkbox class="pa-0"></v-checkbox>
        </div>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstname: "",
      duty: "",
      ali: false,
    };
  },
  methods: {
    bezan() {
      this.ali = true;
      this.duty = this.firstname;
      this.firstname = "";
    },
  },
};
</script>

<style scoped>
p {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 30px;
  /* identical to box height, or 120% */

  display: flex;
  align-items: center;
  text-align: right;

  color: #272b31;
}
.aa {
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(157, 157, 157, 0.25);
  border-radius: 30px;
  height: 100%;
}
.zz {
  width: 85%;
  background-color: aqua;
}
</style>