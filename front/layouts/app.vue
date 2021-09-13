<template>
  <div class="h-screen flex flex-col">
    <Nav />

    <div class="flex flex-grow overflow-y-auto px-10 md:px-4 py-8 h-full">
      <nuxt class="md:max-w-7xl mx-auto h-full" />
    </div>

    <Foot />
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>