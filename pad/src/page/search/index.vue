<template>
  <div class="searchBox">
    <div class="navleft">
      <NavLeft />
    </div>
    <div class="box">
      <div class="input">
        <img class="searchImg" src="../../assets/image/search@2x.png" alt />
        <input type="text" v-model="keyword" placeholder="请输入患者姓名" @keyup.enter="search" />
        <img class="photoImg" src="../../assets/image/phot@2x.png" alt @click="scan" />
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
          />
        </div>
      </div>
      <div class="card" v-if="list.length===0 && !isFirst">
        <div class="mainer">
          <img src="../../assets/image/kong@2x.png" alt />
          <div>没有数据哦~</div>
        </div>
        <div class="foot">
          <button @click="addPatient">新增患者</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavLeft from "@/component/navLeft";
import VisitorCard from "@/component/visitorCard";
import * as bll from "../../utils/business";

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
          visitTime: n.nextDate,
          deviceId: n.deviceCate
          // todo
          // 两个handle
        };
      });
    }
  },
  mounted() {},
  methods: {
    async search() {
      let encodeKeyword = encodeURIComponent(this.keyword);
      let { data } = await bll.search(encodeKeyword);
      console.log(data);
      this.list = data;
      this.isFirst = false;
    },
    scan() {},
    addPatient() {
      this.$router.push("/newPatient");
    }
  }
};
</script>

<style lang="less">
@base: 1rem;
.searchBox {
  font-size: @base / 2;
  display: flex;
  justify-content: flex-start;
  .navleft {
    width: 100px;
  }
  .box {
    padding: 100px 50px 0;
    width: 100%;
    box-shadow: 1px 1px 5px #888888;
    .input {
      display: flex;
      justify-content: center;
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
        top: @base*0.4;
      }
      .photoImg {
        position: relative;
        left: -@base*1.3;
        top: @base*0.4;
      }
    }
    .list {
      .title {
        margin-top: 50px;
      }
    }
    .card {
      .mainer {
        height: @base*10;
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