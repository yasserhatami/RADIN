<template>
  <div>
   <div>
    <dashboardHeader/>
   </div>
    <slot />
  </div>
</template>

<script>
import dashboardHeader from '@/components/DashbordFolder/dashboardHeader.vue';
export default {
    components:{
        dashboardHeader
    }
}
</script>

<style>

</style>