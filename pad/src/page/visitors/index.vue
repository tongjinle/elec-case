<template>
  <div class="visitors">
    <div class="head">
      <div @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>随访列表</p>
      <div></div>
    </div>
    <div class="content">
      <VisitorCard
        v-for="(item,index) in fullList"
        :key="index"
        :doctorName="item.doctorName"
        :patientName="item.patientName"
        :visitTime="item.visitTime"
        :deviceId="item.deviceId"
      />
    </div>
  </div>
</template>

<script>
import VisitorCard from "@/component/visitorCard";
import * as bll from "../../utils/business";

export default {
  name: "visitors",
  components: { VisitorCard },
  data() {
    return {
      list: []
    };
  },
  computed: {
    fullList() {
      return this.list.map(n => {
        console.log(n);
        return {
          doctorName: n.doctorName,
          patientName: n.patientName,
          visitTime: n.nextDate,
          deviceId: n.deviceCate
          // todo
          // 两个handle
        };
      });
    }
  },
  methods: {
    getBack() {
      this.$router.back(-1);
    }
  },
  async mounted() {
    try {
      let { data } = await bll.visitsSchedule(1);
      this.list = data;
    } catch (e) {}
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.visitors {
  .head {
    display: flex;
    justify-content: flex-start;
    div {
      width: 10%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
      }
    }
    p {
      width: 80%;
      font-size: @base / 2;
      text-align: center;
      margin: 0;
      line-height: 50px;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
  }
}
</style>