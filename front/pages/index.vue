<template>
<div class="body">

  
  
  
    
  <Nav/>

  <div class="action-bar">

    
      <h1>Recent Posts</h1>
     
      <button> <div class="i_placholder"></div> </button>
      
  </div>

  <ElFilter/>
  



  
  <div class="mushroom-list" v-for="mushroom in mushrooms" :key="mushroom">

    <Card />

  </div>

  <Foot/>
  
  </div>
</template>

<script>


export default {

  data(){
    return{
      mushrooms:[
        {
          title: "muush one"
        },
        {
          title: "muush one"
        }
      ]
    }
  }

}
</script>

<style >

.body{
  height: 100vh;
  width: 100vw;
  background-color: rgb(255, 255, 255);
  padding:1.3em;
  
}

.mushroom-list{
  width: 100%;
  /* height: 90vh; */
  background-color: rgba(255, 255, 255, 0.691);
  
  display:flex;
  justify-content: center;
  overflow: hidden;
  
}

.action-bar{
  margin-top:4em;
  display: flex;
  justify-content: space-between;
  font-size:1.8em;
  
  color: #20431C;
  margin-bottom: 0.5em;
}

.action-bar button{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5em;
  width: 1.5em;
  border-radius: 8px;
  background-color: #ADD4A4;
  color: #20431C;
  
}

.i_placholder{
  height: 0.3em;
  width: 0.3em;
  background-color:#20431C;
}

button{
  display: flex;
  justify-content:center;
  align-items: center;
}




</style>


