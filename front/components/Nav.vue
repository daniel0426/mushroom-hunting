<template>
  <div class="head">
    <div class="brand-box">
      <img class="logo" src="images/mushroom_logo.png" alt="" />
      <h1>Fungi Files</h1>
    </div>

    <div class="menu">
      <div class="menu-button" @click="openMenu()">open menu</div>

      <div class="menu-list" v-if="menu">
        <nuxt-link to="/">Home</nuxt-link>
        <nuxt-link to="/about">About</nuxt-link>
        <nuxt-link to="/contact">Contact</nuxt-link>
        <nuxt-link to="/posts/create">Add</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: false,
    };
  },

  methods: {
    openMenu() {
      this.menu = !this.menu;
    },
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
  font-weight: 600;
}
.head {
  display: flex;
  width: 100%;
  justify-content: space-between;
  background-color: rgb(255, 255, 255);
  height: 5em;

  align-items: center;
  padding: 0.8em 1.5em;
  filter: drop-shadow(1px 10px 4px #03331536);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}

.menu-list {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 0;
  top: 0;
  background-color: rgb(255, 255, 255);
  width: 70%;
  font-size: 2em;
  color: rgb(8, 37, 13);
  padding: 1em 1.3em;

  background-color: rgba(255, 255, 255, 0.6);

  backdrop-filter: blur(5px);
}

.logo {
  height: 100%;
  margin-right: 1em;
}

.brand-box {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 1000;
  font-size: 1.3em;
  color: #20431c;
}
</style>