<template>
  <v-card>
    <v-layout>
      <v-container fluid class="ma-0 pa-0 col">
        <v-row class="w-100 h-100">
            <v-col class="ma-0 pa-0 w-100 ">
                <div class="w-100 h-100 d-flex justify-space-between align-center bg-black">
                    <div class="h-100 w-25 ">
                        <div class="h-100 bg-green a">

                        </div>

                        <div class="h-100 bg-red a">

                        </div>
                    </div>
                    <v-btn class="h-100" color="primary" @click.stop="drawer = !drawer"> Toggle </v-btn>
                </div>
            </v-col>
        </v-row>
      </v-container>

      
    </v-layout>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
    };
  },
};
</script>

<style>

.col{
     height: 100px;
}

</style>