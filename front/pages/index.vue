<template>
  <div class="flex flex-col space-y-6">
    <TagFilter />
    <!-- <TagFilter @filter="filterBlogs" /> this is for when we implement the filtering functionality -->

    <div class="flex justify-between">
      <h1 class="text-2xl text-fungi-files-dark-green font-semibold">
        Recent Posts:
      </h1>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 fill-current text-fungi-files-dark-green"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div
      v-if="blogs"
      class="
        grid
        gap-6
        md:gap-12
        grid-cols-1
        md:grid-cols-2
        max-w-4xl
        mx-auto
      "
    >
      <Blog class="" v-for="blog in blogs" :key="blog._id" :blog="blog" />
    </div>
    <div v-else>
      <h2>Loading mushrooms...</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  layout: "app",

  data() {
    return {
      blogs: [],
    };
  },

  async fetch() {
    await this.getBlogs();
  },

  methods: {
    async getBlogs() {
      const response = await fetch("http://localhost:4000/blogs");
      const data = await response.json();
      this.blogs = data;
    },
    // async filterBlogs(tag) {
    //   // filter the blogs
    // }
  },
};
</script>

<style >
</style>


