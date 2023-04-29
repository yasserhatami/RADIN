<template>
  <div>
    <div class="w-100 mt-10 b">
      <card />
      <listofside />
    </div>
  </div>
</template>

<script>
import card from "@/components/DashbordFolder/sidebar/card.vue";
import listofside from "@/components/DashbordFolder/sidebar/listOfSide.vue";
export default {
  name: "SidebarComponent",
  components: {
    card,
    listofside,
  },
};
</script>

<style scoped>
</style>