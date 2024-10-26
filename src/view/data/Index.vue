<template>
  数据检测
    <virtual-scroller v-for="item in items" :key="item.id" :size="100">
      <div>{{ item.content }}</div>
    </virtual-scroller>

  </template>
   
  <script>
  import { ref } from 'vue';
   
  export default {
    setup() {
      const items = ref([]);
       
      // 模拟加载列表数据
      for (let i = 0; i < 10000; i++) {
        items.value.push({
          id: i,
          content: `Item ${i}`,
        });
      }
   
      return {
        items,
      };
    },
  };
  </script>
  <style lang="sass" scoped>
  
  </style>