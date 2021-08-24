<template>
  <div class="flex w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-10 max-w-5xl mx-auto">
      <img class="rounded-lg w-full" :src="blog.imgURL" alt="mushroom-image" />
      <div class="space-y-4">
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
        <div class="flex">
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
            @click = "confirmDelete"
            xmlns="http://www.w3.org/2000/svg"
            class="h-9 w-10  text-red-600 cursor-pointer"
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
    </div>
  </div>
</template>

<script>
export default {
  
  data(){
    return {
    }
  },
  name: "blogs-id",
  layout: "app",
  
  async asyncData({ params }) {

    const response = await fetch(`http://localhost:4000/blogs/${params.id}`,
    );
    const blog = await response.json();
    return {blog};
  },
  
  methods: {
    confirmDelete() {
      let answerToDelete = confirm("Are you sure you want to delete?");
      if(answerToDelete){
        this.handleDelete()
      } 

    },
    async handleDelete(){
      
    
      
    }

  },
};
</script>

<style>
</style>