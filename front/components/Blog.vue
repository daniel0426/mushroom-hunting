<template>
  <div class="rounded-md ">
    <h3>{{ blog.title }}</h3>
    <!-- <p>By {{blog.author}} on {{new Date(blog.createdAt).toLocaleString("en-NZ")}}</p> -->
    <img
      class="object-cover w-full h-full rounded-lg"
      :src="blog.imgURL"
      alt="post image"
    />
    <div class="flex flex-row w-full justify-between z-10">
        <SingleTag v-for="(tag, index) in blog.tags" :key="index" :tag="tag" />

      <nuxt-link
        :to="{
          name: 'blogs-id',
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
