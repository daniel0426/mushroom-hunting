<template class="">
  <div class="sm:w-5/6 md:w-4/6 lg:w-5/12">
    <h1 class="text-center text-2xl uppercase">Update Blog</h1>

    <form class="update-form sm:w-5/6" @submit.prevent="handleUpdate" action="">
      <label for="title"> Title:</label>
      <input type="text" name="title" v-model="title" required />

      <label for="author"> Author:</label>
      <input type="text" name="author" v-model="author" required />

      <label for="imgURL"> Image URL: </label>
      <input type="text" name="imgURL" v-model="imgURL" required />

      <label for="description"> Description:</label>
      <textarea name="description" reqired v-model="details" required>
      </textarea>

      <label for="Tags">Tags:</label>
      <!-- flex-wrap md:flex-nowrap gap-2  -->
      <div class="flex flex-row">
        <SingleTag
          v-for="(tag, index) in selectableTags"
          :key="index"
          :tag="tag"
          :selected="tags.includes(tag)"
          @click="addTag(tag)"
        />
      </div>
      <div class="w-full flex">
        <button
          class="
            my-4
            mx-auto
            bg-fungi-files-light-green
            px-10
            py-2
            text-white
            rounded-lg
          "
          @click="handleUpdate"
        >
          Update Post
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "blogs-id-update",
  layout: "app",
  computed: {
    selectableTags() {
      return this.$store.state.tags.selectableTags;
    },
  },
  data() {
    return {
      title: "",
      author: "",
      details: "",
      imgURL: "",
      tempTag: "",
      tags: [],
    };
  },
  mounted() {
    console.log;
    this.title = this.blog.title;
    this.author = this.blog.author;
    this.details = this.blog.details;
    this.tags = this.blog.tags;
    this.imgURL = this.blog.imgURL;
  },
  async asyncData({ params }) {
    const response = await fetch(`http://localhost:4000/blogs/${params.id}/`);
    const blog = await response.json();

    return { blog };
  },

  methods: {
    async handleUpdate() {
      const updateBlog = {
        title: this.title,
        author: this.author,
        details: this.details,
        imgURL: this.imgURL,
        tempTag: "",
        tags: this.tags,
      };
      console.log(updateBlog);
      await fetch(`http://localhost:4000/blogs/${this.blog._id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateBlog),
      }).then((res) => {
        if (res.status === 200) {
          this.$router.push("/");
        }
      });
    },

    addTag(tag) {
      if (!this.tags.includes(tag)) {
        this.tags.push(tag);
      } else {
        this.deleteTag(tag);
      }
    },

    deleteTag(tag) {
      this.tags = this.tags.filter((item) => {
        return tag !== item;
      });
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

.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: rgb(132, 204, 114);
  border-radius: 20px;

  letter-spacing: 1px;

  color: rgb(8, 37, 13);
  cursor: pointer;
}
.update {
  min-width: 300px;
}
.tagsContainer {
  width: 80%;
}
.update-form {
  background: white;
  padding: 5px;
  border-radius: 10px;
  margin-top: 2em;
  width: 100%;
  min-width: 300px;
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