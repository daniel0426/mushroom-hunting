<template>
  <button
    class="
      p-3
      bg-fungi-files-light-green
      text-fungi-files-dark-green
      rounded-lg
      m-2
      text-lg
    "
  >
    {{ tag }}
  </button>
</template>

<script>
export default {
    props: {
        tag: String,
    }
};
</script>

<style>
</style>