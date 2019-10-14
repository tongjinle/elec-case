<template>
  <div class="searchBox">
    <div class="navleft">
      <NavLeft />
    </div>
    <div class="box">
      <div class="up">
        <div class="input">
          <img class="searchImg" src="../../assets/image/search@2x.png" alt />
          <input type="text" v-model="keyword" placeholder="请输入患者姓名" @keyup.enter="search" />
          <img class="photoImg" src="../../assets/image/phot@2x.png" alt @click="scan" />
        </div>
        <div class="add" @click="onAdd">新增患者</div>
      </div>
      <div class="list" v-if="list.length!=0">
        <div class="title">患者</div>
        <div class="item">
          <VisitorCard
            v-for="(item,index) in fullList"
            :key="index"
            :doctorName="item.doctorName"
            :patientName="item.patientName"
            :visitTime="item.visitTime"
            :deviceId="item.deviceId"
            :deviceCate="item.deviceCate"
            :addVisitHandle="item.addVisit"
            :viewVisitHandle="item.viewVisit"
            @on-gotoDetails="gotoDetails(item.id)"
          />
        </div>
      </div>
      <div class="card" v-if="list.length===0 && !isFirst">
        <div class="mainer">
          <img src="../../assets/image/kong@2x.png" alt />
          <div>没有数据哦~</div>
        </div>
        <div class="foot">
          <!-- <button @click="addPatient">新增患者</button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLeft from "@/component/navLeft";
import VisitorCard from "@/component/visitorCard";
import * as bll from "../../utils/business";
import * as tool from "../../utils/tool";

export default {
  name: "dropDown",
  components: { NavLeft, VisitorCard },
  data() {
    return {
      isFirst: true,
      keyword: "",
      list: []
    };
  },
  computed: {
    fullList() {
      return this.list.map(n => {
        console.log(n);
        return {
          doctorName: n.doctorName,
          patientName: n.name,
          visitTime: tool.formateTime(n.lastVisitTime),
          deviceId: n.deviceCate,
          deviceCate: n.deviceModel,
          id: n.id,
          // 两个handle
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
  async mounted() {
    let name = this.$route.query.name;
    if (name) {
      this.keyword = name;
      let encodeKeyword = encodeURIComponent(this.keyword);
      try {
        let { data } = await bll.search(encodeKeyword);
        console.log(data);
        this.list = data;
        this.isFirst = false;
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    } else if (!name) {
      if (localStorage.getItem("search")) {
        this.keyword = localStorage.getItem("search");
        this.search();
      }
    }
  },
  methods: {
    gotoDetails(id) {
      console.log(id);
      this.$router.push({ path: "patientMsg", query: { id: id } });
    },
    async search() {
      localStorage.setItem("search", this.keyword);
      let encodeKeyword = encodeURIComponent(this.keyword);
      try {
        let { data } = await bll.search(encodeKeyword);
        console.log(data);
        this.list = data;
        this.isFirst = false;
      } catch (err) {
        if (err.response.data.message == "token非法！") {
          this.$router.push({ path: "login" });
        }
      }
    },
    scan() {},

    addVisit(item) {
      console.log("新增随访", item);
      this.$router.push({
        name: "newAdd",
        query: { id: item.id, name: item.name }
      });
    },
    viewVisit(item) {
      console.log("随访详情", item);
      this.$router.push({
        name: "visitorDetails",
        query: { id: item.id, name: item.name }
      });
    },
    onAdd() {
      this.$router.push({
        name: "newPatient"
      });
      // todo
    },
    addPatient() {
      this.$router.push({
        name: "newPatient"
      });
    }
  }
};
</script>

<style lang="less">
@base: 1rem;
.searchBox {
  font-size: @base / 3;
  display: flex;
  justify-content: flex-start;
  .navleft {
    width: 100px;
  }
  .box {
    padding: 100px 50px 0;
    width: 100%;
    box-shadow: 1px 1px 5px #888888;
    .up {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      .input {
        width: 70%;
        display: flex;
        justify-content: flex-end;
        // align-items: center;
        input {
          width: @base*10;
          padding: 20px 100px;
          border: 0;
          box-shadow: 1px 1px 5px #888888;
          border-radius: @base*2;
        }
        img {
          width: @base / 1.5;
          height: @base / 1.5;
        }
        .searchImg {
          position: relative;
          left: @base*1.3;
          top: @base*0.3;
        }
        .photoImg {
          position: relative;
          left: -@base*1.3;
          top: @base*0.3;
        }
      }
      .add {
        @height: 52px;
        color: #fff;
        background-color: rgb(18, 159, 259);
        border-radius: 5px;
        height: @height;
        line-height: @height;
        padding: 0 20px;
      }
    }
    .list {
      .title {
        margin-top: 50px;
      }
    }
    .card {
      .mainer {
        height: @base*8;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        img {
          width: @base*4;
          height: @base*4;
          margin-bottom: 50px;
        }
      }
      .foot {
        display: flex;
        justify-content: center;
        button {
          background-color: rgb(18, 159, 259);
          color: white;
          border: none;
          width: @base*10;
          padding: 20px 100px;
          border-radius: 10px;
          box-sizing: content-box;
        }
      }
    }
  }
}
</style>