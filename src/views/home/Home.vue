<template>
  <div>
    <Title>
      <template #title>
        <span>首页</span>
      </template>
    </Title>
  </div>
</template>

<script>
import Vue from 'vue'
import Title from '../../components/Title.vue'
Vue.component('Title', Title)
export default {

}
</script>
