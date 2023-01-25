<script setup>
import PageHeader from '../../components/PageHeader.vue';
</script>

<template>
    <div class="w-full min-h-screen px-8 sm:px-16 md:px-32 pb-6 bg-purple-50">
        <PageHeader title="Produktų įkainiai" subtitle="Sužinokitė apie žaisliukų įkainius pagal jų dydžius." />
        <main class="w-full overflow-x-auto">
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
                            <span class="font-medium">Karvutė</span>
                        </td>
                        <td class="text-center">40 €</td>
                        <td class="text-center">50 €</td>
                        <td class="text-center">60 €</td>
                        <td class="text-center">70 €</td>
                    </tr>
                    <tr class="border bg-slate-50">
                        <td class="grid px-6 py-3">
                            <span class="font-medium">Laputė</span>
                        </td>
                        <td class="text-center">25 €</td>
                        <td class="text-center">30 €</td>
                        <td class="text-center">40 €</td>
                        <td class="text-center">50 €</td>
                    </tr>
                    <tr class="border">
                        <td class="grid px-6 py-3">
                            <span class="font-medium">Pingvinukas mėlynas</span>
                        </td>
                        <td class="text-center">15 €</td>
                        <td class="text-center">20 €</td>
                        <td class="text-center">30 €</td>
                        <td class="text-center">40 €</td>
                    </tr>
                    <tr class="border bg-slate-50">
                        <td class="grid px-6 py-3">
                            <span class="font-medium">Pingvinukas violetinis</span>
                        </td>
                        <td class="text-center">15 €</td>
                        <td class="text-center">20 €</td>
                        <td class="text-center">30 €</td>
                        <td class="text-center">40 €</td>
                    </tr>
                </tbody>
            </table>
        </main> 
    </div>
</template>