<template>
  <div class="outer page sm:w-5/6 md:4/6">
    <h1 class="text-center text-2xl uppercase">Create Blog</h1>

    <form class="add-form" @submit.prevent="handleSubmit" action="">
      <label for="title"> Title:</label>
      <input type="text" name="title" v-model="title" required />

      <label for="author"> Author:</label>
      <input type="text" name="author" v-model="author" required />

      <label for="image-url"> Image URL: </label>
      <input type="text" name="image-url" v-model="url" required />

      <label for="description"> Description:</label>
      <textarea name="description" reqired v-model="details" required>
      </textarea>

      <label for="Tags">Select Tags:</label>

      <div class="flex flex-row">
        <SingleTag
          v-for="(tag, index) in selectableTags"
          :key="index"
          :tag="tag"
          :selected="tags.includes(tag)"
          @click="addTag(tag)"
        />
      </div>

      <button
        class="mt-4 w-full bg-fungi-files-light-green p-2 text-white rounded-lg"
      >
        Add mushroom
      </button>
    </form>
  </div>
</template>

<script>
export default {
  layout: "app",

  computed: {
    selectableTags() {
      return this.$store.state.tags.selectableTags;
    },
  },

  data() {
    return {
      title: "",
      details: "",
      url: "",
      author: "",
      tempTag: "",
      tags: [],
    };
  },

  methods: {
    addTag(tag) {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag);
      } else {
        this.deleteTag(tag)
      }
    },

    deleteTag(tag) {
      this.tags = this.tags.filter((item) => {
        return tag !== item;
      });
    },

    handleSubmit() {
      let blog = {
        title: this.title,
        details: this.details,
        url: this.url,
        author: this.author,
        tags: this.tags,
      };

      fetch("http://localhost:4000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(() => {
        this.$router.push("/");
      });

      this.$emit("addedPost");
    },
  },
};
</script>

<style scoped>
select {
  width: 100%;
  height: 3em;
  border: 1px solid #ddd;
}
.outer {
  width: 50%;
}
.add-form {
  background: white;
  width: 100%;
}
form {
  width: 100%;
}

label {
  display: block;
  color: #bbb;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1px;
  margin: 20px 0 10px 0;
}
input {
  padding: 10px;
  border: 0;
  border-bottom: 1px solid #ddd;
  width: 100%;
}
textarea {
  border: 1px solid #ddd;
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
  height: 100px;
}
</style>