<script setup>
import PageHeader from '../components/PageHeader.vue';
</script>

<template>
    <div class="w-full min-h-screen pb-24 bg-purple-50">
        <PageHeader title="Apie įmonę" subtitle="Sužinokite daugiau apie įmonę ir jos komandą." />
        <section class="w-full bg-gray-50 px-8 sm:px-16 md:px-32 pb-24 shadow-md">
            <PageHeader route="false" title="Mūsų vertybės" subtitle="Mums svarbi kiekvieno nuomonė"/>
            <div class="w-full flex flex-col sm:flex-row justify-evenly space-y-10 sm:space-y-0">
                <article class="flex flex-col items-center space-y-2 w-full sm:w-[384px]">
                    <div class="h-12 w-12 bg-purple-5 rounded-full flex items-center justify-center text-purple-450 text-lg"><font-awesome-icon icon="fa-solid fa-users" /></div>
                    <h3 class="font-medium text-center text-base sm:text-lg md:text-xl">Komanda</h3>
                    <span class="text-center text-slate-550 text-sm sm:text-base">Mūsų komanda sudaro talentingi siūvėjai.</span>
                </article>
                <article class="flex flex-col items-center space-y-2 w-full sm:w-[384px]">
                    <div class="h-12 w-12 bg-purple-5 rounded-full flex items-center justify-center text-purple-450 text-2xl"><font-awesome-icon icon="fa-regular fa-heart" /></div>
                    <h3 class="font-medium text-center text-base sm:text-lg md:text-xl">Kokybė</h3>
                    <span class="text-center text-slate-550 text-sm sm:text-base">Kiekvienas žaislas yra daromas rankomis, naudojami tik aukščiausios kokybės siūlai.</span>
                </article>
                <article class="flex flex-col items-center space-y-2 w-full sm:w-[384px]">
                    <div class="h-12 w-12 bg-purple-5 rounded-full flex items-center justify-center text-purple-450 text-lg"><font-awesome-icon icon="fa-solid fa-arrow-trend-up" /></div>
                    <h3 class="font-medium text-center text-base sm:text-lg md:text-xl">Tikslas</h3>
                    <span class="text-center text-slate-550 text-sm sm:text-base">Suteikti džiaugsmai mažiem ir dideliem, kai jie gauna mūsų žaisliuka.</span>
                </article>
            </div>
        </section>
        <section class="flex items-center justify-center mt-20">
            <div class="md:w-[854px] md:h-[480px] lg:w-[1280px] lg:h-[720px]">
                <iframe class="w-full h-full" src="https://www.youtube.com/embed/RcT7Bqe4yIM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
            </div>
        </section>  
    </div>
</template>