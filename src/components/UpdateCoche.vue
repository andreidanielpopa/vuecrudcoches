<template>
  <div>
    <h1>UpdateCoche</h1>

    <form
      v-on:submit.prevent="updateCoche()"
      style="width: 500px; margin: 0 auto"
    >
      <input type="hidden" v-model="coche.idCoche" />

      <label>Marca</label>
      <input type="text" v-model="coche.marca" class="form-control" />

      <label>Modelo</label>
      <input type="text" v-model="coche.modelo" class="form-control" />

      <label>Conductor</label>
      <input type="text" v-model="coche.conductor" class="form-control" />

      <label>Imagen</label>
      <input type="text" v-model="coche.imagen" class="form-control" />
      <br />
      <button class="btn btn-warning">Update</button>
    </form>
  </div>
</template>

<script>
import ServicesCoches from "./../services/ServicesCoches";
const service = new ServicesCoches();
export default {
  name: "UpdateCoche",
  data() {
    return {
      coche: {},
    };
  },
  mounted() {
    let id = this.$route.params.id;

    service.findCoche(id).then((result) => {
      this.coche = result;
    });
  },
  methods: {
    updateCoche() {
      service.updateCoche(this.coche).then((result) => {
        console.log(result);
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>