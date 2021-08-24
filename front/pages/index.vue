<template>
  <div class="flex flex-col space-y-6">
    <div class="flex justify-between">
      <h1>Recent Posts</h1>

      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
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

    <TagFilter :tags="tags" />

    <div v-if="blogs" class="grid gap-2 m-12 md:gap-6 grid-cols-1 md:grid-cols-2 max-w-3xl mx-auto">
      <Blog class="my-10"
        v-for="blog in blogs"
        :key="blog._id"
        :blog="blog"
      />
    </div>
    <div v-else>
      <h2 >Loading mushrooms...</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  layout: "app",

  data(){
    return {
      blogs: []
    }
  },

  async fetch (){
    await this.getBlogs()
  },

  computed: {
    tags() {
      return this.blogs
        .map((blog) => blog.tags)
        .reduce((a, b) => a.concat(b), []);
    }
  },

  methods:{
     async getBlogs() {
      const response = await fetch("http://localhost:4000/blogs");
      const data = await response.json();
      this.blogs = data;
    },
  }
}
</script>

<style >

</style>


