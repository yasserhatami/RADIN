<template>
  <div class="wrapper w-100 d-flex justify-center align-center">
    <div class="w-100 mx-4">
      <div
        class="libox w-100 d-flex justify-start my-3 align-center"
        v-for="item in lists"
        :key="item.id"
      >
        <p class="mr-2 w-100 h-100">
          {{ item }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        "داشبورد",
        "ثبت فیش",
        "ثبت قرارداد",
        "تمدید قرارداد",
        "جستجو قرارداد",
        "تسویه قرارداد",
        "تحویل خودرو",
        "پروفایل",
        "درخواست مرخصی",
        "خروج از حساب",
      ],
    };
  },
};
</script>

<style scoped>
.wrapper {
  width: 100px;
  margin-top: 20%;
}
.libox {
  height: 50px;
  background-color: #454d5e;
  box-shadow: inset 2px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-family: "DanaFaNum";
  transition: all 1s;
}
p {
  font-family: "DanaFaNum";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 30px;
  cursor: pointer;
}
.libox:hover{
    background-color: #272b33;
    
}
</style>