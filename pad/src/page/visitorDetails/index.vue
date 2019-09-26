<template>
  <div class="visitorDetailsBox">
    <div class="head">
      <div @click="getBack()">
        <img src="../../assets/image/back.png" alt />
      </div>
      <p>{{name}}</p>
      <div @click="gotoAdd">
        <img src="../../assets/image/zengjia@2x.png" alt />
      </div>
    </div>
    <div class="nextTime">
      下次随访：
      <span>{{nextDate}}</span>
    </div>
    <div class="content">
      <VisitorDetailCard
        v-for="(item,index) in list"
        :key="index"
        :doctorName="item.doctor.name"
        :batteryStatus="item.visit.batteryStatus"
        :events="item.visit.events"
        :deviceNo="item.visit.deviceNo"
        :date="item.visit.date"
        @on-goto="gotoDetail(item.visit.id)"
      />
    </div>
  </div>
</template>

<script>
import * as bll from "../../utils/business";
import VisitorDetailCard from "@/component/visitorDetailCard";

export default {
  name: "visitorDetails",
  components: { VisitorDetailCard },
  data() {
    return {
      // 患者名字
      name: "",
      // 下次随访时间
      nextDate: "",
      // 随访列表
      list: []
    };
  },
  watch: {
    $route: function() {
      this.query();
    }
  },
  methods: {
    gotoDetail(id) {
      this.$router.push({
        path: "/followUpContent",
        query: { id: id }
      });
    },
    getBack() {
      this.$router.push({ path: "visitors", query: { id: 1 } });
    },
    gotoAdd() {
      this.$router.push({
        path: "/newAdd",
        query: {
          id: this.$route.query.id,
          name: this.$route.query.name
        }
      });
    },
    async query() {
      let query = this.$route.query;
      if (!query || !query.name || query.id === undefined) {
        return;
      }
      this.name = query.name;

      let patientId = query.id;
      try {
        let { data } = await bll.patientVisitsSchedule(patientId);
        console.log(data);
        this.nextDate = data.nextDate;
        this.list = data.visits;
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    }
  },
  beforeUpdate() {
    console.log("666");
  },
  async mounted() {
    this.query();
  }
};
</script>

<style lang="less" scoped>
@base: 1rem;
.visitorDetailsBox {
  .head {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    div {
      width: 5%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 25px;
        height: 25px;
      }
    }
    p {
      width: 90%;
      font-size: @base / 2;
      text-align: center;
      margin: 0;
      line-height: 50px;
    }
  }
  .nextTime {
    font-size: @base / 2.5;
    padding: 0 @base;
    span {
      font-size: @base / 3;
      color: rgb(18, 159, 259);
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 @base / 2;
  }
}
</style>