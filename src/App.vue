
<template>
 
    <p> {{ name }}</p> 
    <p> {{ age }}</p>   
    
</template>

<script>
export default {
  data(){
    return {
      name: 'Hello World',
      age :  21

    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
