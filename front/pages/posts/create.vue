<template>
  <div>
    <form class="add-form" @submit.prevent="handleSubmit" action="">
      <label for="title"> Title </label>
      <input type="text" name="title" v-model="title" required />

      <label for="image-url"> Image URL: </label>
      <input type="text" name="image-url" v-model="title" required />

      <label for="description"> Description:</label>
      <textarea name="description" reqired v-model="details"> </textarea>

      <button>Add mushroom</button>
    </form>
  </div>
</template>

<script>
export default {
  layout: "app",

  data() {
    return {
      title: "",
      details: "",
    };
  },

  methods: {
    handleSubmit() {
      let mushroom = {
        title: this.title,
        details: this.details,
        complete: false,
      };

      console.log(mushroom.title, mushroom.description);

      fetch("http://localhost:awitingbackend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(mushroom),
      });
    },
  },
};
</script>

<style>
.add-form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 4em;
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

form button {
  display: block;
  margin: 20px auto 0;
  background: rgb(0, 68, 255);
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
}
</style>