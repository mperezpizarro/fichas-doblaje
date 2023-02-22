<script setup>
    const props = defineProps({
        info: Object
    })
</script>

<template>
    <table class="my-8 mx-auto">
        <thead>
            <tr class="bg-gray-300 px-2 py-1">
                <th class="px-4 py-2">INFORMACIÓN ADICIONAL</th>
            </tr>
        </thead>
        <tbody>
            <tr class="odd:bg-gray-100 even:bg-gray-200">
                <td class="px-6 py-4">{{ info !== "" ? info : "No hay información adicional." }}</td>
            </tr>
        </tbody>
    </table>
</template>