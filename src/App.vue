<script setup>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <div class="w-screen h-screen flex flex-col bg-white overflow-y-scroll">
    <NavBar />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <FooterBar />
  </div>
</template>

