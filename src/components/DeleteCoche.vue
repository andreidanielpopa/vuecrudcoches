<template>
  <div>
    <h1>DeleteCohe</h1>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import ServicesCoches from "./../services/ServicesCoches";
const service = new ServicesCoches();
export default {
  name: "DeleteCohe",
  mounted() {
    this.confirmDelete();
  },
  methods: {
    confirmDelete() {
      Swal.fire({
        title: "¿Estás seguro?",
        text: "No podrás revertir esta acción",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Sí, eliminar",
        cancelButtonText: "Cancelar",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteCoche();
        } else {
          this.cancelDelete();
        }
      });
    },
    deleteCoche() {
      let id = this.$route.params.id;

      service.deleteCoche(id).then((result) => {
        console.log(result);
      });
      Swal.fire(
        "¡Eliminado!",
        "El coche ha sido eliminado correctamente.",
        "success",
        this.$router.push("/")
      );
    },
    cancelDelete() {
      console.log("Eliminación cancelada");
      Swal.fire("El borrado ha sido cancelado.", this.$router.push("/"));
    },
  },
};
</script>

<style>
</style>