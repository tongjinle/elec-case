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
        :addVisitHandle="item.addVisit"
        :deviceCate="item.deviceCate"
        :viewVisitHandle="item.viewVisit"
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
          deviceCate: n.deviceModel,
          addVisit: () => {
            this.addVisit(n);
          },
          viewVisit: () => {
            this.viewVisit(n);
          }
        };
      });
    }
  },
  methods: {
    getBack() {
      this.$router.back(-1);
    },
    addVisit(item) {
      console.log("新增随访", item);
      this.$router.push({
        name: "newAdd",
        query: { id: item.patientId, name: item.patientName }
      });
    },
    viewVisit(item) {
      console.log("随访详情", item);
      this.$router.push({
        name: "visitorDetails",
        query: { id: item.patientId, name: item.patientName }
      });
    }
  },
  async mounted() {
    try {
      let id = this.$route.query.id;
      console.log(id);
      let { data } = await bll.visitsSchedule(id);
      this.list = data;
    } catch (err) {
      if (err.response.data.message == "token非法！") {
        this.$router.push({ path: "login" });
      }
    }
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