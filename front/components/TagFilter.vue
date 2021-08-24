<template>
  <div class="">
    <h2 class="">Filter by:</h2>
    <div class="flex flex-wrap">
      <button
        class="
          p-3
          bg-fungi-files-light-green
          text-fungi-files-dark-green
          rounded-lg
          m-2
          text-xs
        "
        v-for="(tag, index) in tags"
        :key="index"
      >
        {{ tag }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "TagFilter",

  props: {
    tags: Array,
  },
};
</script>

<style>
</style>