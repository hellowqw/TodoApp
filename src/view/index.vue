<template>
  <div>
    <el-container>
      <el-header height='50px'>
        <div class="header">
          <div class="logo">Blacker</div>
        </div>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu default-active="/home" :router='true' @open="handleOpen" @close="handleClose">
            <el-menu-item index="/home">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="/collect">
              <i class="el-icon-star-off"></i>
              <span slot="title">收藏</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-main>
          <div>
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$router.push("/home");
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style scoped lang='stylus'>
@import '../assets/css/mixin.stylus'
// 侧边导航栏宽
slider-width = 120px
.el-header
  position fixed
  top 0
  left 0
  width 100%
  background $main
  color #fff
  z-index 2
  .header
    display flex
    height 100%
    .logo
      display flex
      align-items center
      font-size 20px
      padding-bottom 2px
.el-aside
  width slider-width !important
  position fixed
  left 0
  top 40px
  bottom 0
  .el-menu
    padding-top 20px
    height 100%
.el-main
  width 100%
  margin-left slider-width + 20px
  margin-top 50px
  padding 0
</style>
