<template>
  <div>
    <h1>CochesComponent</h1>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Coche</th>
          <th>Conductor</th>
          <th>Detalles</th>
          <th>Modificar</th>
          <th>Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="coche in coches" :key="coche">
          <td><img :src="coche.imagen" alt="" /></td>
          <td>{{ coche.marca }} {{ coche.modelo }}</td>
          <td>{{ coche.conductor }}</td>
          <td>
            <router-link class="btn btn-info" :to="'/details/' + coche.idCoche"
              >Detalles</router-link
            >
          </td>
          <td>
            <router-link
              class="btn btn-warning"
              :to="'/update/' + coche.idCoche"
              >Modificar</router-link
            >
          </td>
          <td>
            <router-link class="btn btn-danger" :to="'/delete/' + coche.idCoche"
              >Eliminar</router-link
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServicesCoches from "./../services/ServicesCoches";
const service = new ServicesCoches();
export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    service.getCoches().then((result) => {
      this.coches = result;
    });
  },
};
</script>

<style>
img {
  height: 150px;
  width: 200px;
}
</style>