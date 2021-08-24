<template>
  <div class="">
    <h2 class="">Filter by:</h2>
    <div class="flex flex-wrap">
      <SingleTag
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag"
      />
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