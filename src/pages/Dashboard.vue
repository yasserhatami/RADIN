<template>
  <v-container dir class fluid>
    <v-row class="mx-1">
      <v-col class="flex-column justify-center align-center pa-0 ma-0" cols="12" md="7" order="2">
        <div class="mb-4">
          <chartcomponent />
        </div>

        <div dir="rtl" class>
          <v-row>
            <v-col class="datepicker" cols="12" md="7">
              <datePicker></datePicker>
            </v-col>

            <v-col cols="12" md="5">
              <div class="w-100 h-100">
                <todo></todo>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col
        class="order-first order-md-last flex-column justify-center align-center mb-4 pa-0"
        cols="12"
        md="5"
        order="1"
      >
        <div class="managermessagecontainer">
          <managermessage />
        </div>
        <div class="d-flex justify-center align-center ma-0 pa-0">
          <sixitems />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import datePicker from "@/components/DashbordFolder/DashboardContent/datePicker.vue";
import managermessage from "@/components/DashbordFolder/DashboardContent/messageOfManager.vue";
import sixitems from "@/components/DashbordFolder/DashboardContent/SixItems.vue";
import chartcomponent from "@/components/DashbordFolder/DashboardContent/chartComponent.vue";
import todo from "@/components/DashbordFolder/DashboardContent/toDo.vue";
export default {
  name: "DashbordComponent",
  components: {
    managermessage,
    sixitems,
    chartcomponent,
    todo,
    datePicker
  }
};
</script>

<style scoped>
.datepicker {
  background: #ffffff;
  box-shadow: 2px 2px 8px rgba(157, 157, 157, 0.25);
  border-radius: 30px;
}
</style>