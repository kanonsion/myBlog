<template>
  <div class="TagClude">
    <div class="Tags" @mouseenter="enterTags" @mouseleave="leaveTags" @mousemove="moveTags">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      TagCloud: {
        radius: 60, //滚动半径
        direction: 125, //滚动方向
        keep: true, //是否继续滚动
        active: false, //鼠标是否进入
        box: [], //获取最外层dom
        items: [], //初始化的位置
        mouseX: 0,
        mouseY: 0,
        size: 0, //随鼠标滚动变速作用区域
        a: 0,
        b: 0,
        //暂时设置
        mspeed: 3,
        ispeed: 25
      },
      timer: ""
    };
  },
  methods: {
    _getItem() {
      let _this = this,
        element = [],
        items = [],
        item,
        length;
      _this.TagCloud.box = document.querySelectorAll(".Tags");
      //只存在一个dom
      element = _this.TagCloud.box[0].children;
      length = element.length;
      for (let i = 0; i < element.length; i++) {
        item = {};
        item.angle = {};
        item.angle.phi = Math.acos(-1 + (2 * i + 1) / length);
        item.angle.theta = Math.sqrt((length + 1) * Math.PI) * item.angle.phi;
        item.element = element[i];
        item.offsetWidth = item.element.offsetWidth;
        item.offsetHeight = item.element.offsetHeight;
        item.x =
          _this.TagCloud.radius *
          1.5 *
          Math.cos(item.angle.theta) *
          Math.sin(item.angle.phi);
        item.y =
          _this.TagCloud.radius *
          1.5 *
          Math.sin(item.angle.theta) *
          Math.sin(item.angle.phi);
        item.z = _this.TagCloud.radius * 1.5 * Math.cos(item.angle.phi);
        item.element.style.left =
          item.x +
          (_this.TagCloud.box.offsetWidth - item.offsetWidth) / 2 +
          "px";
        item.element.style.top =
          item.y +
          (_this.TagCloud.box.offsetHeight - item.offsetHeight) / 2 +
          "px";
        items.push(item);
      }
      _this.TagCloud.items = items;
    },
    _setUpdate() {
      let _this = this,
        a,
        b;
      a =
        -(
          Math.min(
            Math.max(-_this.TagCloud.mouseY, -_this.TagCloud.size),
            _this.TagCloud.size
          ) / _this.TagCloud.radius
        ) * _this.TagCloud.mspeed;
      b =
        (Math.min(
          Math.max(-_this.TagCloud.mouseX, -_this.TagCloud.size),
          _this.TagCloud.size
        ) /
          _this.TagCloud.radius) *
        _this.TagCloud.mspeed;

      if (Math.abs(a) <= 0.01 && Math.abs(b) <= 0.01) {
        return;
      }

      _this.TagCloud.a = a;
      _this.TagCloud.b = b;

      let sc = this._getSc(a, b);

      for (var i = 0, len = _this.TagCloud.items.length; i < len; i++) {
        var rx1 = _this.TagCloud.items[i].x,
          ry1 =
            _this.TagCloud.items[i].y * sc[1] +
            _this.TagCloud.items[i].z * -sc[0],
          rz1 =
            _this.TagCloud.items[i].y * sc[0] +
            _this.TagCloud.items[i].z * sc[1];

        var rx2 = rx1 * sc[3] + rz1 * sc[2],
          ry2 = ry1,
          rz2 = rz1 * sc[3] - rx1 * sc[2];

        if (_this.TagCloud.index == i) {
          _this.TagCloud.items[i].scale = 1; //取值范围0.6 ~ 3
          _this.TagCloud.items[i].fontsize = 16;
          _this.TagCloud.items[i].alpha = 1;
          _this.TagCloud.items[i].element.style.zIndex = 99;
        } else {
          var per = _this.TagCloud.depth / (_this.TagCloud.depth + rz2);
          _this.TagCloud.items[i].x = rx2;
          _this.TagCloud.items[i].y = ry2;
          _this.TagCloud.items[i].z = rz2;

          _this.TagCloud.items[i].scale = per; //取值范围0.6 ~ 3
          _this.TagCloud.items[i].fontsize =
            Math.ceil(per * 2) + _this.TagCloud.fontsize - 6;
          _this.TagCloud.items[i].alpha = 1.5 * per - 0.5;
          _this.TagCloud.items[i].element.style.zIndex = Math.ceil(
            per * 10 - 5
          );
        }
        _this.TagCloud.items[i].element.style.fontSize =
          _this.TagCloud.items[i].fontsize + "px";
        _this.TagCloud.items[i].element.style.left =
          _this.TagCloud.items[i].x +
          (_this.TagCloud.box[0].offsetWidth -
            _this.TagCloud.items[i].offsetWidth) /
            2 +
          "px";
        _this.TagCloud.items[i].element.style.top =
          _this.TagCloud.items[i].y +
          (_this.TagCloud.box[0].offsetHeight -
            _this.TagCloud.items[i].offsetHeight) /
            2 +
          "px";
        _this.TagCloud.items[i].element.style.filter =
          "alpha(opacity=" + 100 * _this.TagCloud.items[i].alpha + ")";
        _this.TagCloud.items[i].element.style.opacity =
          _this.TagCloud.items[i].alpha;
      }
    },
    _getSc(a, b) {
      let l = Math.PI / 180;
      //数组顺序0,1,2,3表示asin,acos,bsin,bcos
      return [
        Math.sin(a * l),
        Math.cos(a * l),
        Math.sin(b * l),
        Math.cos(b * l)
      ];
    },
    enterTags() {
      this.TagCloud.active = true;
    },
    leaveTags() {
      this._setUpdate()
    },
    moveTags(e) {
      let boxPosition = this.TagCloud.box[0].getBoundingClientRect();
      this.TagCloud.mouseX =
        (e.clientX -
          (boxPosition.left + this.TagCloud.box[0].offsetWidth / 2)) /
        5;
      this.TagCloud.mouseY =
        (e.clientY -
          (boxPosition.top + this.TagCloud.box[0].offsetHeight / 2)) /
        5;
    },
  },
  mounted() {
    this.TagCloud.size = this.TagCloud.radius * 2;
    this.TagCloud.mouseX =
      this.TagCloud.ispeed *
      Math.sin((this.TagCloud.direction * Math.PI) / 180);
    this.TagCloud.mouseY =
      this.TagCloud.ispeed *
      Math.cos((this.TagCloud.direction * Math.PI) / 180);
    setTimeout(() => {
      this._getItem();
      this._setUpdate();
      this.TagCloud.box[0].style.visibility = "visible";
      this.TagCloud.box[0].style.position = "relative";
      this.TagCloud.box[0].style.minHeight = 1.2 * this.TagCloud.size + "px";
      this.TagCloud.box[0].style.minWidth = 1.5 * this.TagCloud.size + "px";
      for (var j = 0, len = this.TagCloud.items.length; j < len; j++) {
        this.TagCloud.items[j].element.style.position = "absolute";
        this.TagCloud.items[j].element.style.zIndex = j + 1;
      }
      this.timer = setInterval(() => {
        this._setUpdate();
      }, 30);
    }, 1500);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="stylus">
.TagClude
  position relative
  a
    position absolute
    left 0
    top 0
    text-decoration none
    display block
    padding 11px 30px
    color #333
    font-size 16px
    border 1px solid #e6e7e8
    border-radius 18px
    background-color #f2f4f8
</style>
