<template class="">
  <div class="">
    <h1 class="text-center text-2xl uppercase ">Update Blog</h1>
     <form class="update-form sm:w-5/6" @submit.prevent="handleUpdate" action="">
      <label for="title"> Title:</label>
      <input type="text" name="title" v-model="title" required />

      <label for="author"> Author:</label>
      <input type="text" name="author" v-model="author" required />

      <label for="imgURL"> Image URL: </label>
      <input type="text" name="imgURL" v-model="imgURL" required />

      <label for="description"> Description:</label>
      <textarea name="description" reqired v-model="details" required> </textarea>

      <label for="Tags">Tags:</label>

      <select v-model="tempTag" name="tags" id="tags" @click="addTag">
        <option value="" disabled selected>Select your Tags</option>
        <option value="Blue">Blue</option>
        <option value="Red">Red</option>
        <option value="Poisonous">Poisonous</option>
        <option value="Fun">Fun</option>
      </select>
      <div  v-for="tag in tags"  :key="tag" class="pill">
          <p @click="deleteTag(tag)" >{{tag}}</p>
      </div>
      <button class="bg-fungi-files-light-green hover:bg-green-600" @click="handleUpdate">Update Mushroom</button>
    </form>
  </div>
</template>

<script>
export default {

   name : "blogs-id-update",
  layout: "app",
  
  data() {
    return {
      title: "",
      author: "",
      details: "",
      imgURL: "",
      tempTag: "",
      tags:[],
      
    };
  },
   mounted(){
     console.log
    this.title = this.blog.title;
    this.author = this.blog.author;
    this.details= this.blog.details;
    this.tags = this.blog.tags;
    this.imgURL = this.blog.imgURL;
   },
    async asyncData({ params }) {

          const response = await fetch(`http://localhost:4000/blogs/${params.id}/`,
          );
          const blog = await response.json();
          
          return {blog}
        },
   
    methods : {
        async handleUpdate(){
          const updateBlog = {
            title: this.title,
            author: this.author,
            details: this.details,
            imgURL: this.imgURL,
            tags: this.tags
             
        }
        console.log(updateBlog);
         await fetch(`http://localhost:4000/blogs/${this.blog._id}`, {
            method: "PATCH", 
            headers : {  
              "Content-Type": "application/json"
            },
             body: JSON.stringify(updateBlog),
          }).then((res)=> {
             if(res.status===200){

               this.$router.push('/')
             }  
          })
        },

      addTag(){

        if( this.tempTag){
          
          if(!this.tags.includes(this.tempTag)){
            this.tags.push(this.tempTag)
          }
            
          }
      },

      deleteTag(tag){
        this.tags=this.tags.filter((item) =>{
          return tag !== item;
        })
      },
  }
  
  
}

</script>

<style scoped>
select{
  width: 100%;
  height: 3em;
  border: 1px solid #ddd;
}

.pill{

    display: inline-block;
    margin: 20px 10px 0 0;
    padding: 6px 12px;
    background: rgb(132, 204, 114);
    border-radius: 20px;
    
    letter-spacing: 1px;
    
    color: rgb(8, 37, 13);
    cursor: pointer;
    
}
.update-form{
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

form button {
  display: block;
  margin: 20px auto 0;
  
  color: white;
  padding: 10px;
  border: 0;
  border-radius: 6px;
  font-size: 16px;
  width: 100%;
}
</style>