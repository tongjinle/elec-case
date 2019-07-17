<template>
<div>
  <div>下次随访：2020-01-01</div>
  <div class="visitorsDetails">
    <VisitorDetailCard/>
    <VisitorDetailCard/>
    <VisitorDetailCard/>
    <VisitorDetailCard/>
    <VisitorDetailCard/>
  </div>
</div>
</template>

<script>

import VisitorDetailCard from '@/component/visitorDetailCard';
export default {
  name: 'visitorDetails',
  components: { VisitorDetailCard }
}
</script>

<style> 
  @base: 75rem;
  .visitorsDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>