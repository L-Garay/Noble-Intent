<template>
  <div class="container-fluid" id="about">
    <div class="row image">
      <div class="col-12">
        <h1>This could be your mission statement or core values</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1>This is the About page.</h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>
.image {
  background-image: url("../assets/backgrounds/hills.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100vw;
  height: calc(50vh - 116px);
  align-items: center;
}
.image h1 {
  font-family: "Simonetta", cursive;
  font-size: 3.5rem;
  text-shadow: 0 0 8px black;
  color: rgb(253, 186, 20);
}
</style>
