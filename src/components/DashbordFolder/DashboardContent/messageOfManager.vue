<template>
  <div  dir="rtl" class="">
    <v-img
      :src="require('@/assets/images/managerpm.png')"
      class="align-start  img"
      
    >
      <v-card-title class="title mt-3 mr-7"
        >پیام مدیر عامل</v-card-title
      >
      <div class="d-flex align-center justify-center">
        <v-card-text
          class="subtitle d-flex align-center justify-center text-center mx-0 px-0 mt-4 mt-lg-12 w-100 mx-md-12"
        >
          موفقیت تدریجیست...
        </v-card-text>
      </div>
    </v-img>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img{
  border-radius: 30px !important;
}
.title {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  /* identical to box height, or 120% */

  display: flex;
  align-items: center;
  text-align: right;

  color: #ffffff;
}
.subtitle {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 30px;

  text-align: center;
  display: flex;
  align-items: center;
  text-align: center;

  color: #ffffff;
}

</style>