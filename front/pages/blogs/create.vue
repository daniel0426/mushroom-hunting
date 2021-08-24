<template>
  <div>
    <h1 class="text-center text-2xl uppercase ">Create Blog</h1>

    <form class="add-form" @submit.prevent="handleSubmit" action="">
      <label for="title"> Title:</label>
      <input type="text" name="title" v-model="title" required />

      <label for="author"> Author:</label>
      <input type="text" name="author" v-model="author" required />

      <label for="image-url"> Image URL: </label>
      <input type="text" name="image-url" v-model="url" required />

      <label for="description"> Description:</label>
      <textarea name="description" reqired v-model="details" required> </textarea>
      
      <label> Tags:</label>

    <input type="text" v-model="tempTag" @keyup.alt="addTag"> 

    <div  v-for="tag in tags"  :key="tag" class="pill">
        <p @click="deleteTag(tag)" >{{tag}}</p>
    </div>

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
      url: "",
      author: "",
      tempTag: "",
      tags:[]
    };
  },
 
 
 methods: {


   addTag(e){

     if(e.key==="," && this.tempTag){
       
       if(!this.tags.includes(this.tempTag)){
         this.tags.push(this.tempTag)
       }
        this.tempTag=""
      }
     },

   deleteTag(tag){
     this.tags=this.tags.filter((item) =>{
       return tag !== item;
     })
   },



    
    handleSubmit() {
      let blog = {
        title: this.title,
        details: this.details,
        url: this.url,
        author: this.author,
        tags: this.tags
        
      };
      fetch("http://localhost:4000/blogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog),
      }).then(()=> {
        this.$router.push('/')
      });

        this.$emit('addedPost')
    },

  },
};

</script>

<style>
.pill{
    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: rgb(132, 204, 114);
    border-radius: 20px;
    font-size: 12px;
    letter-spacing: 1px;
    font-weight: bold;
    color: rgb(0, 0, 0);
    cursor: pointer;
}
.add-form {
  background: white;
  padding: 20px;
  border-radius: 10px;
  margin-top: 2em;
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