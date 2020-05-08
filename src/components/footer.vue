<template>
  <div class="footer">
    <img src="@/assets/images/footer.png" alt="" class="panci" />
    <div class="container"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 100%;
  @include flex(column);
  overflow: hidden;
  .panci {
    margin-bottom: -74px;
    position: relative;
    z-index: 3;
    object-fit: cover;
  }
  .container {
    background-color: #333;
    height: 150px;
    width: 100%;
  }
}
</style>
