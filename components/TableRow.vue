<template>
    <tr class="odd:bg-gray-100 even:bg-gray-200">
        <td class="px-6 py-4">{{ title }}</td>
        <td class="px-6 py-4">{{ value !== "" ? value : "(DESCONOCIDO)" }}</td>
    </tr>
</template>

<script setup>
    const props = defineProps({
        title: String,
        value: String
    })
</script>