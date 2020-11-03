<template>
  <div v-if="list != null" class="viewinfo">
    <scroll ref="scroll">
      <p>
      <h2 class="titleStyle">剧目视频</h2>
      <video-player  class="video-player vjs-custom-skin"
                     ref="videoPlayer"
                     :playsinline="true"
                     :options="playerOptions"
      ></video-player>
      </p>
      <div class="listinfo">
        <h2 class="titleStyle">剧目介绍</h2>
        <p>
          剧目类型：{{ list.reportoire.m_type }}
        </p>
        <p>
          剧目题材：{{ list.reportoire.m_characteristic }}
        </p>
        <p>
          剧目特点：{{ list.reportoire.m_theme }}
        </p>
        <p>
          剧中角色：{{ list.reportoire.m_role }}
        </p>
        <p>
          剧目受众：{{ list.reportoire.m_audience }}
        </p>
        <p>
          演出幕数：{{ list.reportoire.m_number }}
        </p>
        <p>
          剧目时长：{{ list.reportoire.m_time }}
        </p>
        <p>
          演出团队{{ list.reportoire.m_team }}
        </p>
        <p><h2 class="titleStyle">剧目概况：</h2></p>
        <p>
          <span>  {{list.overview}}</span>
        </p>
        <p>
        <h2 class="titleStyle">主题思想：{{ list.subject.theme_title }}</h2>
        <p>
          {{list.subject.theme_content}}
        </p>
        </p>
        <p>
        <h2 class="titleStyle">剧目特点：</h2>
        </p>
        <p>{{list.characteristics}}</p>
        <p>
        <h2 class="titleStyle">剧照欣赏：</h2>
        </p>
        <div class="infoImage">
          <div v-for="item in list.images">
            <img  :src="item" alt="" @load="loadImage" :key="item">
          </div>
        </div>
      </div>
    </scroll>

  </div>
</template>

<script>
import {get} from "@/network/request";
import {videoPlayer} from 'vue-video-player'
import 'video.js/dist/video-js.css'
import Scroll from "components/common/scroll/Scroll"


export default {
  name: "Viewinfo",
  data() {
    return {
      id : this.$route.query.id,
      list : null,
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: "video/test.mp4",  // 路径
          type: 'video/mp4'  // 类型
        }, {
          src: '//path/to/video.webm',
          type: 'video/webm'
        }],
        poster: "image/zhu01.png", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
      },
      // listImage: [
      //     "http://www.bjtongyilingxiu.com/static/index/images/001.png",
      //   "http://www.bjtongyilingxiu.com/static/index/images/002.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/003.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/004.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/005.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/006.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/007.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/008.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/009.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/010.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/baixuegongzhu1.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/baixuegongzhu2.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/baixuegongzhu3.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/baixuegongzhu4.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/baixuegongzhu5.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/baixuegongzhu6.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/baixuegongzhu7.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/baixuegongzhu8.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/chouxiaoya.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/chouxiaoya2.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/chouxiaoya3.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/chouxiaoya4.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/chouxiaoya5.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/chouxiaoya6.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/chouxiaoya7.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/chouxiaoya8.jpg",
      //   "http://www.bjtongyilingxiu.com/static/index/images/chouxiaoya9.jpg",
      // ],
      timer: null
    }
  },
  components: {
    videoPlayer,
    Scroll,
  },
  created() {
    get("/api/view",{
      "id": this.id
    }
    ).then(res => {
      this.list = res.data[0]
      console.log(this.list);
      this.list.subject = eval('(' + this.list.subject + ')');
      this.list.reportoire = eval('(' + this.list.reportoire + ')');
      this.list.introduction = eval('(' + this.list.introduction + ')');
      this.list.images = this.list.images.split('+');
    }).catch(err => {
      console.log(err);
    })
  },
  methods: {
    loadImage() {
      const loadImages = this.debunceTest(this.$refs.scroll.refresh, 1000);
      loadImages()
    },
    debunceTest(func, delay) {
      return () => {
        if(this.timer){
          clearTimeout(this.timer);
          this.timer = null;
        }
        this.timer = setTimeout(() => {
          func.apply(this)
        },delay)
      }
    },
  }
}
</script>

<style>
.viewinfo {
  background-color: #fff;
  height: 100vh;
  position: relative;
  z-index: 40;
}
.video-js .vjs-big-play-button {
  top: 40%;
  left: 40%;
}
.listinfo {
  margin: auto;
  line-height: 40px;
}
.titleStyle {
  font-weight:900;
  text-shadow:1px 1px 0px black,-1px -1px 0px black;
  margin: 20px 0px;
}
.infoImage {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.infoImage img {
  flex: 1;
  margin: 7px;
  width: 90%;
}
</style>
