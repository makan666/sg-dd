<template>
  <div>
    <!--<home v-if="current === 'homepage'"/>-->
    <!--<school v-if="current === 'group'"/>-->
    <!--<community v-if="current === 'remind'"/>-->
    <!--<mine v-if="current === 'mine'"/>-->
    <!--<i-tab-bar :current="current" color="#f759ab" @change="handleChange" fixed="true">-->
      <!--<i-tab-bar-item v-for="item in tabs" :key="item.id" :icon="item.default" :current-icon="item.img" :title="item.name"></i-tab-bar-item>-->
    <!--</i-tab-bar>-->
    <view class="btn-area">
      <navigator url="/pages/home/main" open-type="switchTab" hover-class="other-navigator-hover">在当前页打开</navigator>
      <navigator url="/pages/home/main" open-type="switchTab" hover-class="other-navigator-hover">切换 Tab</navigator>
      <navigator url="/pages/home/main" open-type="switchTab" hover-class="other-navigator-hover">打开绑定的小程序</navigator>
    </view>
  </div>
</template>

<script>
import home from '../home'
import school from '../school'
import community from '../community'
import mine from '../mine'

export default {
  data () {
    return {
      motto: 'Hello World',
      current: 'homepage',
      text: 'home',
      userInfo: {},
      tabs: [{
        id: 'homepage',
        name: '资讯',
        default: 'homepage',
        img: 'homepage_fill'
      }, {
        id: 'group',
        name: '学堂',
        default: 'group',
        img: 'group_fill'
      }, {
        id: 'remind',
        name: '社区',
        default: 'remind',
        img: 'remind_fill'
      }, {
        id: 'mine',
        name: '我的',
        default: 'mine',
        img: 'mine_fill'
      }]
    }
  },

  components: {
    home,
    school,
    community,
    mine
  },
  methods: {
    handleChange ({target}) {
      this.current = target.key
      console.log('-----------detail--------------')
      console.log(this.current)
    },
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
