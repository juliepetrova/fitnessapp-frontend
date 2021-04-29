<template>
  <div id="app" class="background min-h-screen">
    <Nav/>
    <router-view></router-view>
<!--    <Foot class="mt-16"/>-->
  </div>
</template>

<script>
import Nav from './components/layout/Nav'
export default {
  name: 'App',
  components: {
    Nav,

  }
}
</script>

<style>

</style>
