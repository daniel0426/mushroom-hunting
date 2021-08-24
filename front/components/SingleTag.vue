<template>
  <button
    class="
      px-3
      py-1
      bg-fungi-files-light-green
      text-fungi-files-dark-green
      rounded-lg
      m-2
      text-md
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