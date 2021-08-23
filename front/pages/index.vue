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

    <div class="grid gap-2 md:gap-6 grid-cols-1 sm:grid-cols-2 max-w-3xl border border-blue-500">
      <Blog
        v-for="(mushroom, mushroomIndex) in mushrooms"
        :key="mushroomIndex"
        :mushroom="mushroom"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',

  layout: "app",

  computed: {
    tags() {
      return this.mushrooms
        .map((mushroom) => mushroom.tags)
        .reduce((a, b) => a.concat(b), []);
    }
  },

  data() {
    return {
      mushrooms: [
        {
          id: 1,
          title: "muush one",
          url: "https://drive.google.com/uc?export=view&id=1KhIDTZAMQQcA_Xpf5ah5Hc5dSJ9eZ3OC",
          tags: [
            {
              id: 1,
              name: "test tag",
            },
            {
              id: 3,
              name: "test tag",
            },
            {
              id: 10,
              name: "test tag",
            },
          ],
        },
        {
          id: 2,
          title: "muush one",
          url: "https://drive.google.com/uc?export=view&id=14gKQsnIkPQUl5J5wryaWXylB323Xalrc",
          tags: [
            {
              id: 2,
              name: "test tag",
            },
            {
              id: 4,
              name: "test tag",
            },
            {
              id: 8,
              name: "test tag",
            },
          ],
        },
      ],
    };
  },
};
</script>

<style >
.mushroom-list {
  width: 100%;
  /* height: 90vh; */
  background-color: rgba(255, 255, 255, 0.691);

  display: flex;
  justify-content: center;
  overflow: hidden;
}

.action-bar {
  margin-top: 4em;
  display: flex;
  justify-content: space-between;
  font-size: 1.8em;

  color: #20431c;
  margin-bottom: 0.5em;
}

.action-bar button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5em;
  width: 1.5em;
  border-radius: 8px;
  background-color: #add4a4;
  color: #20431c;
}

.i_placholder {
  height: 0.3em;
  width: 0.3em;
  background-color: #20431c;
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>


