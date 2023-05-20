<template>
  <date-picker
    class="main-datepicker  w-100 h-100"
    v-model="date"
    :inline="true"
  />
</template>

<script>
import VuePersianDatetimePicker from "vue3-persian-datetime-picker";
export default {
  components: {
    datePicker: VuePersianDatetimePicker,
  },
};
</script>

<style lang="scss">
.vpd-content {
  width: 100%;
}
.vpd-day {
  background-color: white;
  border-radius: 50%;
  /* margin: 5px; */
  width: 40px;
  height: 40px;

  border: 1px solid #D9D9D9;
  display: flex; 
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
//   &:nth-child(odd) {
    
//   }
//   &:nth-child(even) {
//     margin-right: 0rem;
//   }
}
.vpd-day-effect{
    
}
.vpd-days {
    display: flex;
    justify-content: center;
    height: 288px !important;
}
.vpd-day-text {
  color: #485162;
  font-size: 20px;
  display: flex; 
  justify-content: center;
  align-items: center;
  text-align: center;
}
.vpd-day-effect {
  height: 50px;
  width: 50px;
}
.vpd-day-text span {
  /* padding: 20px; */
}
.vpd-day-effect {
  background-color: #bfdc36 !important;
  width: 100%;
  height: 100%;
}
.main-datepicker .vpd-input-group,
.vpd-header,
.vpd-week {
  display: none;
}
.vpd-actions {
  display: none;
}
.vpd-month-label {
  color: black;
  font-size: 30px;
  height: 36px !important;
}
.vpd-month-label {
  width: 200px;
  height: 150px;
}
</style>