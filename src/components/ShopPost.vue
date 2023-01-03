<script>
export default {
    props: ['title']
}
</script>

<template>
    <article class="flex flex-col items-center">
        <header>
            <h2 class="text-center">{{ title }}</h2>
        </header>
        <div>
            <img src="https://picsum.photos/200/300" />
        </div>
    </article>
</template>