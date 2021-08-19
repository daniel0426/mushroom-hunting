<template>
<div class="body">
  
    
  <Nav/>
  
  
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
}

.mushroom-list{
  width: 100%;
  height: 90vh;
  background-color: rgba(255, 255, 255, 0.691);
  
  display:flex;
  justify-content: center;
  overflow: hidden;
  
}



</style>


