<template>
  <v-card>
    <v-layout>
      <v-navigation-drawer
        dir="rtl"
        width="300"
        color="primary"
        v-model="flag"
        location="right"
        temporary
      >
        <sidebarcomponent />
      </v-navigation-drawer>

      <v-app-bar class="pt-0 ccc" color="primary" :elevation="2">
        <div class="h-100 w-100 d-flex align-center justify-space-between">
          <div class="d-flex align-center h-100">
            <p class="px-3">Radinkhodro</p>
            <div class="bg-secondary d-flex align-center px-3 h-100">
              <DtaeAndTimeComponent />
            </div>
          </div>

          <div class="d-flex align-center h-100">
            <div class="d-flex align-center h-100">
              <v-icon
                @click="flag = true"
                color="success"
                icon="mdi-menu-left"
                size="xx-large"
              ></v-icon>
            </div>
            <v-img
              style="width: 60px"
              class="img sss m-r8 pr-3"
              :src="require('@/assets/images/Ellipse 1.png')"
            ></v-img>
          </div>
        </div>
      </v-app-bar>

      <v-main style="min-height: 300px">
        <slot> </slot>
      </v-main>
    </v-layout>
  </v-card>
</template>

<script>
import DtaeAndTimeComponent from "@/components/DashbordFolder/date/DateAndTime.vue";
import Sidebarcomponent from "@/components/DashbordFolder/sidebar/sidebarComponent.vue";
export default {
  data() {
    return {
      flag: false,
    };
  },
  components: {
    DtaeAndTimeComponent,
    Sidebarcomponent,
  },
};
</script>

<style>
p {
  font-family: "DanaFaNum" !important;
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 36px;
}
</style>