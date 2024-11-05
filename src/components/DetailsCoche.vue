<template>
  <div>
    <h1>Detalles del coche {{ coche.idCoche }}</h1>
    <router-link to="/">Back to list</router-link>

    <ul class="list-group">
      <li class="list-group-item"><img :src="coche.imagen" alt=""> </li>

      <li class="list-group-item">Nombre: {{ coche.marca }} {{ coche.modelo }}</li>

      <li class="list-group-item">Conductor: {{ coche.conductor }}</li>
    </ul>
  </div>
</template>

<script>
import ServicesCoches from "./../services/ServicesCoches";
const service = new ServicesCoches();

export default {
  name: "DetailsCoche",
  mounted() {
    let id = this.$route.params.id;

    service.findCoche(id).then((result) => {
      this.coche = result;
    });
  },
  data() {
    return {
      coche: {},
    };
  },
};
</script>

<style>

</style>