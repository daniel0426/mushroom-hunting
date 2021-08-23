<template>
  <div class="rounded-md ">
    <h3>{{ blog.title }}</h3>
    <img
      class="object-cover w-full h-full"
      :src="blog.imgURL"
      alt="post image"
    />
    <div class="flex flex-row w-full justify-between z-10">
      <ul class="mr-30">
        <li v-for="tag in blog.tags" :key="tag.id">
          <h3>{{ tag }}</h3>
        </li>
      </ul>

      <nuxt-link
        :to="{
          name: 'posts-id',
          params: {
            id: blog._id,
          },
        }"
      >
        Detail View
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    blog: Object,
  },
};
</script>

<style>
</style>
