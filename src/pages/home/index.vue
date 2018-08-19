<template>
  <div>
    <swiper indicator-dots="true" autoplay="true" circular="true" indicator-active-color="#4cadf0" interval="3000" duration="600">
      <block v-for="(item, index) in images" :key="index">
        <swiper-item>
          <image :src="item.path" class="image slide-image"/>
        </swiper-item>
      </block>
    </swiper>

    <div class="navbar">
      <text v-for="(item, index) in navbar" :key="index" :class="index === currentTab ? 'item active':'item'" :data-idx="index" @tap="onChanged">{{item.name}}</text>
    </div>

    <scroll-view class="scroll-view_H" scroll-x style="width: 100%; height: 100%;">
      <div style="height: 50px;">dasdasdasds</div>
      <div style="height: 50px;">dasdasdasds</div>
      <div style="height: 50px;">dasdasdasds</div>
      <div style="height: 50px;">dasdasdasds</div>
      <div style="height: 50px;">dasdasdasds</div>
      <div style="height: 50px;">dasdasdasds</div>
      <div style="height: 50px;">dasdasdasds</div>
      <div style="height: 50px;">dasdasdasds</div>
      <div style="height: 50px;">dasdasdasds</div>
    </scroll-view>
  </div>
</template>

<script>
import card from '@/components/card'
import {mapGetters, mapActions} from 'vuex'

export default {
  data () {
    return {
      current: 1,
      currentTab: 0,
      images: [
        {path: 'http://sg-dd.oss-cn-hangzhou.aliyuncs.com/4-1533882678341.jpeg'},
        {path: 'http://sg-dd.oss-cn-hangzhou.aliyuncs.com/1-1533786689015.jpeg'},
        {path: 'http://sg-dd.oss-cn-hangzhou.aliyuncs.com/2-1533786671620.jpeg'},
        {path: 'http://sg-dd.oss-cn-hangzhou.aliyuncs.com/3-1533786650193.jpeg'}
      ],
      navbar: [
        {name: '最新'},
        {name: '主推商品'},
        {name: '主推商品'},
        {name: '主推陈列'}
      ]
    }
  },

  components: {
    card
  },
  methods: {
    ...mapActions([
      'getCases'
    ]),
    onChanged (e) {
      this.currentTab = e.currentTarget.dataset.idx
    }
  },
  computed: {
    ...mapGetters([
      'cases'
    ])
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.$store.dispatch('getCases')
  }
}
</script>

<style scoped>
  .images-box {
    height: 200px;
  }
  .image {
    height: 200px;
    width: 100%;
  }

  .navbar{
    flex: none;
    display: flex;
    background: #fff;
  }
  .navbar .item{
    position: relative;
    flex: auto;
    text-align: center;
    font-size: 16px;
    line-height: 40px;
  }
  .navbar .item.active{
    color: #4183f2;
  }
  .navbar .item.active:after {
    content: "";
    display: block;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #4183f2;
  }
</style>
