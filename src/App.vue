<template>
  <div id="app">
    <tab-bar>
      <tab-bar-item path="/list" activeColor="blue">剧目欣赏</tab-bar-item>
      <tab-bar-item path="/category" activeColor="red">公司实力</tab-bar-item>
      <tab-bar-item path="/shopping" activeColor="yellow">合作</tab-bar-item>
      <tab-bar-item path="/my" activeColor="green">我的</tab-bar-item>
    </tab-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from "components/tabbar/TabBar";
import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: 'App',
  components: {
    TabBar,
    TabBarItem
  }
}
</script>
<style lang="scss">
</style>
