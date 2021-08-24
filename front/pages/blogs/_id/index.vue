<template>
  <div class="flex flex-col border border-red-500">
    <h2>{{ blog.title }}</h2>
    <h5>
      By {{ blog.author }} on
      {{ new Date(blog.createdAt).toLocaleString("en-NZ") }}
    </h5>
    <img class="w-1/3" :src="blog.imgURL" alt="mushroom-image" />
    <p>{{ blog.details }}</p>
    <div :v-for="tag in blog.tags">
      <!-- <p>{{tag}}</p> -->
    </div>

    <h3>Tags</h3>
    <div class="flex justify-end">
      <nuxt-link
        :to="{ name: 'blogs-id-update', params: { id: blog._id } }"
        :blog="blog"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 text-blue-500 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      </nuxt-link>
      <svg
        @click="handleDelete"
        xmlns="http://www.w3.org/2000/svg"
        class="h-9 w-10 text-red-700 cursor-pointer"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: "blogs-id",

  layout: "app",

  async asyncData({ params }) {
    // here is where you use the
    //     this.$route.param.id
    // to fetch the data from the backend route like this:
    // let id = $route.params.id;
    // const response = await fetch(`http://localhost:4000/blogs/${id}`);
    // this.blog = response.json();
    const response = await fetch(`http://localhost:4000/blogs/${params.id}`);
    const blog = await response.json();
    return { blog };
  },
  methods: {
    //Annabel's code
    handleDelete() {},
  },
};
</script>

<style>
</style>