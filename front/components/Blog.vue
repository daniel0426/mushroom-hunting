<template>
  <div class="rounded-md m-12">
    <h3>{{ blog.title }}</h3>
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
        :blog="blog"
        
      >
        <button class="px-3 py-1 bg-gray-400 text-white rounded-lg m-2 text-md cursor-pointer">
          Detail View
          </button>
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
