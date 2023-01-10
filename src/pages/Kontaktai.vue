<script setup>
import PageHeader from '../components/PageHeader.vue';
</script>

<template>
    <div class="w-full min-h-fit px-32 pb-24">
        <PageHeader title="Susisiekite su mumis" subtitle="Norėtume išgirsti jūsų nuomonę. Užpildykite šią formą." />
        <section class="w-full flex justify-center">
            <form class="min-h-fit w-2/6 px-6 space-y-6">
                <div class="w-full flex justify-between">
                    <div class="flex flex-col space-y-2">
                        <label for="name" class="text-sm font-medium">Vardas <span class="text-red-500">*</span></label>
                        <input required="true" class="border p-3 rounded-lg" id="name" type="text" placeholder="Vardas">
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="surname" class="text-sm font-medium">Pavardė <span class="text-red-500">*</span></label>
                        <input required="true" class="border p-3 rounded-lg" id="surname" type="text" placeholder="Pavardė">
                    </div>
                </div> 
                <div class="w-full flex flex-col space-y-2">
                    <label for="email" class="text-sm font-medium">El. paštas <span class="text-red-500">*</span></label>
                    <input required="true" class="border p-3 rounded-lg" id="email" type="email" placeholder="El. paštas" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$">
                </div>
                <div class="w-full flex flex-col space-y-2">
                    <label for="phone_number" class="text-sm font-medium">Telefono numeris</label>
                    <input class="border p-3 rounded-lg" id="phone_number" type="text" placeholder="+370 600 50600">
                </div>
                <div class="w-full flex flex-col space-y-2">
                    <label for="text_area" class="text-sm font-medium">Žinutė <span class="text-red-500">*</span></label>
                    <textarea required="true" class="border p-3 rounded-lg resize-none h-32" placeholder="Įrašykite žinutę..."></textarea>
                </div>
                <div class="w-full flex space-x-2 items-center">
                    <input required="true" class="h-5 w-5 rounded-lg" type="checkbox">
                    <label for="text_area" class="text-gray-500 font-medium">Sutinkus su <a class="underline cursor-pointer">privatumo politika</a>. <span class="text-red-500">*</span></label>
                </div>
                <button class="w-full text-center py-3 rounded-lg bg-purple-600 text-white font-semibold">Siųsti žinutę</button>
            </form> 
        </section>   
    </div>
</template>