<script setup>
import NavBar from './components/NavBar.vue';
import FooterBar from './components/FooterBar.vue';
</script>

<template>
  <div class="w-screen h-screen bg-white overflow-y-scroll font-sans print:font-serif">
    <NavBar />
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
    <FooterBar />
  </div>
</template>

