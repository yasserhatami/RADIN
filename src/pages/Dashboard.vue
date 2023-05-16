<template>
  <v-container dir="" class="mt-2" fluid>
    <v-row class="mx-1 bg-red">
      <v-col
        class="flex-column justify-center align-center pa-0 ma-0"
        cols="12"
        sm="7"
        order="2"
      >
        <div class="h-50 bg-green">
          <chartcomponent />
        </div>

        <div dir="rtl" class="">
          <v-row>
            <v-col cols="12" sm="7">
              
              <datePicker></datePicker>
            </v-col>

            <v-col cols="12" sm="5">
              <div class="w-100 h-100 ">
                <todo></todo>
              </div>
            </v-col>
          </v-row>
        </div>
      </v-col>

      <v-col
        class="order-sm-last flex-column justify-center align-center ma-0 pa-0"
        cols="12"
        sm="5"
        order="1"
      >
        <div class="h-50 bg-green">
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
import datePicker from "@/components/DashbordFolder/DashboardContent/datePicker.vue"
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
  },
  data(){
    return{
      date : ''
    }
  }
};
</script>

<style>

</style>