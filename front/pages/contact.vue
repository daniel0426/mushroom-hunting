<template>
  <div class="">
    <h1>Contact</h1>
     <form action="">
       <div class="name-inputs">
          <label for="firstname">First Name</label>
          <input type="text" id="first-name" name="firstname" placeholder="Jane">

          <label for="surname">Last Name</label>
          <input type="text" id="surname" name="surname" placeholder="Doe">
    </div>



    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="example@eg.com">



    <label for="subject">How can we help you?</label>
    <textarea id="subject" name="subject" placeholder="Type your message here..." style="height:200px"></textarea>

    <input type="submit" value="Submit">

  </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  layout: "app",
};
</script>

<style>
.name-inputs {
}

</style>