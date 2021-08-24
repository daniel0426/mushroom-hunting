<template>
  <div class="">
    <h1 class="text-center text-2xl uppercase mb-2">Contact</h1>
     <form action="" @submit.prevent="contactSubmit">
       <div class="name-inputs">
          <label for="firstname">First Name</label>
          <input type="text" id="first-name" name="firstname" placeholder="Jane" required>

          <label for="surname">Last Name</label>
          <input type="text" id="surname" name="surname" placeholder="Doe" required>
      </div>
        <label for="email">Email</label>
        <input type="text" id="email" name="email" placeholder="example@eg.com" required>
          <label for="subject">How can we help you?</label>
        <textarea id="subject" name="subject" placeholder="Type your message here..." style="height:200px" required></textarea>

        <input type="submit" value="Submit" class=" bg-green-600 cursor-pointer rounded hover:bg-green-500 transition  duration-500 ease-in-out " >
      </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  layout: "app",

 methods: {
   contactSubmit(){
     this.$router.push('/');
   }
 } 
  
};
</script>

<style>


</style>