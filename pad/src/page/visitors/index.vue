<template>
  <div class="visitors">
    <VisitorCard/>
    <VisitorCard/>
    <VisitorCard/>
    <VisitorCard/>
    <VisitorCard/>
  </div>

</template>

<script>

import VisitorCard from '@/component/visitorCard';
export default {
  name: 'visitors',
  components: { VisitorCard }
}
</script>

<style> 
  @base: 75rem;
  .visitors {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>