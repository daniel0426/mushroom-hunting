<template>
  <div class="flex w-full">
    <div
      class="
        flex flex-grow flex-col
        sm:flex-row
        space-4
        md:space-6
        lg:space-x-10
        max-w-5xl
        mx-auto
        justify-between
      "
    >
      <div class="space-y-4 w-1/2">
        <nuxt-link to="/">
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 fill-current text-fungi-files-light-green"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            <h2 class=" px-2 text-fungi-files-light-green">Back to Feed</h2>
          </div>
        </nuxt-link>
        <h2 class="text-xl font-semibold text-fungi-files-dark-green">
          {{ blog.title }}
        </h2>
        <h3 class="text-lg font-semibold text-fungi-files-dark-green">
          By {{ blog.author }} on
          {{ new Date(blog.createdAt).toLocaleString("en-NZ") }}
        </h3>
        <p class="text-md">{{ blog.details }}</p>

        <h3 class="text-lg font-semibold text-fungi-files-dark-green">Tags:</h3>
        <SingleTag v-for="(tag, index) in blog.tags" :key="index" :tag="tag" />
        <div class="flex py-4">
          <nuxt-link
            :to="{ name: 'blogs-id-update', params: { id: blog._id } }"
            
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 text-fungi-files-dark-green cursor-pointer"
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
            @click="confirmDelete(blog._id)"
            xmlns="http://www.w3.org/2000/svg"
            class="h-9 w-10 text-red-600 cursor-pointer"
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
      <img
        class="object-cover rounded-lg w-1/2 shadow-lg hover:shadow-xl"
        :src="blog.imgURL"
        alt="mushroom-image"
      />
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  
  name: "blogs-id",
  layout: "app",
  data(){
    
  },
  async asyncData({ params }) {
    const response = await fetch(`http://localhost:4000/blogs/${params.id}`);
    const blog = await response.json();
    return { blog };
  },

  methods: {
    confirmDelete() {
      let answerToDelete = confirm("Are you sure you want to delete?");
      if (answerToDelete) {
        this.handleDelete();
      }
    },
    async handleDelete() {
      await fetch(`http://localhost:4000/blogs/${this.blog._id}`, {
        method: "DELETE",
      }).then((response) => {
        if (response.status == 200) this.$router.push("/");
      });
    },
    /*<--use this part to add a tick or something that confirms to user that their post has been deleted successfully*/
  },
};
</script>

<style>
</style>