<script setup>
import PageHeader from '../components/PageHeader.vue';
</script>

<template>
    <div class="w-full min-h-fit px-32 pb-24">
        <PageHeader route="false" title="Naujienos" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."/>
        <main>
            <article class="flex flex-auto space-x-10">
                <div>
                    <img class="w-full h-auto" src="/images/office.png" />
                </div>
                <div class="w-1/3 space-y-4">
                    <div>
                        <span class="text-purple-600 text-lg font-semibold">Gamyba • 8 min.</span>
                    </div>
                    <header>
                        <h2 class="font-semibold text-3xl">Kaip gaminami Pliušinukai produkcija</h2>
                    </header>
                    <div>
                        <p class="break-words text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non. sit amet, consectetur adipiscing elit. </p>
                    </div>
                </div>
            </article>
        </main>
    </div>
</template>