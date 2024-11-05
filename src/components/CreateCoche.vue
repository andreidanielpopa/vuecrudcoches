<template>
  <div>
    <h1>CreateCoche</h1>
    <h2 style="color: blue">{{ mensaje }}</h2>

    <form
      v-on:submit.prevent="insertCoche()"
      style="width: 500px; margin: 0 auto"
    >
      <label>Marca</label>
      <input type="text" v-model="coche.marca" class="form-control" />

      <label>Modelo</label>
      <input type="text" v-model="coche.modelo" class="form-control" />

      <label>Conductor</label>
      <input type="text" v-model="coche.conductor" class="form-control" />

      <label>Imagen</label>
      <input type="text" v-model="coche.imagen" class="form-control" />
      <br />
      <button class="btn btn-info">Create</button>
    </form>
  </div>
</template>

<script>
import ServicesCoches from "./../services/ServicesCoches";
const service = new ServicesCoches();
export default {
  name: "CreateCoche",
  data() {
    return {
      mensaje: "",
      coche: {
        idCoche: 922,
        marca: "",
        modelo: "",
        conductor: "",
        imagen: "",
      },
    };
  },
  methods: {
    insertCoche() {
      service.insertCoche(this.coche).then((result) => {
        this.mensaje = "Insertado correctamente" + result;
        this.$router.push("/");
      });
    },
  },
};
</script>

<style>
</style>