<template>
  <v-container class="container mt-7 pa-0" dir="rtl">
    <v-row class="px-10 px-md-0">
      <v-col cols="12" md="6" class="pa-md-3">
        <v-text-field
          class="h-75"
          variant="outlined"
          label="جست و جو ..."
          append-inner-icon="mdi-magnify"
        ></v-text-field>
      </v-col>

      <v-col class="pa-0 pa-md-3" cols="12" md="3">
        <v-select
          v-model="select"
          item-text="name"
          item-value="last"
          label="وضعیت قرارداد"
          :items="['تمام شده', 'تمدید شده', 'در حال انجام', 'تاخیر خورده','همه قراردادها']"
          variant="outlined"
        ></v-select>
      </v-col>

      <v-col class="pa-0 pa-md-3" cols="12" md="3">
        <v-btn class="btn w-100 h-75">افزودن قراراداد</v-btn>
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
      select: ""
    };
  },
  components: {
    tableComponent
  }
};
</script>
<style >
.btn {
  background: #bfdc36;
  /* border-radius: 10px; */
}
.v-select__selection-text {
  color: black !important;
}
.container {
  font-family: "DanaFaNum";
}
</style>