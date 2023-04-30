<template>
  <v-container class="mt-6" fluid>
    <v-row class="mx-1">
      <v-col class="bg-red" cols="12" sm="7" order="2"> 
        <v-row>
          
        </v-row>

        <v-row>
          datepicker & note
        </v-row>
      </v-col>

      <v-col
        class="order-sm-last flex-column justify-center align-center ma-0 pa-0"
        cols="12"
        sm="5"
        order="1"
      >
        <div class="d-flex justify-center align-center">
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
import managermessage from "@/components/DashbordFolder/DashboardContent/messageOfManager.vue";
import sixitems from "@/components/DashbordFolder/DashboardContent/SixItems.vue";
export default {
  name: "DashbordComponent",
  components: {
    managermessage,
    sixitems,
  },
};
</script>

<style>
</style>