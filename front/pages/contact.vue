<template>
  <div class="">
    <h1 class="text-center text-2xl uppercase mb-2">Contact</h1>
     <form action="" @submit.prevent="contactSubmit" id="app" @submit="checkForm" method="post" novalidate="true">
       <div class="name-inputs">
          <label for="firstname">First Name</label>
          <input type="text" id="first-name" name="firstname" placeholder="Jane" v-model="firstname" >


          <label for="surname">Last Name</label>
          <input type="text" id="surname" name="surname" placeholder="Doe" v-model="surname" >
    </div>

    <label for="email">Email</label>
    <input type="text" id="email" name="email" placeholder="example@eg.com" required v-model="email">

    <label for="subject">How can we help you?</label>
    <textarea id="subject" name="subject" placeholder="Type your message here..." style="height:200px" required></textarea>

     <p v-if="errors.length">
      <ul>
        <li v-for="error in errors" :key="error.message" >{{error.message}}</li>
      </ul>
    </p>

    <input type="submit" value="Submit" class=" bg-green-600 cursor-pointer rounded hover:bg-green-500 transition  duration-500 ease-in-out ">

    </form>
  </div>
</template>

<script>
export default {
  name: "Contact",
  layout: "app",

  data (){
    return {
      errors:[],
      firstname: null,
      surname: null,
      email: null
    }

  },
  methods:{

      contactSubmit(){
     this.$router.push('/');
      },

    checkForm: function(e){
      this.errors = [];
      if (!this.firstName(this.firstname))
      {
        this.errors.push({message:'Please provide your first name'});
      } else
      if (this.errors.length>0)return true;
      e.preventDefault();

      if (!this.surName(this.surname))
      {
        this.errors.push({message:'Please provide your last name'});
      } else
      if (this.errors.length>0)return true;
      e.preventDefault();

      if (!this.validEmail(this.email))
       {
        this.errors.push({message:'Please provide a valid email address'});
      } else
      if (this.errors.length>0)return true;
      e.preventDefault();
    },
    validEmail: function (email) {
      var re = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/
      return re.test(email);
    },
    firstName: function (firstname){
      var re = /^[A-Za-z]+$/
      return re.test(firstname);
    },
    surName: function (surname){
      var re = /^[A-Za-z]+$/
      return re.test(surname);
    }
  }
  };
</script>

<style>


</style>