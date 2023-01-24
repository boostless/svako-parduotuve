<script setup>
import PageHeader from '../components/PageHeader.vue';
import BlogPost from '../components/BlogPost.vue';
</script>

<template>
    <div class="w-full min-h-screen px-8 sm:px-16 md:px-32 pb-24 bg-purple-50">
        <PageHeader route="false" title="Naujienos" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <main class="grid grid-cols-4 justify-between gap-10 auto-rows-auto">
            <BlogPost v-for="i in 10" title="Test" group="group" time="8" imagePath="office" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. "/>
        </main>
    </div>
</template>