<template>
  <v-container class="mt-6" fluid>
    <v-row class="mx-1">
      <v-col class="bg-red" cols="12" sm="7" order="2">
        
      </v-col>

      <v-col class="bg-green order-sm-last flex-column justify-center align-center" cols="12" sm="5" order="1">
        <div class="d-flex justify-center align-center  w-100">
          <managermessage />
        </div>
        <div class="d-flex justify-center align-center">
          list of duty
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import managermessage from '@/components/DashbordFolder/DashboardContent/messageOfManager.vue'
export default {
  name: "DashbordComponent",
  components :{
    managermessage
  }
};
</script>

<style>
</style>