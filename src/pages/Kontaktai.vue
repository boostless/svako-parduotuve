<script setup>
import PageHeader from '../components/PageHeader.vue';
</script>

<template>
    <div class="w-full min-h-screen px-8 sm:px-16 md:px-32 pb-24 bg-purple-50">
        <PageHeader title="Susisiekite su mumis" subtitle="Norėtume išgirsti jūsų nuomonę. Užpildykite šią formą." />
        <main class="w-full flex items-center justify-center">
            <form class="w-full flex flex-col md:w-4/5 lg:w-2/3 xl:w-2/5 h-fit space-y-8" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div class="w-full flex flex-col 2xl:flex-row justify-between space-y-8 2xl:space-y-0 2xl:space-x-8">
                    <div class="grid space-y-2 w-full">
                        <label class="font-medium text-sm" for="name">Vardas <span class="text-red-500">*</span></label>
                        <input pattern="[A-Za-z]*" name="name" required="true" class="border rounded-lg px-4 py-3 outline-none shadow" id="name" type="name" placeholder="Vardenis"/>
                    </div>
                    <div class="grid space-y-2  w-full">
                        <label class="font-medium text-sm" for="surname">Pavardė <span class="text-red-500">*</span></label>
                        <input pattern="[A-Za-z]*" name="surname" required="true" class="border rounded-lg px-4 py-3 outline-none shadow" id="surname" type="surname" placeholder="Pavardenis"/>
                    </div>
                </div>
                <div class="w-full space-y-2">
                    <label class="font-medium text-sm" for="email">El. paštas <span class="text-red-500">*</span></label>
                    <div class="bg-white px-4 py-3 border rounded-lg flex items-center space-x-2 shadow">
                        <font-awesome-icon style="color: #667085" class="text-lg" icon="fa-regular fa-envelope" />
                        <input name="email" type="email" required="true" class=" text-black outline-none" placeholder="El. paštas" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="vardenis@pastas.lt"/>
                    </div>
                </div>
                <div class="w-full grid space-y-2">
                    <label class="font-medium text-sm" for="phone">Telefono numeris</label>
                    <input name="phone" class="border rounded-lg px-4 py-3 outline-none shadow" id="phone" type="phone" pattern="+370+{8}" placeholder="+370 616 50600"/>
                </div>
                <div class="w-full grid space-y-2">
                    <label class="font-medium text-sm" for="message">Žinutė <span class="text-red-500">*</span></label>
                    <textarea name="message" required="true" class="border p-3 rounded-lg resize-none h-32 shadow" placeholder="Įrašykite žinutę..."></textarea>
                </div>
                <div class="w-full flex items-center space-x-2">
                    <input name="privacy" id="privacy" required="true" class="h-5 w-5 rounded-lg" type="checkbox">
                    <label for="privacy" class="text-slate-550 font-medium">Sutinkus su <a class="underline cursor-pointer">privatumo politika</a>. <span class="text-red-500">*</span></label>
                </div>
                <button type="submit" class="w-full text-center py-3 rounded-lg bg-purple-450 text-white font-semibold hover:bg-white hover:text-purple-450 shadow">Siųsti žinutę</button>
            </form>
        </main>   
    </div>
</template>
