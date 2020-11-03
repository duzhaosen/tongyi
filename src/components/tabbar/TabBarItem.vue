<template>
  <div :style="isActiveColor" @click="Click" >
    <Col span="6"><slot></slot></Col>
  </div>

</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    }
  },
  data() {
    return {
      // isActive:false,
    }
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1
    },
    isActiveColor() {
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  methods:{
    Click(){
      this.$router.push({'path':this.path,query:{}})
    }
  }
}
</script>

<style scoped>
</style>
