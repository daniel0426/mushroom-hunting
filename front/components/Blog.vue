<template>
  <div class="rounded-md overflow-hidden">
    <h3>{{blog.title}}</h3>
    <img class="object-cover w-full h-full" :src="blog.imgURL" alt="post image" />
    <div class="absolute">
      <div class="blog-summ flex flew-row">
        <ul>
          <li v-for="tag in blog.tags" :key="tag.id">{{ tag.name }}</li>
        </ul>
      </div>

      <button >See Detail</button>
    </div>

  </div>
  <!-- <li class="col-span-1 flex flex-col text-center bg-white">
    <div class="pb-full relative">
      <div class="absolute inset-0 h-full w-full">
        <img class="h-full w-full object-cover object-center" :src="mushroom.url" />
      </div>
    </div>
  </li> -->
</template>

<script>
export default {
  props: {
    'blog': Object
  },
};
</script>

<style>

</style>
