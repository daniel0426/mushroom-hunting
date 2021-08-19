<template>

<div class="body" >
    <Nav />
    
    <form @submit.prevent="handelSubmit" action="" >
    
        <label for="title"> Title </label>
        <input type="text" name="title" v-model="title" required>
        <label for="details"> Details</label>
        <textarea name="details" reqired v-model="details"> </textarea>
    
        <button>Add project</button>
    </form>

    <Foot />
    
</div>
  
</template>

<script>
export default {

    data(){
        return{
            title:'',
            details:''
        }
    },

    methods: {

        handelSubmit(){
           let project = {
               title: this.title,
               details: this.details,
               complete: false
           }

           console.log(project.title, project.details)
          
           fetch('http://localhost:awitingbackend',{
               method: 'POST',
               headers:{'Content-Type': 'application/json'},
               body: JSON.stringify(project)
        })
        
      }

    }
}

    
</script>

<style>

.body{
    height: 100vh;
    width: 100vw;
}

form{
    background: white;
    padding: 20px;
    border-radius: 10px;

}
label{
    display: block;
    color: #bbb;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: bold;
    letter-spacing: 1px;
    margin: 20px 0 10px 0;
}
input{
    padding: 10px;
    border: 0;
    border-bottom: 1px solid #ddd;
    width: 100%;
}
textarea{
    border: 1px solid #ddd;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
    height: 100px;
}

form button{
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