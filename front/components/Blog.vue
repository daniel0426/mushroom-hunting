<template>
  <div class="rounded-md">
    <h3>{{ blog.title }}</h3>
    <div class="flex items-center">
      <img
        class="h-96 w-full mx-auto rounded-lg object-cover"
        :src="blog.imgURL"
        alt="post image"
      />
    </div>
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
        <button
          class="
            px-3
            py-1
            bg-gray-400
            text-white
            rounded-lg
            m-2
            text-md
            cursor-pointer
          "
        >
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
