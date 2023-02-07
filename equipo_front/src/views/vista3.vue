<template>

<div class="historical">
    <HelloWorld msg="QUIENES SOMOS"/>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue';
import TableHead from '@/components/TableHead.vue';


export default {
  name: 'Vista2',
  //ACÁ SE AGREGAN LAS COMPONENTES QUE VAMOS A UTILIZAR
  components: {
    HelloWorld,
    TableHead,
  },
}
</script>
<style>
</style>