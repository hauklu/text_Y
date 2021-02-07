<template>
  <div class="mobile-home">
    <img
      v-if="myname_count >= 4"
      :class="myname_count === 5 ? 'img-bear_animation':''"
      :src="img_bear"
      class="img-bear"
    >
    <div
      :class="myname_class"
      class="myname"
      @click="myname_stop ? handleMyname() : handleMyname_()"
    >
      <div>{{ myname }}</div>
      <div
        v-if="!myname_stop"
        class="myname_stop"
      >{{ myname_stop_data  }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      myname: '我是江小源',
      myname_count: 0,
      myname_class: '',
      myname_stop: true,
      myname_stop_data: '',
      img_bear: require('../assets/img/bear.png'),
      img_bear_opacity: 0
    }
  },
  methods: {
    handleMyname() {
      if (this.myname_count >= 5) {
      } else {
        this.myname_count += 1
      }
      switch (this.myname_count) {
        case 1:
          this.myname = '不, 我是江源'
          break
        case 2:
          this.myname = '不不, 我是源小宝'
          this.myname_class = 'myname_class2'
          // this.myname_stop = false
          // clearTimeout(timer)
          // var timer = setTimeout(() => {
          //   this.myname_stop = true
          //   clearTimeout(timer)
          // }, 2000);
          break
        case 3:
          this.myname = 'nono, 我是一只胖江小源'
          this.myname_class = 'myname_class3'
          this.myname_stop = false
          var timer = setTimeout(() => {
            this.myname_stop = true
            clearTimeout(timer)
          }, 6000)
          break
        case 5:
          this.myname = `可是,可是, 我还是只想做一只可爱的江小源`
          this.myname_class = 'myname_class4'
          // var timer = setInterval(() => {
          //   this.img_bear_opacity += 1 / 40
          //   if (this.img_bear_opacity >= 1) {
          //     clearTimeout(timer)
          //   }
          // }, 100)
          break
        default:
          break
      }
    },
    handleMyname_() {
      this.myname_stop_data = '我, 江小源, 正在变成江大源, 不要点我!'
    }
  }
}
</script>

<style scoped>
.mobile-home {
  position: relative;
  width: 100%;
  /* background: red; */
}

.img-bear {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 200px;
  opacity: 0;
}

.img-bear_animation {
  position: relative;
  /* left: 0;
  right: 0;
  transform: translateX(-50%); */
  opacity: 1;
  width: 50px;
  margin: 100px auto -100px;
  transition: all 7s;
}

.myname {
  position: relative;
  display: block;
  width: 200px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  /* margin: 100px auto 0; */
  margin: auto;
  margin: 100px auto 0;
  border: 1px solid #333;
}

.myname_stop {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  margin: 0 auto;
}

.myname_stop:active {
  font-size: 20px;
  color: red;
}

.myname_class2 {
  transform: translate3d(0, 100px, 0);
  transition: all 2s;
}

.myname_class3 {
  color: yellow;
  width: 400px;
  height: 400px;
  line-height: 400px;
  border-radius: 50%;
  /* font-size: 30px; */
  transform: scale(1.5) rotate(360deg);
  transition: all 6s;
}

.myname_class4 {
  display: flex;
  align-items: center;
  text-align: center;
  padding: 10px;
  box-sizing: border-box;
  color: gray;
  border: 1px solid #ccc;
  width: 180px;
  height: 180px;
  font-size: 12px;
  /* line-height: 200px; */
  border-radius: 50%;
  /* font-size: 30px; */
  transform: scale(1);
  /* margin-top: 50px; */
  transition: all 6s;
}

.myname_class3_:active {
}
</style>
