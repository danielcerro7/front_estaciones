<template>
<!-- EN EL TEMPLATE SE AGREGA TODO EL CÓDIGO HTML CONTENIDO EN LAS ETIQUETAS 
RESPECTIVAS DEL COMPONENTE DE LA RESPECTIVA VISTA EN ESTE CASO EL <thead></thead>-->
    <thead>
        <tr>
            <!-- ASÍ IMPRIMIMOS UN ARRAY CON INFORMACIÓN DEL PROPS -->
            <th v-for="msg in msgs" :key="msg">{{ msg }}</th>
        </tr>
    </thead>
</template>
<script>
// ASÍ ES COMO RECIBIMOS LOS DATOS EN DE UN COMPONENTE parenthesizedExpression, EN ESTE CASO LA VISTA1
export default {
  name: 'TableHead',
  props: {
    msgs: {
        type: Array,
        required: true, 
    }
  }
}
</script>
<style>
/* ACÁ SE HACEN LOS ESTILOS GLOBALES PARA CADA VISTA O COMPONENTE */
thead {
  display: table-header-group;
  vertical-align: middle;
  border-color: inherit;
  background-color: greenyellow;
}

</style>
