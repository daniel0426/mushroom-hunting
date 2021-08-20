<template>
  <div class="card-container">
    Title: Description: Tags:
    <img class="post-image" src="" alt="" />
    <div class="detail-bar">
      <div class="tag-list">
        <ul>
          <li>Tag One</li>
          <li>Tag Two</li>
          <li>Tag Three</li>
        </ul>
      </div>
      <a href="">See Detail</a>
    </div>
  </div>
</template>

<script>
export default {
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
.card-container {
  margin-top: 2em;
  border: thin red solid;
  width: 100%;
  height: 25em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5em;
}

.post-image {
  border-radius: 0.5em;
  width: 10%;
  height: 10%;
  /* border: thin green solid; */
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
}
</style>
