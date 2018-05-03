<template>
    <div class="page">
        <div class="block">
            <div class="tit">
                今天
            </div>
            <div class="list">
                <ul>
                    <li v-for="i in list" :key="i.id">
                        <el-checkbox v-model="i.done">{{i.content}}</el-checkbox>
                    </li>
                    <li class="add">
                        <i></i>
                        <input type="text">
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          content: "vscode格式化设置 - beautify",
          done: 0
        },
        {
          content: "尝试开始一个开源项目",
          done: 0
        }
      ]
    };
  }
};
</script>

<style scoped lang="stylus">
@import '../../assets/css/mixin.stylus'
.block
    width 300px
    margin 20px 0
    padding 20px
    .tit
        text-align center
        line-height 2.5
        background $blue
        border-radius 6px 6px 0 0
        color #fff
    .list
        padding 6px 0
        border 1px solid $border
        border-top 0
        border-radius 0 0 6px 6px
        li
            padding 3px 6px
        .add
            position relative
            i
                position absolute
                left 50%
                top 0
                width 25px
                height 25px
                transform translateX(-50%)
                &:after, &:before
                    content ''
                    position absolute
                    left 50%
                    top 0
                    height 100%
                    width 3px
                    background $main
                &:before
                    transform rotate(90deg) 
            input
                transform scale(0)
                transition 0.5s
</style>