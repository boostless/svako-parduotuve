<script setup>
import PageHeader from '../../components/PageHeader.vue';
</script>

<template>
    <div class="w-full min-h-screen px-32 pb-6 bg-purple-50">
        <PageHeader title="Produktų įkainiai" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <main class="w-full">
            <table class="border border-collapse table-auto w-full bg-white shadow-md">
                <thead>
                    <tr class="text-sm text-slate-550 border">
                        <th class="text-left font-medium px-6 py-3 border">Žaislas</th>
                        <th class="font-medium px-6 py-3 border">S Kaina</th>
                        <th class="font-medium px-6 py-3 border">M Kaina</th>
                        <th class="font-medium px-6 py-3 border">L Kaina</th>
                        <th class="font-medium px-6 py-3 border">XL Kaina</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="border">
                        <td class="grid px-6 py-3">
                            <span class="font-medium">Pliušinis žaislas 1</span>
                            <span class="text-slate-550">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                        </td>
                        <td class="text-center">10 €</td>
                        <td class="text-center">20 €</td>
                        <td class="text-center">30 €</td>
                        <td class="text-center">40 €</td>
                    </tr>
                    <tr class="border bg-slate-50">
                        <td class="grid px-6 py-3">
                            <span class="font-medium">Pliušinis žaislas 1</span>
                            <span class="text-slate-550">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                        </td>
                        <td class="text-center">10 €</td>
                        <td class="text-center">20 €</td>
                        <td class="text-center">30 €</td>
                        <td class="text-center">40 €</td>
                    </tr>
                    <tr class="border">
                        <td class="grid px-6 py-3">
                            <span class="font-medium">Pliušinis žaislas 1</span>
                            <span class="text-slate-550">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                        </td>
                        <td class="text-center">10 €</td>
                        <td class="text-center">20 €</td>
                        <td class="text-center">30 €</td>
                        <td class="text-center">40 €</td>
                    </tr>
                    <tr class="border bg-slate-50">
                        <td class="grid px-6 py-3">
                            <span class="font-medium">Pliušinis žaislas 1</span>
                            <span class="text-slate-550">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</span>
                        </td>
                        <td class="text-center">10 €</td>
                        <td class="text-center">20 €</td>
                        <td class="text-center">30 €</td>
                        <td class="text-center">40 €</td>
                    </tr>
                </tbody>
            </table>
        </main> 
    </div>
</template>