<template>
    <footer class="flex flex-col bg-purple-950 text-white px-32 mt-auto">
        <div class="w-full hidden md:flex items-center justify-between py-16">
            <header class="space-y-2">
                <h3 class="text-xl font-medium">Užsiprenumeruoktie mūsų naujienlaiškį</h3>
                <p class="text-gray-200 font-normal">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
            </header>
            <div class="space-x-3 flex">
                <div class="bg-white p-2 border rounded-lg flex items-center space-x-2">
                    <font-awesome-icon style="color: #667085" class="text-lg" icon="fa-regular fa-envelope" />
                    <input type="email" class=" text-black text-sm focus:outline-none" placeholder="Įveskite savo el. paštą..." pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="vardenis@pastas.lt"/>
                </div>
                <button class="py-2 px-4 bg-purple-450 rounded-lg font-semibold hover:bg-white hover:text-purple-450">Prenumeruoti</button>
            </div>
        </div>
        <div class="w-full h-px bg-purple-450"></div>
        <div class="w-full flex flex-col space-y-2 sm:space-y-0 sm:flex-row items-center justify-center sm:justify-between py-12">
            <span class="text-xl font-semibold">Pliušinukai</span>
            <span class="text-sm text-purple-10 text-center">© 2023 Pliušinukai. Visos teisės saugomos.</span>
        </div>
    </footer>
</template>
