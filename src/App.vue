<template>
  <div id="app">
    <keep-alive>
      <router-view
        v-wechat-title="$route.meta.title"
        v-if="$route.meta.keepAlive"
      />
    </keep-alive>
    <router-view
      v-wechat-title="$route.meta.title"
      v-if="!$route.meta.keepAlive"
    />
  </div>
</template>

<script>
export default {
  created () {}
}
</script>

<style lang="less">
@import "~@/assets/styles/variables";

#app {
  color: @color-text;
  font-size: @font-size-normal;
}
</style>
