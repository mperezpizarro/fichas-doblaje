<script setup>
    const props = defineProps({
        info: Object
    })
</script>

<template>
    <table class="my-8 mx-auto">
        <thead>
            <tr class="bg-gray-300 px-2 py-1">
                <th colspan="2" class="px-4 py-2">INFORMACIÓN TÉCNICA</th>
            </tr>
        </thead>
        <tbody>
            <TableRow title="Título original:" :value="info.titulo_vo" />
            <TableRow title="Dirección:" :value="info.direccion" />
            <TableRow title="Ajuste:" :value="info.ajuste" />
            <TableRow title="Ajuste musical:" :value="info.ajuste_musical" />
            <TableRow title="Dirección musical:" :value="info.direccion_musical" />
            <TableRow title="Estudio:" :value="info.estudio" />
        </tbody>
    </table>
</template>