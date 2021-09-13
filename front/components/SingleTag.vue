<template>
  <button
    type="button"
    :class="{
      'bg-gray-300': !selected,
      'bg-fungi-files-light-green': selected
    }"
    class="
      px-4
      py-2
      text-fungi-files-dark-green
      rounded-3xl
      m-2
      text-md
      transition duration-150
    "
    @click="$emit('click')"
  >
    {{ tag }}
  </button>
</template>

<script>
export default {
  props: {
    tag: String,
    selected: {
      type: Boolean,
      default: () => true,
    },
  },
};
</script>

<style>
</style>