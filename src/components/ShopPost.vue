<script>
export default {
    props: ['title', 'image']
}
</script>

<template>
    <article class="flex flex-col items-center">
        <header>
            <h2 class="text-center">{{ title }}</h2>
        </header>
        <div>
            <img :src="image" />
        </div>
    </article>
</template>