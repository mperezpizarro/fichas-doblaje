<template>
    <tr class="odd:bg-gray-100 even:bg-gray-200">
        <td class="px-6 py-4">{{ original !== "" ? original : "(DESCONOCIDO)" }}</td>
        <td class="px-6 py-4">{{ doblaje !== "" ? doblaje : "(DESCONOCIDO)" }}</td>
        <td class="px-6 py-4">{{ personaje }}</td>
    </tr>
</template>

<script setup>
    const props = defineProps({
        original: String,
        doblaje: String,
        personaje: String
    })
</script>