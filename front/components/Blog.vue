<template>
  <div
    class="
      rounded-md
      shadow-lg
      hover:shadow-xl
      overflow-hidden
      transition
      duration-150
    "
  >
    <div class="flex items-center -mb-14">
      <img
        class="h-96 w-full mx-auto object-cover"
        :src="blog.imgURL"
        alt="post image"
      />
    </div>
    <div class="flex flex-row flex-wrap">
      <SingleTag v-for="(tag, index) in blog.tags" :key="index" :tag="tag" />
    </div>
    <div class="flex flex-row w-full justify-between items-center z-10 p-2">
      <h3 class="ml-2 text-fungi-files-dark-green font-semibold">{{ blog.title }}</h3>

<<<<<<< HEAD
      <nuxt-link
      
        :to="{
          name: 'blogs-id',
          params: {
            id: blog._id,
          },
        }"
        :blog="blog"
        
=======
      <button
        type="button"
        class="
          px-3
          py-1
          bg-gray-400
          hover
          text-white
          rounded-lg
          m-2
          text-md
          cursor-pointer
        "
        @click="
          $router.push({
            name: 'blogs-id',
            params: {
              id: blog._id,
            },
          })
        "
>>>>>>> 19bf60fcd36553f8cf5ccc95ab35dadeabc09a84
      >
        Detail View
      </button>
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
