<template>
  <div class="flex flex-col space-y-6 mb-8">
    <!-- <TagFilter @filter="filterBlogs" /> this is for when we implement the filtering functionality -->

    <div class="flex justify-between">
      <h1 class="text-2xl text-fungi-files-dark-green font-semibold">
        Recent Posts:
      </h1>

      <nuxt-link to="/blogs/create" class="flex flex-row">
        <h2
          class="
            text-fungi-files-dark-green
            font-semibold
            self-center
            pr-2
            text-2xl
          "
        >
          New Post
        </h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-fungi-files-dark-green"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>
      </nuxt-link>
    </div>

    <TagFilter />

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
        pb-10
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

  async asyncData() {
    // do the fetch and response handling here
    const response = await fetch("http://localhost:4000/blogs");
    const blogs = await response.json();
    // remove the async fetch, data, and getBlog stuff
    return { blogs };
  },

  methods: {
    // async filterBlogs(tag) {
    //   // filter the blogs
    // }
  },
};
</script>

<style >
</style>


