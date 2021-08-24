<template>
<div>
    <div>this is the id edit page</div>
    <p>{{blog.title}}</p>
    </div>
</template>

<script>
export default {
 props: {
    blog: Object,
  },
    name : "blogs-id-update",
    layout: "app",
  
}

</script>

<style>

</style>