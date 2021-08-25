<template>
  <div
    class="flex w-full h-20 justify-between items-center px-6 shadow-b shadow-md p-4"
  >
   <nuxt-link to="/">
      <div class="flex justify-center items-center space-x-4 ">     
          <img class="h-16" src="@/static/images/mushroom_logo.png" alt="page logo" />
          <h1 class="text-xl font-semibold text-fungi-files-dark-green">Fungi Files</h1>
      </div>
    </nuxt-link>

    <div v-click-outside="hide">
      <button class="focus:outline-none" @click="openMenu()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 fill-current text-fungi-files-dark-green"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div class="menu-list font-semibold text-fungi-files-dark-green" v-if="menu">
        <nuxt-link @click.native="openMenu()" to="/">Home</nuxt-link>
        <nuxt-link @click.native="openMenu()" to="/about">About</nuxt-link>
        <nuxt-link @click.native="openMenu()" to="/contact">Contact</nuxt-link>
        <nuxt-link @click.native="openMenu()" to="/blogs/create">Add</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>

import ClickOutside from 'vue-click-outside'

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
    hide () {
      this.menu = false
    }
  },


  directives: {
    ClickOutside
  }
  
};
</script>

<style>
.menu-list {
  z-index: 100;
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
</style>