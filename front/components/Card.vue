<template>
  <div class="rounded-md h-1/2  overflow-hidden">
    Title: Description: Tags:
    {{ mushroom }} --
    <img class="object-cover w-full h-full" :src="mushroom.url" alt="post image" />
    <div class="absolute">
      <div class="tag-list">

        
        <ul>
          <li v-for="tag in mushroom.tags" :key="tag.id">{{ tag.name }}</li>
        </ul>


      </div>
      <a href="">See Detail</a>
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
    'mushroom': Object
  },

  data() {
    return {
      postArray: [],
    };
  },

  methods: {
    async getPosts() {
      this.postArray = [];
      const response = await fetch("http://localhost:4000/");
      const data = await response.json();
      console.log(data);
      // this.postArray = ;
    },
  },
};
</script>

<style>
/* .card-container {
  margin-top: 2em;
    background-color:grey;
    width:100%;
    background-image: url("https://picsum.photos/id/1025/600/400");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center ;
   
    /* border: solid 2px black; *
    border-radius:1em;
}

.post-image {
  border-radius: 0.5em;
  width: 10%;
  height: 10%;
  /* border: thin green solid; *
}

.detail-bar {
  background-color: rgba(255, 255, 255, 0.3);
  display: flex;
  justify-content: space-between;
  height: 15%;
  backdrop-filter: blur(1em);
}

ul {
  display: flex;
  flex-direction: row;
} */
</style>
