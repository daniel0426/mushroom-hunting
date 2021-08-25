<template>
  <div class="">
    <h2 class="">Filter by:</h2>
    <div class="flex flex-wrap">
      <SingleTag
        v-for="(tag, index) in tags"
        :key="index"
        :tag="tag"
        @click="$emit('filter', tag)"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "TagFilter",

  computed: {
    tags() {
      return this.$store.state.tags.selectableTags;
    },
  },
};
</script>

<style>
</style>