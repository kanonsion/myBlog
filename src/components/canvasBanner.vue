<template>
  <div class="banner" ref="banner">
    <canvas ref="canvas" id="canvas"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      circle: {},
      pos: {}
    };
  },
  methods: {
    init() {
      let banner = this.$refs.banner;
      let canvas = document.getElementById('canvas');
      banner.style.height = 500 + 'px';
      canvas.style.height = 500 + 'px';
      this.circle.width = banner.offsetWidth;
      canvas.style.width = this.circle.width + 'px';
      this.circle.height = 500;
      this.circle.ctx = canvas;
      this.circle.circles = [];
      console.log(this.circle);
      for (let i = 0; i < this.circle.width * 0.5; i++) {
        this.circle.circles.push(i);
      }
      this.animate();
    },
    animate() {
      let { width, height, ctx, circles } = this.circle;
      ctx.clearRect(0, 0, width, height);
      // eslint-disable-next-line no-unused-vars
      for (let i in circles) {
        this.initDraw();
      }
      requestAnimationFrame(this.animate());
    },
    initDraw() {
      this.pos.x = Math.random() * this.circle.width;
      this.pos.y = this.circle.height + Math.random() * 100;
      this.pos.alpha = 0.1 + Math.random() * 0.3;
      this.pos.scale = 0.1 + Math.random() * 0.3;
      this.pos.velocity = Math.random();
      this.draw();
    },
    draw() {
      let { x, y, velocity, scale, alpha } = this.pos;
      let { ctx } = this.circle;
      y -= velocity;
      alpha -= 0.0005;
      ctx.beginPath();
      ctx.arc(x, y, scale * 10, 0, 2 * Math.PI, false);
      ctx.fillStyle = 'rgba(255,255,255,' + alpha + ')';
      ctx.fill();
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  background: #333;
  overflow: hidden;
  background-size: cover;
  background-position: center center;
  z-index: 1;
}
</style>
