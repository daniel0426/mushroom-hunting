<template>
  <div
    class="
      rounded-md
      shadow-lg
      hover:shadow-xl
      overflow-hidden
      transition
      duration-150
      flex flex-col
      justify-between
    "
  >
    <div class="flex items-center -mb-12">
      <img
        class="h-96 w-full mx-auto object-cover"
        :src="blog.imgURL"
        alt="post image"
      />
    </div>
    <div class="h-28 flex flex-col justify-end">
      <div class="flex flex-row flex-wrap">
        <SingleTag v-for="(tag, index) in blog.tags" :key="index" :tag="tag" />
      </div>
      <div class="flex flex-row w-full justify-between items-center z-10 p-2">
        <h3 class="ml-2 text-fungi-files-dark-green font-semibold">{{ blog.title }}</h3>

        <button
          type="button"
          class="
            px-3
            py-1
            bg-fungi-files-light-green
            hover
            text-fungi-files-dark-green
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
        >
          Detail View
        </button>
      </div>
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
