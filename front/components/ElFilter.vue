<template>
    <div class="filter">

        <h2>Filter by</h2>
      <div class="list">
        <button> Tag One </button>
        <button> Tag One </button>
        <button> Tag One </button>
        <button> Tag One </button>
      </div>

    </div>
  
</template>

<script>
export default {

}
</script>

<style>


.filter{
  display: flex;
  justify-content:space-between;
  width: 100%;
  width: 100%;

}


.filter button{
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.5em;
  width: 5em;
  background-color: #ADD4A4;
  color: #20431C;
  border-radius: 1em;
  
}

.list{
  display: flex;
}

.list button{
  margin-left: 1em;
}
</style>