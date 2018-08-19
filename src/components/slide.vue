<template>
  <div class="slide">
    <transition-group name="move">
      <div v-for="(item, index) in images" :key="index" v-show="index === current">
        <img class="image" :src="item.path">
      </div>
    </transition-group>
    <div class="bottom">
      <div v-for="(item, index) in images" :key="index" :class="index === current ? 'dot active' : 'dot'"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      images: {
        type: Array,
        default: []
      },
      inv: {
        type: Number,
        default: 2000
      }
    },
    data () {
      return {
        current: 0
      }
    },
    computed: {
      prevIndex () {
        if (this.current === 0) {
          return this.images.length - 1
        } else {
          return this.current - 1
        }
      },
      nextIndex () {
        if (this.current === this.images.length - 1) {
          return 0
        } else {
          return this.current + 1
        }
      }
    },
    methods: {
      goto (index) {
        this.current = index
      },
      runInv () {
        this.invId = setInterval(() => {
          this.goto(this.nextIndex)
        }, this.inv)
      },
      clearInv () {
        clearInterval(this.invId)
      }
    },
    mounted () {
      this.runInv(100, 1)
    }
  }
</script>

<style scoped>
  .slide {
    margin: 0 auto;
    overflow: hidden;
    position: relative;
  }

  .image {
    height: 200px;
    width: 100%;
  }

  .bottom {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    text-align: center;
  }

  .dot {
    display: inline-block;
    margin: 0 5px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #dcdcdc;
  }

  .active {
    background-color: red;
  }

  .move-enter-active {
    transition: all 1s ease;
    transform: translateX(0);
    animation: fade-in 1s;
  }
  .move-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%);
    animation: fade-out 1s;
  }
  .move-enter-to {
    transform: translateX(100%);
  }
  .move-leave-to {
    transform: translateX(0);
  }
  .fade-enter-active, .fade-leave-active {
    transition: opacity 1s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }

</style>
