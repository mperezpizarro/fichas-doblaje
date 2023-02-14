<script setup>
    const { query } = useRoute().params
    const { data: resultado } = await useFetch(`/api/searchFicha?search=${encodeURIComponent(query.toLowerCase())}`, {key: query})

    definePageMeta({
        layout: 'search'
    })
</script>

<template>
    <div class="mt-4">
        <PageTitle>RESULTADOS DE LA BÚSQUEDA</PageTitle>
        <Grid extraCSS="mt-4" v-if="resultado.length > 0">
            <LinkCard v-for="data in resultado" :ficha="data" />
        </Grid>
        <p v-else>No se han encontrado resultados...</p>
    </div>
</template>