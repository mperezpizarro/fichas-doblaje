<script setup>
    const props = defineProps({
        cast: Object
    })
</script>

<template>
    <table class="my-8 mx-auto">
        <thead>
            <tr class="bg-gray-300 px-2 py-1">
                <th colspan="3" class="px-4 py-2">REPARTO</th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-gray-100 even:bg-gray-200 font-bold">
                <td class="px-6 py-4">ORIGINAL</td>
                <td class="px-6 py-4">DOBLAJE</td>
                <td class="px-6 py-4">PERSONAJE</td>
            </tr>
            <CastRow 
                v-for="data in cast"
                :original="data.original"
                :doblaje="data.doblaje"
                :personaje="data.personaje"
            />
        </tbody>
    </table>
</template>