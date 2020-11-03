<template>
<div class="list">
  <div class="listITem" @click="viewClick(item.id)" v-for="item in list">
    <img v-lazy="item.image" :key="item.image"  alt="item.title">
    <p>{{item.title}}</p>
  </div>
</div>
</template>

<script>
import {get} from "../../network/request.js"
export default {
  name: "list",
  data() {
    return {
      list : null,
      id : 0,
      path : "/viewinfo"
    }
  },
  created() {
    get("/api/list",""
    ).then(res => {
      this.list = res.data
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    viewClick(id)
    {
      this.$router.push({'path':this.path,query:{"id": id}})
    }
  }
}
</script>

<style scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-bottom: 100px;
}
.listITem {
  width: 48%;
  height: 200px;
  margin: 20px 1%;
}
.listITem img {
  width : 100%;
  height: 100%;
}
</style>
