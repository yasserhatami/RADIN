<template>
  <div class="wrapper w-100 d-flex justify-center align-center">
    <div class="w-100 mx-4">
      <router-link
        class="libox w-100 d-flex justify-start my-3 align-center"
        v-for="item in lists"
        :key="item.link"
        :to="item.link"
      >
        <p class="mr-2 w-100 h-100">{{ item.text }}</p>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lists: [
        {
          text: "داشبورد",
          link: ""
        },
        {
          text : "ثبت فیش",
          link : ""
        },
        {
          text: "ثبت قرارداد",
          link: "/ContractList"
        },
        {
          text : "تمدید قرارداد",
          link : ""
        },
        {
          text : "جستجو قرارداد",
          link : ""
        },
        {
          text : "تسویه قرارداد",
          link : ""
        },
        {
          text : "تحویل خودرو",
          link : ""
        },
        {
          text : "پروفایل",
          link : ""
        },
        {
          text : "درخواست مرخصی",
          link : ""
        },
        {
          text : "خروج از حساب",
          link : ""
        }
      ]
    };
  }
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
  color: aliceblue;
  cursor: pointer;
}
.libox:hover {
  background-color: #272b33;
}
</style>