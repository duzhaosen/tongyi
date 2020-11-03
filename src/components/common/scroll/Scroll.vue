<template>
  <div class="warpper" ref="warpper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: "Scroll",
  props:{
    probeType : {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      scroll : null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.warpper, {
        probeType: this.probeType,
        pullUpLoad: true
    })
    console.log(this.probeType);
    if(this.probeType != 0){
      //监听滚动的位置
      this.scroll.on('scroll',(position) => {
        console.log(position);
      })
    }
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    }
  }
}
</script>

<style scoped>
  .warpper {
    overflow-y: scroll;
    height: calc(100%);
  }
  .content {
    background-color: #fff;
    padding: 20px;
  }
</style>
