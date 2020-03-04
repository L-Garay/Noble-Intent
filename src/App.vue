<template>
  <div id="app">
    <div id="nav">
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="#">Logo here</a>
        <button
          class="navbar-toggler custom-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-grip-lines"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Services</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <router-link to="/group-therapy" class="dropdown-item">Group Therapy</router-link>
                <router-link to="/parents" class="dropdown-item">Parent Education Groups</router-link>
                <router-link to="/training" class="dropdown-item">Training and Consultation</router-link>
                <router-link to="/clinical" class="dropdown-item">Clinical Supervision</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">About Us</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact" class="nav-link">Contact</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <router-view />
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* Styling the Navbar */
#nav {
  padding: 30px;
  background-color: rgb(24, 57, 98);
  background-image: radial-gradient(
    circle at top left,
    rgb(24, 57, 98),
    rgb(131, 196, 66)
  );
  /* box-shadow: 0 5px 5px black; */
}
#nav a {
  font-weight: bold;
  color: rgb(253, 186, 20);
  /* color: white; */
  margin: 0 5pt 0 0;
  text-shadow: 0 0 3px black;
}
#nav a:hover {
  text-shadow: 0 0 4px rgb(110, 110, 110);
}
#nav a.router-link-exact-active {
  /* color: rgb(253, 186, 20); */
  /* color: rgb(131, 196, 66); */
  color: white;
  background-color: rgb(131, 196, 66);
  border-radius: 5%;
}
button.navbar-toggler {
  border-color: rgb(24, 57, 98);
  color: rgb(253, 186, 20);
}

/* Styling dropdown items */
.dropdown-menu {
  background-color: rgb(24, 57, 98);
  border: 2pt solid grey;
  box-shadow: 3px 3px 4px black;
}
</style>
